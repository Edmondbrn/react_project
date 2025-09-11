import FormField from "./FormField";
import LoadingBtn from "../../ui/components/LoadingBtn"

/**
 * Component to a group form with an input and a button
 * @param {Object} param0 
 *  - formLabel: the label only for the input element
 *  - formName: the html name for the input element
 *  - formValue: the html value for the input element
 *  - formOnchange: the html handler when a change occured
 *  - formError: a boolean to display an error on the input
 *  - formIcon: a react icon for the input if needed
 *  - formId: the id for the input to link it to an external label
 *  - showFormLabel: a boolean to know if we have to render the input label
 *  - groupLabel: the label for the input group
 *  - showGroupLabel: a boolean to know if we have to render the input group label
 *  - btnText: the text for the button
 *  - isLoading: a boolean to know if the process is running
 *  - onClickFunction: the function to handle the click on the button
 * @returns 
 */
function GroupFormBtn({ formLabel, 
                        formName, 
                        formType, 
                        formValue, 
                        formOnChange, 
                        formError, 
                        formIcon, 
                        formClassName = "",
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
                {/* The input element */}
                <FormField 
                    id = {formId}
                    className = {formClassName}
                    label = {formLabel}
                    name = {formName}
                    type = {formType}
                    value = {formValue}
                    onChange = {formOnChange}
                    error = {formError}
                    icon = {formIcon}
                    showLabel  = {showFormLabel}
                />
                {/* The button */}
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