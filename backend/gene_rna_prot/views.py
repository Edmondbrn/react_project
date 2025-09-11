
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework import status
from Bio import Entrez

@api_view(["GET"])
def get_ncbi_gene_data(request : Request) -> Response:
    """API endpoint to query NCBI database to collect gene information

    Args:
        request (Request): The HTTPS request containing the NCBI gene identifier

    Returns:
        Response: The ncbi data about the queried gene
    """


    ncbi_identifier = request.query_params.get("ncbi_identifier", "")
    if not ncbi_identifier:
        return Response({"error": "No NCBI identifier provided"}, 
                        status=status.HTTP_400_BAD_REQUEST)
    
    Entrez.email = "edmond.berne6@gmail.com"
    
    try:
        # find the gene in Nucleotide database
        search_handle = Entrez.esearch(db="nucleotide", term=ncbi_identifier)
        search_results = Entrez.read(search_handle) # decode the XML response
        search_handle.close()
        
        if not search_results["IdList"]:
            return Response({"error": f"No results found for {ncbi_identifier}"}, 
                           status=status.HTTP_404_NOT_FOUND)
        # collect data from the raw response
        fetch_handle = Entrez.efetch(db="nucleotide", 
                                    id=search_results["IdList"][0],
                                    rettype="gb", 
                                    retmode="text")
        record = fetch_handle.read()
        fetch_handle.close()
        print(record, flush=True)
        
        return Response({
            "ncbi_identifier": ncbi_identifier,
            "id_found": search_results["IdList"][0]
        })
        
    except Exception as e:
        print(f"Error querying NCBI: {str(e)}", flush=True)
        return Response({"error": f"Error querying NCBI: {str(e)}"}, 
                       status=status.HTTP_500_INTERNAL_SERVER_ERROR)