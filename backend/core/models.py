import uuid

from django.db import models


# Create your models here.
class TimeStampModel(models.Model):
    created_at = models.DateTimeField(db_index=True, auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class UUIDModel(models.Model):
    """
    Best practice for lookup field url instead pk or slug for security
    """

    uuid = models.UUIDField(db_index=True, unique=True, editable=False)

    class Meta:
        abstract = True


class TimeStampUUIDModel(models.Model):
    """
    Best practice for lookup field url instead pk or slug for security
    """

    uuid = models.UUIDField(db_index=True, unique=True, editable=False, default=uuid.uuid4)
    created_at = models.DateTimeField(db_index=True, auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True
