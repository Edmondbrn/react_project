import { useState } from "react";
import ContainerXl from "../../../../shared/ui/components/ContainerXl";
import GroupFormBtn from "../../../../shared/ui/components/GroupFormBtn";
import NavBar from "../../../../shared/ui/components/NavBar";
import { handleChange } from "../../../../shared/ui/hooks/handleChangeForm";
import { useDnaImport } from "../hooks/useDnaImport";
import Card from "../../../../shared/ui/components/Card";
import ErrorAlert from "../../../../shared/ui/components/ErrorAlert";
import SuccessAlert from "../../../../shared/ui/components/SuccessAlert";



export default function ImportDnaForm() {

    const {importData, setImportData, getNcbiGeneData, isLoading, error, results} = useDnaImport();

    return(
        <>
            <NavBar>

                <ContainerXl>

                    <div className = "my-3 rounded shadow">

                        <h3 className = "text-center"></h3>


                    </div>

                    <Card title={"Import from NCBI"}
                          bodyContent = {
                            <>
                                {/* Error message if an error has been thrown */}
                                {error && <ErrorAlert errorMessage = {error}/>}
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
                                {results && <SuccessAlert successMessage = {JSON.stringify(results)} />}
                            </>
                          }
                    >
                    </Card>

                </ContainerXl>
                
            </NavBar>
        </>
    );
}