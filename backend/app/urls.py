from django.urls import path
from .views import CreateVanView, ListVanView, RetrieveAPIView

urlpatterns = [
    path('create', CreateVanView.as_view(), name='create'),
    path('vans', ListVanView.as_view(), name='vans'),
    path('retrieve/<int:pk>', RetrieveAPIView.as_view(), name='retrieve')

]
