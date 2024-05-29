# user_profile/signals.py
from django.db import transaction
from django.db.models.signals import post_save
from django.dispatch import receiver
from user_profile.models import Profile


@receiver(post_save, sender=Profile)
def update_user_profile(sender, instance, **kwargs):
    user = instance.user

    # Verifica si hay algún cambio en los campos del usuario
    if (
        user.first_name != instance.first_name
        or user.last_name != instance.last_name
        or user.gender != instance.gender
        or user.birth_date != instance.birth_date
    ):
        # Si hay cambios, actualiza los campos del usuario después de que la transacción actual se complete
        transaction.on_commit(lambda: update_user_fields(user, instance))


def update_user_fields(user, profile):
    # Actualiza los campos del usuario con los valores del perfil
    user.first_name = profile.first_name
    user.last_name = profile.last_name
    user.gender = profile.gender
    user.birth_date = profile.birth_date

    # Guarda el usuario actualizado
    user.save()
