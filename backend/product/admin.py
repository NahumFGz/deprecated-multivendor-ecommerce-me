from django.contrib import admin

from product.models import Category, KindProduct, Product, SubKindProduct


# Register your models here.
@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    readonly_fields = [
        "image_small_size",
        "image_medium_size",
        "image_large_size",
        "created_at",
        "updated_at",
    ]


@admin.register(KindProduct)
class KindProductAdmin(admin.ModelAdmin):
    pass


@admin.register(SubKindProduct)
class SubKindProductAdmin(admin.ModelAdmin):
    pass


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    pass
