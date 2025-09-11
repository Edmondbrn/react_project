import ContainerXl from "../../../../shared/ui/components/ContainerXl";
import FormField from "../../../../shared/ui/components/FormField";
import NavBar from "../../../../shared/ui/components/NavBar";
import { handleChange } from "../../../../shared/ui/hooks/handleChangeForm";
import { useDnaImport } from "../hooks/useDnaImport";



export default function ImportDnaForm() {

    const {importData, setImportData} = useDnaImport();

    return(
        <>
            <NavBar>

                <ContainerXl>

                    <FormField 
                        label = "NCBI identifier" 
                        name = "ncbiIdentifier" 
                        type = "text" 
                        value = {importData?.ncbiIdentifier} 
                        onChange = {handleChange(importData, setImportData)} 
                        error = {null}
                    />
                    
                </ContainerXl>
                

                    

            </NavBar>
        </>
    );
}