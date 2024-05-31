from rest_framework import serializers

from product.models import Category, KindProduct, Product, SubKindProduct


class SubKindProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubKindProduct
        fields = "__all__"


class KindProductSerializer(serializers.ModelSerializer):
    SubKindProduct = SubKindProductSerializer(many=True, read_only=True)

    class Meta:
        model = KindProduct
        fields = "__all__"


class CategorySerializer(serializers.ModelSerializer):
    kinds = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = "__all__"

    def get_kinds(self, obj):
        kinds = KindProduct.objects.filter(category=obj).order_by("-modified_at")
        return KindProductSerializer(kinds, many=True).data


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"
