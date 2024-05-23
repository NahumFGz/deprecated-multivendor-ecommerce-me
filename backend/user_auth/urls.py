# users/api/router.py

from django.urls import include, path
from rest_framework import routers
from rest_framework_simplejwt.views import TokenRefreshView

from user_auth import views

router = routers.DefaultRouter()
router.register(prefix="user", viewset=views.UserApiViewSet, basename="user")

urlpatterns = [
    path("", include(router.urls)),
    path("auth/me/", views.UserApiView.as_view(), name="user_info"),
    path(
        "auth/login-access/",
        views.CustomTokenObtainPairView.as_view(),
        name="token_obtain_pair",
    ),
    path("auth/login-refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("auth/register/", views.UserRegisterView.as_view(), name="user_register"),
    path(
        "auth/logout-all/",
        views.LogoutAllDevicesView.as_view(),
        name="logout_all_devices",
    ),
    path("auth/password-reset/", views.PasswordResetView.as_view(), name="password_reset"),
    path("auth/password-change/", views.PasswordChangeView.as_view(), name="password_change"),
    path(
        "auth/password-reset-confirm/<uidb64>/<token>/",
        views.PasswordResetConfirmView.as_view(),
        name="password_reset_confirm",
    ),
]
