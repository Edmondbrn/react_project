import FormField from "./FormField";
import LoadingBtn from "../../ui/components/LoadingBtn"

/**
 * Component to create a button with a loading spinner after clicking on it. It takes a function to call after clicking on it
 * @param {Object} param0 
 * @returns 
 */
function GroupFormBtn({ formLabel, 
                        formName, 
                        formType, 
                        formValue, 
                        formOnChange, 
                        formError, 
                        formIcon, 
                        formId = null,
                        showFormLabel = true,
                        groupLabel,
                        showGroupLabel = true,
                        btnText, 
                        isLoading, 
                        onClickFunction}) {

    return(

        <div className = "form-group">

            {showGroupLabel && <label htmlFor = {formId}>{groupLabel}</label>}

            <div className = "input-group">
                <FormField 
                    id = {formId}
                    label = {formLabel}
                    name = {formName}
                    type = {formType}
                    value = {formValue}
                    onChange = {formOnChange}
                    error = {formError}
                    icon = {formIcon}
                    showLabel  = {showFormLabel}
                />

                <LoadingBtn 
                    text = {btnText}
                    className = "btn btn-outline-secondary"
                    isLoading = {isLoading}
                    onClickFunction = {onClickFunction}
                
                />
            </div>

        </div>


    );
}

export default GroupFormBtn;