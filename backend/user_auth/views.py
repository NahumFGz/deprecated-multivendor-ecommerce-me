from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from rest_framework_simplejwt.views import TokenObtainPairView
from user_auth.models import User
from user_auth.serializers import (
    CustomTokenObtainPairSerializer,
    PasswordResetConfirmSerializer,
    PasswordResetSerializer,
    UserRegistrationSerializer,
    UserSerializer,
)


class UserApiViewSet(ModelViewSet):
    queryset = User.objects.all()
    permission_classes = [IsAuthenticated]

    def get_serializer_class(self):
        if self.action == "create":
            return UserRegistrationSerializer
        return UserSerializer


class UserApiView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)


class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        return response


class LogoutAllDevicesView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            user = request.user
            user.session_id += 1
            user.save()
            return Response(
                {"detail": "Sesión cerrada en todos los dispositivos."},
                status=status.HTTP_200_OK,
            )
        except Exception as e:
            return Response(
                {"detail": f"Error al cerrar sesión en todos los dispositivos: {str(e)}"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )


class PasswordResetView(generics.GenericAPIView):
    serializer_class = PasswordResetSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(
            {"detail": "Password reset e-mail has been sent."},
            status=status.HTTP_200_OK,
        )


class PasswordResetConfirmView(generics.GenericAPIView):
    serializer_class = PasswordResetConfirmSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(
            {"detail": "Password has been reset successfully and close all sessions."},
            status=status.HTTP_200_OK,
        )
