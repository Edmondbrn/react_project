from rest_framework import serializers
from .models.gene import Gene
from .models.rna import Rna
from .models.protein import Protein

class GeneSerialiser (serializers.ModelSerializer):
    """_summary_
    Serializer class for Gene

    Args:
        serializers (_type_): _description_
    """
    class Meta:
        model = Gene
        fields = "__all__"


class RnaSerialiser (serializers.ModelSerializer):
    """_summary_
    Serializer class for Rna

    Args:
        serializers (_type_): _description_
    """
    class Meta:
        model = Rna
        fields = "__all__"


class ProteinSerialiser (serializers.ModelSerializer):
    """_summary_
    Serializer class for Protein

    Args:
        serializers (_type_): _description_
    """
    class Meta:
        model = Protein
        fields = "__all__"

