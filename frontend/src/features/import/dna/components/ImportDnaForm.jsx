import { useState } from "react";
import ContainerXl from "../../../../shared/ui/components/ContainerXl";
import GroupFormBtn from "../../../../shared/ui/components/GroupFormBtn";
import NavBar from "../../../../shared/ui/components/NavBar";
import { handleChange } from "../../../../shared/ui/hooks/handleChangeForm";
import { useDnaImport } from "../hooks/useDnaImport";



export default function ImportDnaForm() {

    const {importData, setImportData} = useDnaImport();
    const [isLoading, setIsLoading] = useState(false);

    return(
        <>
            <NavBar>

                <ContainerXl>

                    <GroupFormBtn 
                        showFormLabel = {false}
                        formName = "ncbiIdentifier" 
                        formType = "text" 
                        formValue = {importData?.ncbiIdentifier} 
                        formOnChange = {handleChange(importData, setImportData)} 
                        formError = {null}
                        groupLabel = "NCBI identifier*"
                        btnText = "Load"
                        isLoading = {isLoading}
                        onClickFunction = {() => console.log("test")}
                    />

                </ContainerXl>
                

                    

            </NavBar>
        </>
    );
}