# Generated by Django 4.2 on 2024-06-17 23:44

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('title', models.CharField(max_length=100)),
                ('bio', models.TextField()),
                ('email', models.EmailField(max_length=254)),
                ('linkedin', models.URLField(blank=True)),
                ('github', models.URLField(blank=True)),
                ('instagram', models.URLField(blank=True)),
            ],
        ),
    ]
