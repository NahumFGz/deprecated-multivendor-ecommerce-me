from django.contrib.auth import get_user_model
from django.db.models.signals import post_save
from django.dispatch import receiver
from user_profile.models import Profile

User = get_user_model()


@receiver(post_save, sender=User)
def manage_user_profile(sender, instance, created, **kwargs):
    if created:
        # Si el usuario es nuevo, se crea un perfil
        Profile.objects.create(
            user=instance,
            first_name=instance.first_name,
            last_name=instance.last_name,
            gender=instance.gender,
            birth_date=instance.birth_date,
        )
    else:
        # Si el usuario ya existe, se actualiza el perfil
        if hasattr(instance, "profile"):
            instance.profile.first_name = instance.first_name
            instance.profile.last_name = instance.last_name
            instance.profile.gender = instance.gender
            instance.profile.birth_date = instance.birth_date
            instance.profile.save()
