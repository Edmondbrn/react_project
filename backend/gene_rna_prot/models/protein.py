from django.db import models
from .rna import Rna


class Protein(models.Model):

    rna = models.ForeignKey(Rna, on_delete=models.CASCADE, related_name="proteins")

    name = models.CharField(max_length=50)

    ncbi_id = models.CharField(max_length=255)

    length = models.IntegerField()

    sequence = models.TextField(max_length=5000)


    class Meta():
        db_table = "protein"

    # ========================================
    
    
    # Operator overload

    
    # ========================================


    def __str__(self):
        return f"{self.ncbi_id} / {self.name}"