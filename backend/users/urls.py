from django.urls import path
from .views import UserListCreateAPIView, check_user_exists, login_user

urlpatterns = [
    path('users/', UserListCreateAPIView.as_view(), name='user-list-create'),
    path('check-user/', check_user_exists, name='check-user-exists'),
    path('login/', login_user, name='user-login'),
]