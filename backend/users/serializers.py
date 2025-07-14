from rest_framework import serializers
from django.contrib.auth.models import User

class UserSerializer (serializers.ModelSerializer):
    """_summary_
    Serializer class for custom User

    Args:
        serializers (_type_): _description_
    """
    class Meta:
        model = User
        fields = "__all__"

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            first_name=validated_data.get('first_name', 'default'),
            last_name=validated_data.get('last_name', 'default'),
            email=validated_data.get('email', 'default@default'),
            password=validated_data['password']
        )
        return user