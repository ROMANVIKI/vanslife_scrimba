from rest_framework import serializers
from .models import Van
from django.contrib.auth.models import User



class VanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Van
        fields = "__all__"
        


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']


    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
    