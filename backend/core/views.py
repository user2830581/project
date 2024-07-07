from django.shortcuts import render
from rest_framework import viewsets
from .serializers import UserSerializer
from .models import User

# Create your views here.


class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()


def index(request):
 #   # all users stored in database
  #  users = User.objects.all()
   # context = {'users':users}
    return render(request, 'core/index.html')