from django.db import models
from django.db.models import signals
from django.dispatch import receiver
from django.utils.text import slugify

from core.models import TimeStampModel

from .kind_product import KindProduct


class SubKindProduct(TimeStampModel):
    kind = models.ForeignKey(
        KindProduct, related_name="subkinds", blank=True, null=True, on_delete=models.CASCADE
    )
    name = models.CharField(max_length=200, unique=True)
    slug = models.SlugField(max_length=200, blank=True, null=True)

    class Meta:
        verbose_name = "SubKind"
        verbose_name_plural = "SubKinds"

    def __str__(self):
        return self.name


@receiver(signals.pre_save, sender=SubKindProduct)
def pre_save_sub_kind_product(sender, instance, **kwargs):
    instance.slug = slugify(instance.name)
