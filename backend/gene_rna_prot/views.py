
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework import status
from Bio import Entrez, SeqIO, SeqRecord
import os

from utils.file_manager import tmp_file
from .services.gene_import_service import (
    parse_gene_nucleotide_file, get_nucleotide_data, 
)

@api_view(["GET"])
def get_ncbi_gene_data(request : Request) -> Response:
    """API endpoint to query NCBI database to collect gene information

    Args:
        request (Request): The HTTPS request containing the NCBI gene identifier

    Returns:
        Response: The NCBI data about the queried gene
    """

    # get the identifier from the HTTP GET query
    ncbi_identifier = request.query_params.get("ncbi_identifier", "")
    if not ncbi_identifier: # if not present in the request
        return Response({"error": "No NCBI identifier provided"}, 
                        status=status.HTTP_400_BAD_REQUEST)
    
    Entrez.email = os.getenv("MAIL", "") # get mail from env variables
    
    try:
        data, search_ID = get_nucleotide_data(ncbi_identifier) # fetch data from the Nucleotide database
        if data == "":
            return Response({"error": f"No results found for {ncbi_identifier}"}, 
                        status=status.HTTP_404_NOT_FOUND)

        file_name = tmp_file(data) # The GeneBank parser needs a text file
        recs : list[SeqRecord.SeqRecord] = [rec for rec in SeqIO.parse(file_name, format =  "gb")] # get the genbank text file
        os.remove(file_name) # remove the tmp file

        nb_records = len(recs)
        if nb_records == 1: # if we only have one GeneBank file (logical case)
            results = parse_gene_nucleotide_file(recs[0])
        else: # NOT acceptable if we have various genebankk files
            return Response({"error": f"The given id {ncbi_identifier} is linked to various GeneBank files ({nb_records})."},
                            status = status.HTTP_406_NOT_ACCEPTABLE)
        
        return Response({
            "ncbi_identifier": ncbi_identifier,
            "id_found": search_ID,
            "source": results.source_data,
            "gene": results.gene_data,
            "rna": results.rna_data,
            "exon": results.exon_data,
            "protein": results.protein_data
        })
        
    except Exception as e:
        return Response({"error": f"Error querying NCBI: {str(e)}"}, 
                       status = status.HTTP_500_INTERNAL_SERVER_ERROR)