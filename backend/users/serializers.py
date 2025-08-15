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


    def validate_email(self, value : str):
        """ Method to ckeck if the email does not already exists in the database

        Args:
            value (str): the given email from the REACT

        Raises:
            serializers.ValidationError: if the email already exists in the database

        Returns:
            str: the valid email
        """
        if User.objects.filter(email = value).exists():
            raise serializers.ValidationError(f"This email {value} is already linked to an account.")
        return value
    
    def validate_username(self, value : str):
        """ Method to ckeck if the username does not already exists in the database

        Args:
            value (str): the given username from the REACT

        Raises:
            serializers.ValidationError: if the username already exists in the database

        Returns:
            str: the valid username
        """
        if User.objects.filter(username = value).exists():
            raise serializers.ValidationError(f"This username {value} is already linked to an account.")
        return value

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            first_name=validated_data.get('first_name', 'default'),
            last_name=validated_data.get('last_name', 'default'),
            email=validated_data.get('email', 'default@default'),
            password=validated_data['password']
        )
        return user