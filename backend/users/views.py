from rest_framework import generics
from .models.user import User
from .serializers import UserSerializer
from rest_framework.permissions import AllowAny


class UserListCreateAPIView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny] # TODO to test, to remove