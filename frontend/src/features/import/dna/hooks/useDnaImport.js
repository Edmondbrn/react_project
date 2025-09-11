import { useState } from "react";
import axiosInstance from "../../../../shared/utils/axiosConfiguration/axios";



export function useDnaImport() {

    const [importData, setImportData] = useState({"ncbiIdentifier" : ""});


    const getNcbiGeneData = async () => {
        try {
            const response = await axiosInstance.get(`/api/get-ncbi-gene-data?ncbi_identifier=${importData.ncbiIdentifier}`);
            console.log(response.data);
        } catch(err) {
            console.error("Impossible to get gene data from NCBI.", err);
        }
        return;
    }


    return {importData, setImportData, getNcbiGeneData};


}