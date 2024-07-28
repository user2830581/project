from django.contrib.auth import get_user_model
from djoser.serializers import UserCreateSerializer


CustomUser = get_user_model()

class CreateUserSerializer(CustomUser):
    class Meta(UserCreateSerializer.Meta):
        model = CustomUser
        fields = ['id', 'email', 'password']