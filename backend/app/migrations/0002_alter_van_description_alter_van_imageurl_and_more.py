# Generated by Django 5.0.3 on 2024-04-01 12:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='van',
            name='description',
            field=models.CharField(max_length=900),
        ),
        migrations.AlterField(
            model_name='van',
            name='imageUrl',
            field=models.CharField(max_length=500),
        ),
        migrations.AlterField(
            model_name='van',
            name='name',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='van',
            name='type',
            field=models.CharField(max_length=100),
        ),
    ]