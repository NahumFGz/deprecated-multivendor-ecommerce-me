from django.db import models
from django.db.models import signals
from django.dispatch import receiver
from django.utils.text import slugify
from thumbnails.fields import ImageField

from core.models import TimeStampModel

from .category import Category


class KindProduct(TimeStampModel):
    category = models.ForeignKey(
        Category, related_name="kinds", blank=True, null=True, on_delete=models.CASCADE
    )
    name = models.CharField(max_length=200, unique=True)
    slug = models.SlugField(max_length=200, blank=True, null=True)
    principal_image = ImageField(upload_to="kind", blank=True, null=True)

    class Meta:
        verbose_name = "Kind"
        verbose_name_plural = "Kinds"

    def __str__(self):
        return self.name


@receiver(signals.pre_save, sender=KindProduct)
def pre_save_kind_product(sender, instance, **kwargs):
    instance.slug = slugify(instance.name)
