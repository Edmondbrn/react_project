import { useState } from "react";
import ContainerXl from "../../../../shared/ui/components/ContainerXl";
import GroupFormBtn from "../../../../shared/ui/components/GroupFormBtn";
import NavBar from "../../../../shared/ui/components/NavBar";
import { handleChange } from "../../../../shared/ui/hooks/handleChangeForm";
import { useDnaImport } from "../hooks/useDnaImport";
import Card from "../../../../shared/ui/components/Card";



export default function ImportDnaForm() {

    const {importData, setImportData, getNcbiGeneData} = useDnaImport();
    const [isLoading, setIsLoading] = useState(false);

    return(
        <>
            <NavBar>

                <ContainerXl>

                    <div className = "my-3 rounded shadow">

                        <h3 className = "text-center"></h3>


                    </div>

                    <Card title={"Import from NCBI"}
                          bodyContent = {
                            <div className = "mx-3">
                                <GroupFormBtn 
                                    showFormLabel = {false}
                                    formName = "ncbiIdentifier" 
                                    formType = "text" 
                                    formValue = {importData?.ncbiIdentifier} 
                                    formOnChange = {handleChange(importData, setImportData)} 
                                    formError = {null}
                                    formId = "importNcbiForm"
                                    formClassName = "w-25"
                                    groupLabel = "NCBI identifier*"
                                    btnText = "Load"
                                    isLoading = {isLoading}
                                    onClickFunction = {getNcbiGeneData}
                                />
                            </div>
                          }
                    >
                        

                    </Card>

                </ContainerXl>
                
            </NavBar>
        </>
    );
}