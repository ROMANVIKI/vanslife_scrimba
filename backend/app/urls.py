from django.urls import path
from .views import CreateVanView, ListVanView, RetrieveVan

urlpatterns = [
    path('create', CreateVanView.as_view(), name='create'),
    path('vans', ListVanView.as_view(), name='vans'),
    path('van/<int:pk>', RetrieveVan.as_view()),

]
