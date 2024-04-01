from django.db import models

# Create your models here.

class Van(models.Model):
    name =  models.CharField(max_length=100)
    price = models.IntegerField()
    description = models.CharField(max_length=900)
    imageUrl = models.CharField(max_length=500)
    type = models.CharField(max_length=100)


    def __str__(self):
        return self.name
    

