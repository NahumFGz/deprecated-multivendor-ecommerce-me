from django.db import models
from django.db.models import signals
from django.dispatch import receiver
from django.utils.text import slugify
from thumbnails.fields import ImageField
from tinymce import models as tinymce_models

from core.models import TimeStampUUIDModel

from .category import Category
from .kind_product import KindProduct
from .sub_kind_product import SubKindProduct


class Product(TimeStampUUIDModel):
    category = models.ForeignKey(
        Category, related_name="product_category", blank=True, null=True, on_delete=models.CASCADE
    )
    kind_of_product = models.ForeignKey(
        KindProduct, related_name="product_kind", blank=True, null=True, on_delete=models.CASCADE
    )
    sub_kind_of_product = models.ForeignKey(
        SubKindProduct,
        related_name="product_subkind",
        blank=True,
        null=True,
        on_delete=models.CASCADE,
    )
    title = models.CharField(max_length=400)
    slug = models.SlugField(max_length=400, blank=True, null=True)
    short_description = tinymce_models.HTMLField(default="", blank=True, null=True)
    description = tinymce_models.HTMLField(default="", blank=True, null=True)
    views = models.IntegerField(default=0)
    rating = models.FloatField(default=0)
    image_principal = ImageField(upload_to="product", blank=True, null=True)

    def __str__(self):
        return str(self.title)

    @property
    def image_small_size(self):
        small_url = self.image_principal.thumbnails.small.url
        return small_url

    @property
    def image_medium_size(self):
        medium_url = self.image_principal.thumbnails.medium.url
        return medium_url

    @property
    def image_large_size(self):
        large_url = self.image_principal.thumbnails.large.url
        return large_url


@receiver(signals.pre_save, sender=Product)
def pre_save_product(sender, instance, **kwargs):
    instance.slug = slugify(instance.title)
