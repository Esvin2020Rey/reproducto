"""Model Productos"""

from django.db import models
#from api.utils.baseModel import BaseModel


class Productos(models.Model):
    nombre = models.CharField(max_length=100)
    description = models.CharField(max_length=40, blank=True)
    cantidad = models.CharField(max_length=16, blank=True)

    activo = models.BooleanField(default=True)
    creado = models.DateTimeField(auto_now_add=True)
    modificado = models.DateTimeField(auto_now=True)


    def delete(self, *args):
        self.activo = False
        self.save()
        return True
