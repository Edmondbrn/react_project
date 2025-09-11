import { useState } from "react";
import axiosInstance from "../../../../shared/utils/axiosConfiguration/axios";



export function useDnaImport() {

    const [importData, setImportData] = useState({"ncbiIdentifier" : ""});
    const [isLoading, setIsLoading] = useState(false);


    const getNcbiGeneData = async () => {
        try {
            setIsLoading(true);
            const response = await axiosInstance.get(`/api/get-ncbi-gene-data?ncbi_identifier=${importData.ncbiIdentifier}`);
            console.log(response.data);
        } catch(err) {
            console.error("Impossible to get gene data from NCBI.", err);
        }
        setIsLoading(false);
        return;
    }


    return {importData, setImportData, getNcbiGeneData, isLoading};


}