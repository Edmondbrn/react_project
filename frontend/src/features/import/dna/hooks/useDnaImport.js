import { useState } from "react";
import axiosInstance from "../../../../shared/utils/axiosConfiguration/axios";



export function useDnaImport() {

    const [importData, setImportData] = useState({"ncbiIdentifier" : ""});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [results, setResults] = useState(null);


    /**
     * Function to call the API to fetch data againste Nucleotide database
     * @returns 
     */
    const getNcbiGeneData = async () => {
        try {
            setIsLoading(true);
            const response = await axiosInstance.get(`/api/get-ncbi-gene-data?ncbi_identifier=${importData.ncbiIdentifier}`);
            setResults(response.data);
            setError(null); // reset error if it was not empty
        } catch(err) {
            setError(err.response.data.error);
            console.error("Impossible to get gene data from NCBI.", err);
        } finally {
            setIsLoading(false);
        }
        return;
    }


    return {importData, setImportData, getNcbiGeneData, isLoading, error, results};


}