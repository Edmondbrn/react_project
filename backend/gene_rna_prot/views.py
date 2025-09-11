
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework import status

@api_view(["GET"])
def get_ncbi_gene_data(request : Request) -> Response:
    """API endpoint to query NCBI database to collect gene information

    Args:
        request (Request): The HTTPS request containing the NCBI gene identifier

    Returns:
        Response: The ncbi data about the queried gene
    """
    ncbi_identifier = request.query_params.get("ncbi_identifier", "Unknown")
    return (Response({
            "ncbi_identifier" : request.query_params.get("ncbi_identifier", "Error")
        }, status = status.HTTP_200_OK)
    )