from django.db import models

from core.models import TimeStampModel, TimeStampUUIDModel


# Create your models here.
class Category(TimeStampModel):
    name = models.CharField(max_length=200)
    image = models.ImageField(upload_to="category", null=True, blank=True)
    slug = models.SlugField(max_length=200, unique=True)

    class Meta:
        verbose_name = "Category"
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name
