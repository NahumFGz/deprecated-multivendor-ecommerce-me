# Generated by Django 4.2.13 on 2024-05-29 17:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_profile', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='country_code',
            field=models.CharField(blank=True, max_length=10, null=True),
        ),
    ]
