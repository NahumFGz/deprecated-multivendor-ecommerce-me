from django.contrib.auth.models import AbstractUser
from django.db import models
from user_auth.managers import UserManager


class User(AbstractUser):
    username = None
    first_name = None
    last_name = None
    email = models.EmailField(unique=True)
    password_reset_token = models.CharField(max_length=255, null=True, blank=True)
    password_reset_sent_at = models.DateTimeField(null=True, blank=True)
    session_id = models.IntegerField(default=0)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects = UserManager()
