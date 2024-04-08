from django.shortcuts import render
from rest_framework.generics import CreateAPIView, ListAPIView, ListCreateAPIView, RetrieveAPIView
from .models import Van
from .serializers import VanSerializer, UserSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.contrib.auth.models import User


# Create your views here.



class CreateUser(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]



class CreateVanView(ListCreateAPIView):
    queryset = Van.objects.all()
    serializer_class = VanSerializer
    permission_classes = [IsAuthenticated]
    


class ListVanView(ListAPIView):
    queryset = Van.objects.all()
    serializer_class = VanSerializer
    permission_classes = [IsAuthenticated]


class RetrieveVan(RetrieveAPIView):
    queryset = Van.objects.all()
    serializer_class = VanSerializer
    permission_classes = [IsAuthenticated]


