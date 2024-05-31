from rest_framework import serializers

from product.models import Category, KindProduct, Product, SubKindProduct


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class KindProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = KindProduct
        fields = "__all__"


class SubKindProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubKindProduct
        fields = "__all__"


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"
