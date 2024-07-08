from rest_framework import serializers
from .models import User

# serializers to convert model instances to JSON so the frontend can work with received data

# modelserializer provides shortcuts to automatically create a serializer class with fields that correspond to the model fields


class UserSerializer(serializers.ModelSerializer):

# meta class defines the metadata info that the model had and must be converted to user class

    class Meta:
        model = User 
        fields = ('email', 'password', 'creationDate')
