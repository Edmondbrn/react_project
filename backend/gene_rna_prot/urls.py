from django.urls import path
from .views import get_ncbi_gene_data

urlpatterns = [
    path('get-ncbi-gene-data/', get_ncbi_gene_data, name='get-ncbi-gene-data'),
]