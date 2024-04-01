from rest_framework import serializers
from .models import Van



class VanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Van
        fields = "__all__"
        

