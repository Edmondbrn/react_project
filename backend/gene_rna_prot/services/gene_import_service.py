from Bio import Entrez, SeqIO, SeqRecord, SeqFeature
from .record_classes import GeneImportResults



def get_nucleotide_data(nucleotide_identifier : str) -> tuple[str, int]:
    """Function to query Nucleotide database (NCBI) to get the GenBank text file as a string

    Args:
        nucleotide_identifier (str): The Nucleotide identifier

    Returns:
        tuple[str, int]: The GeneBank text file or an empty string if nothing is found AND the search results with the found ID
    """
    # find the gene in Nucleotide database
    search_handle = Entrez.esearch(db = "nucleotide", term = nucleotide_identifier)
    search_results = Entrez.read(search_handle) # decode the XML response
    search_handle.close()
    
    if not search_results["IdList"]:
        return ""
    
    # collect data from the raw response
    fetch_handle = Entrez.efetch(db = "nucleotide", 
                                id = search_results["IdList"][0], # only take the first one in this case
                                rettype = "gb", # get the GenBank text file
                                retmode = "text")
    record = fetch_handle.read()
    fetch_handle.close()
    return record, search_results["IdList"][0] # return the genbank file as a string and the research ID


def parse_gene_nucleotide_file(record : SeqRecord.SeqRecord) -> GeneImportResults:
    """*Function to parse the gene GeneBank file from Nucleotide database

    Args:
        record (SeqRecord.SeqRecord): The record from the SeqIO parser of Biopython

    Returns:
        GeneImportResults: A class to store the data from the GeneBank file
    """
    # extract important parts
    annotations = record.annotations
    features = record.features
    source_data = {
        "organism" : annotations.get("organism", "Not found")
    }
    # create list to store data
    gene_list, rna_list = [], []
    prot_list, exon_list = [], []
    # iterate on the features section of the file
    for feat in features:
        qualifiers = feat.qualifiers

        if feat.type == "gene":
            gene_list.append(handle_gene(feat, qualifiers))
        elif feat.type == "CDS":
            prot_list.append(handle_protein(feat, qualifiers))
        elif feat.type == "mRNA":
            rna_list.append(handle_mrna(feat, qualifiers))
        elif feat.type == "ncRNA":
            rna_list.append(handle_ncrna(feat, qualifiers))
        elif feat.type == "source":
            source_data = handle_source(source_data, qualifiers)
        elif feat.type == "exon":
            exon_list.append(handle_exon(feat, qualifiers))
    
    return GeneImportResults(source_data, gene_list, rna_list, prot_list, exon_list)


def handle_gene(feat: SeqFeature.SeqFeature, qualifiers: dict) -> dict:
    return {
        "coord": feat.location,
        "xref": string_list_to_dict(qualifiers.get("db_xref", [])),
        "name": qualifiers.get("gene", ["Unknown"])[0],
        "synonyms": string_to_list(qualifiers.get("gene_synonym", [""])[0]),
        "full_name": qualifiers.get("note", ["Unknown"])[0]
    }

def handle_protein(feat: SeqFeature.SeqFeature, qualifiers: dict) -> dict:
    return {
        "xref": string_list_to_dict(qualifiers.get("db_xref", [])),
        "comments": qualifiers.get("note", ["No comment"])[0],
        "full_name": qualifiers.get("product", ["Unknown"])[0],
        "ncbi_id": qualifiers.get("protein_id", ["Unknown"])[0],
        "gene": qualifiers.get("gene", ["Unknown"])[0],
        "seq": qualifiers.get("translation", [""])[0]
    }

def handle_mrna(feat: SeqFeature.SeqFeature, qualifiers: dict) -> dict:
    return {
        "xref": string_list_to_dict(qualifiers.get("db_xref", [])),
        "full_name": qualifiers.get("product", ["Unknown"])[0],
        "ncbi_id": qualifiers.get("transcript_id", ["Unknown"])[0],
        "gene": qualifiers.get("gene", ["Unknown"])[0],
        "coding": True
    }

def handle_ncrna(feat: SeqFeature.SeqFeature, qualifiers: dict) -> dict:
    return {
        "xref": string_list_to_dict(qualifiers.get("db_xref", [])),
        "full_name": qualifiers.get("product", ["Unknown"])[0],
        "gene": qualifiers.get("gene", ["Unknown"])[0],
        "type": qualifiers.get("ncRNA_class", ["Unknown"])[0],
        "coding": False
    }

def handle_source(source_data: dict, qualifiers: dict) -> dict:
    return source_data | {
        "chr": qualifiers.get("chromosome", ["Unknown"])[0],
        "map": qualifiers.get("map", ["Unknown"])[0]
    }

def handle_exon(feat: SeqFeature.SeqFeature, qualifiers: dict) -> dict:
    return {
        "coord": str(feat.location),
        "idx": qualifiers.get("number", [-1])
    }


def string_to_list(input_string : str, sep : str = ";") -> list[str]:
    """Function to convert a string into a list by a separator value

    Args:
        input_string (str): The string to convert into a list
        sep (str, optional): The separator in the string. Defaults to ";".

    Returns:
        list[str]: A list containing the elements separated by the separator in the string
    """
    return [val.strip() for val in input_string.split(sep)]



def string_to_dict(input_string : str) -> dict[str:str]:
    """Function to convert a string into a dictionnary entry

    Args:
        input_string (str): The string to convert into a dictionnary entry. The key and the value must be separated by a :

    Returns:
        _type_: A dictionnary entry
    """
    key_value = input_string.split(":", maxsplit = 1) # only split once for the first :
    return {key_value[0].strip() : key_value[1].strip()}


def string_list_to_dict(input_list : list[str]) -> dict[str:str]:
    """Function to convert a list of string into a signe dictionnary

    Args:
        input_list : list[str]: The list of string to convert into a dictionnary. The strings must contain a : to separate the key and value

    Returns:
        _type_: A dictionnary with the every key and value pair in the list
    """
    dict = {}
    for dict_string in input_list:
        dict = dict | string_to_dict(dict_string) # merge dictionnaries into one
    return dict