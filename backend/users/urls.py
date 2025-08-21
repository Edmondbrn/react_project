from django.urls import path
from .views import UserListCreateAPIView, check_user_exists, login_user, refresh_token, logout_user

urlpatterns = [
    path('users/', UserListCreateAPIView.as_view(), name='user-list-create'),
    path('check-user/', check_user_exists, name='check-user-exists'),
    path('login/', login_user, name='user-login'),
    path('logout/', logout_user, name='logout'),
    path('refresh-token/', refresh_token, name='refres-token'),
]