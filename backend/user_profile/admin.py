from django.contrib import admin
from user_profile.models import Profile


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ("first_name", "last_name", "gender", "document_number")
    search_fields = ("first_name", "last_name", "date")
    list_filter = ("user",)
