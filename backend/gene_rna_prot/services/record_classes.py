
class GeneImportResults():
    """Class to store the results of the parsing of a gene GeneBank text file
    """


    def __init__(self, 
                 source_data : list[dict[str:str]], 
                 gene_data : list[dict[str:str]], 
                 rna_data : list[dict[str:str]], 
                 protein_data : list[dict[str:str]], 
                 exon_data : list[dict[str:str]]):
        self.source_data = source_data
        self.gene_data = gene_data
        self.rna_data = rna_data
        self.protein_data = protein_data
        self.exon_data = exon_data
