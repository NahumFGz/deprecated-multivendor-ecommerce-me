from django.contrib import admin

from product.models import Category, KindProduct


# Register your models here.
@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    pass


@admin.register(KindProduct)
class KindProductAdmin(admin.ModelAdmin):
    pass
