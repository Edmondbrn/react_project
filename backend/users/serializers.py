from rest_framework import serializers
from .models.user import User

class UserSerializer (serializers.ModelSerializer):
    """_summary_
    Serializer class to transform User class into JSON object

    Args:
        serializers (_type_): _description_
    """
    class Meta:
        model = User
        fields = "__all__"