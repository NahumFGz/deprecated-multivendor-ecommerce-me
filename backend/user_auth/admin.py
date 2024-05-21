from django.contrib import admin
from user_auth.models import Profile, User


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ("email", "is_staff", "is_active", "is_superuser", "session_id")
    list_filter = ("is_staff", "is_active", "is_superuser")


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ("user", "first_name", "last_name")
    search_fields = ("user__email", "phone_number", "address", "city", "country", "zip_code")
