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


class SimpleKindProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = KindProduct
        fields = ["id", "slug"]


class CategorySerializer(serializers.ModelSerializer):
    kinds = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = "__all__"

    def get_kinds(self, obj):
        kinds = KindProduct.objects.filter(category=obj).order_by("-modified_at")
        return KindProductSerializer(kinds, many=True).data


class ProductSerializer(serializers.ModelSerializer):
    images = serializers.SerializerMethodField()
    kind_of_product = SimpleKindProductSerializer()

    class Meta:
        model = Product
        fields = (
            "id",
            "category",
            "kind_of_product",
            "sub_kind_of_product",
            "title",
            "slug",
            "short_description",
            "description",
            "views",
            "rating",
            "images",
        )

    def get_images(self, obj):
        return {
            "principal": obj.image_principal.url if obj.image_principal else None,
            "small": obj.image_small_size if obj.image_principal else None,
            "medium": obj.image_medium_size if obj.image_principal else None,
            "large": obj.image_large_size if obj.image_principal else None,
        }
