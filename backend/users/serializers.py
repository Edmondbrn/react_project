from rest_framework import serializers
from .models.user import User

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
        """_summary_

        Args:
            validated_data (dict): data from REACt front end validated by Django

        Returns:
            User: = The new user
        """
        user = User(
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            email=validated_data['email'],
        )
        user.set_password(validated_data['password'])
        user.save()
        return user