from django.db import models


class Gene(models.Model):


    name = models.CharField(max_length=50)

    ncbi_id = models.CharField(max_length=255)

    chromosome = models.CharField(max_length=5) # number or letter for the chromosome

    organism = models.CharField(max_length=255) # name of the host organism

    start_idx = models.IntegerField() # the start index on the genome

    end_idx = models.IntegerField()

    strand = models.CharField(max_length=1) # + / -

    class Meta():
        db_table = "gene"

    # ========================================
    
    
    # Operator overload

    
    # ========================================


    def __str__(self):
        return f"{self.ncbi_id} / {self.name}"