from rest_framework import viewsets

from product.models import Category, KindProduct, Product, SubKindProduct

from .serializers import (
    CategorySerializer,
    KindProductSerializer,
    ProductSerializer,
    SubKindProductSerializer,
)


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class KindProductViewSet(viewsets.ModelViewSet):
    queryset = KindProduct.objects.all()
    serializer_class = KindProductSerializer


class SubKindProductViewSet(viewsets.ModelViewSet):
    queryset = SubKindProduct.objects.all()
    serializer_class = SubKindProductSerializer


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    http_method_names = ["get", "post", "patch"]
