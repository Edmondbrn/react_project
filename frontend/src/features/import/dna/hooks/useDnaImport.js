import { useState } from "react";



export function useDnaImport() {

    const [importData, setImportData] = useState({"ncbiIdentifier" : ""});


    return {importData, setImportData};


}