from django.db import models
from .gene import Gene


class Rna(models.Model):

    gene = models.ForeignKey(Gene, on_delete=models.CASCADE, related_name="rnas")

    name = models.CharField(max_length=50)

    ncbi_id = models.CharField(max_length=255)

    is_protein_coding = models.BooleanField()

    start_idx = models.IntegerField() # the start index on the genome

    end_idx = models.IntegerField()

    cds_start = models.IntegerField()

    cds_end = models.IntegerField()

    length = models.IntegerField()


    class Meta():
        db_table = "rna"

    # ========================================
    
    
    # Operator overload

    
    # ========================================


    def __str__(self):
        return f"{self.ncbi_id} / {self.name}"