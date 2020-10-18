""" SERIALIZER Companies """

# Djnago REST framework
from rest_framework import serializers

from rest_framework import serializers
from django.contrib.auth.models import User
from api.models.products import Productos
from api.models import Profile


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'


class ProductosSerializer(serializers.ModelSerializer):

    #profile = ProfileSerializer(required=False)

    class Meta:
        model = Productos
        fields = (
            'id',
            'nombre',
            'cantidad',
            'description',
        )


class ProductosReadSerializer(serializers.ModelSerializer):
    #profile = ProfileSerializer(required=False)

    class Meta:
        model = Productos
        fields = (
            'id',
            'nombre',
            'cantidad',
            'description',
        )
