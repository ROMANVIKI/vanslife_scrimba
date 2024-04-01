from django.shortcuts import render
from rest_framework.generics import CreateAPIView, ListAPIView, ListCreateAPIView, RetrieveAPIView
from .models import Van
from .serializers import VanSerializer
from rest_framework.permissions import AllowAny


# Create your views here.



class CreateVanView(ListCreateAPIView):
    queryset = Van.objects.all()
    serializer_class = VanSerializer
    permission_classes = [AllowAny]
    


class ListVanView(ListAPIView):
    queryset = Van.objects.all()
    serializer_class = VanSerializer
    permission_classes = [AllowAny]

class RetrieveVanView(RetrieveAPIView):
    queryset = Van.objects.all()
    serializer_class = VanSerializer
    permission_classes = [AllowAny]