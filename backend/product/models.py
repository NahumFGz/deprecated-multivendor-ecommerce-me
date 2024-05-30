from django.db import models
from django.db.models import signals
from django.dispatch import receiver
from thumbnails.fields import ImageField

from core.models import TimeStampModel, TimeStampUUIDModel


# Create your models here.
class Category(TimeStampModel):
    name = models.CharField(max_length=200)
    image = ImageField(upload_to="category", blank=True, null=True)
    slug = models.SlugField(max_length=200, blank=True, null=True)

    class Meta:
        verbose_name = "Category"
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name

    @property
    def image_small_size(self):
        small_url = self.image.thumbnail.small.url
        return small_url

    @property
    def image_medium_size(self):
        medium_url = self.image.thumbnail.medium.url
        return medium_url

    @property
    def image_large_size(self):
        large_url = self.image.thumbnail.large.url
        return large_url


@receiver(signals.pre_save, sender=Category)
def pre_save_category(sender, instance, **kwargs):
    instance.slug = instance.name.replace(" ", "-").lower()
