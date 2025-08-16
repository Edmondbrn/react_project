from rest_framework import generics
from .serializers import UserSerializer
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework_simplejwt.tokens import RefreshToken


class UserListCreateAPIView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny] # TODO to test, to remove

@api_view(["POST"])
@permission_classes([AllowAny])  # let anonymous to connect
def login_user(request : Request):
    username = request.data.get("username")
    password = request.data.get("password")

    if not username or not password:
        return Response({
            "error": "Username and password are required"
        }, status = status.HTTP_400_BAD_REQUEST)
    
    user : User = authenticate(username = username, password = password)

    if user:
        # generate JWT token
        refresh = RefreshToken.for_user(user)
        access_token = refresh.access_token
        return Response({
            "success": True,
            "user_id": user.id,
            "username": user.username,
            "access_token": str(access_token),
            "refresh_token": str(refresh)
        }, status =  status.HTTP_200_OK)
    else:
        return Response({
            "error": "Invalid credentials"
        }, status = status.HTTP_401_UNAUTHORIZED)
    

@api_view(["POST"])
@permission_classes([AllowAny])  # let anonymous to connect
def check_user_exists(request : Request):
    username = request.data.get("username")

    if not username:
        return Response({
            "error": "Username is required"
            }, status = status.HTTP_400_BAD_REQUEST)
    
    user_exists = User.objects.filter(username = username).exists()

    return Response({
        "exists": user_exists
    }, status = status.HTTP_200_OK)
