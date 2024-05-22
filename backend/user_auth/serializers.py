import re

from decouple import config
from django.contrib.auth.hashers import make_password
from django.contrib.auth.tokens import default_token_generator
from django.core.mail import EmailMultiAlternatives, send_mail
from django.template.loader import render_to_string
from django.utils import timezone
from django.utils.encoding import force_bytes, force_str
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from user_auth.models import User


class UserRegistrationSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ("id", "email", "first_name", "last_name", "password", "password2")
        extra_kwargs = {"password": {"write_only": True}}

    def validate(self, attrs):
        password = attrs.get("password")
        password2 = attrs.get("password2")

        if password != password2:
            raise serializers.ValidationError({"password": "Password fields didn't match."})

        # Custom password validations
        if len(password) < 8:
            raise serializers.ValidationError(
                {"password": "Password must be at least 8 characters long."}
            )
        if not re.search(r"[a-zA-Z]", password):
            raise serializers.ValidationError(
                {"password": "Password must contain at least one letter."}
            )
        if not re.search(r"[0-9]", password):
            raise serializers.ValidationError(
                {"password": "Password must contain at least one digit."}
            )
        if not re.search(r"[!@#$%^&*(),.?\":{}|<>]", password):
            raise serializers.ValidationError(
                {"password": "Password must contain at least one special character."}
            )

        return attrs

    def create(self, validated_data):
        validated_data.pop("password2")
        validated_data["password"] = make_password(validated_data["password"])
        return User.objects.create(**validated_data)


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            "id",
            "email",
            "first_name",
            "last_name",
            "password",
            "is_active",
            "is_staff",
            "is_superuser",
        )
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        validated_data["password"] = make_password(validated_data["password"])
        return User.objects.create(**validated_data)

    def update(self, instance, validated_data):
        if "password" in validated_data:
            validated_data["password"] = make_password(validated_data["password"])
        for key, value in validated_data.items():
            setattr(instance, key, value)
        instance.save()
        return instance

    def partial_update(self, instance, validated_data):
        if "password" in validated_data:
            validated_data["password"] = make_password(validated_data["password"])
        for key, value in validated_data.items():
            setattr(instance, key, value)
        instance.save()
        return instance


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):

    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token["session_id"] = user.session_id

        return token


class PasswordResetSerializer(serializers.Serializer):
    email = serializers.EmailField()

    def validate_email(self, value):
        if not User.objects.filter(email=value).exists():
            raise serializers.ValidationError("No user is associated with this email address.")
        return value

    def save(self):
        email = self.validated_data["email"]
        user = User.objects.get(email=email)
        token = default_token_generator.make_token(user)
        uid = urlsafe_base64_encode(force_bytes(user.pk))

        # Actualizar el token y la fecha de envío
        user.password_reset_token = token
        user.password_reset_sent_at = timezone.now()
        user.save()

        # Configurar tu dominio correctamente
        domain = config("HOST_DOMAIN")
        http_protocol = config("HTTP_HTTPS_PROTOCOL")
        link = f"{http_protocol}://{domain}/api/auth/password-reset-confirm/{uid}/{token}/"

        # Renderizar la plantilla HTML
        context = {
            "user": user,
            "link": link,
        }
        subject = config("EMAIL_SUBJECT")
        from_email = config("EMAIL_FROM")
        to_email = [email]
        text_content = f"Click the link to reset your password: {link}"
        html_content = render_to_string("password_reset_email.html", context)

        # Enviar el correo electrónico
        msg = EmailMultiAlternatives(subject, text_content, from_email, to_email)
        msg.attach_alternative(html_content, "text/html")
        msg.send(fail_silently=False)


class PasswordResetConfirmSerializer(serializers.Serializer):
    new_password = serializers.CharField(write_only=True)
    uidb64 = serializers.CharField()
    token = serializers.CharField()

    def save(self):
        uidb64 = self.validated_data["uidb64"]
        token = self.validated_data["token"]
        try:
            uid = force_str(urlsafe_base64_decode(uidb64))
            user = User.objects.get(pk=uid)
        except (TypeError, ValueError, OverflowError, User.DoesNotExist):
            raise serializers.ValidationError("Invalid UID")

        if user.password_reset_token != token:
            raise serializers.ValidationError("Invalid token")

        # Actualizar la contraseña y limpiar los campos de reseteo
        user.set_password(self.validated_data["new_password"])
        user.password_reset_token = None
        user.password_reset_sent_at = None
        user.session_id += 1
        user.save()

        return user
