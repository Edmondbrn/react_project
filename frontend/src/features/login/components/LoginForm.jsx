import { useState } from "react";
import FormField from "../../../shared/ui/components/FormField";
import LoadingFormBtn from "../../../shared/ui/components/LoadingFormBtn";
import useLoginForm from "../hooks/useLoginForm";
import { BsEye, BsEyeSlash, BsFillPersonFill } from "react-icons/bs";
import Href from "../../../shared/ui/components/Href";
import { handleChange } from "../../../shared/ui/hooks/handleChangeForm";



function LoginForm() {

    const {formData, changeHandler, errors, handleSubmit, isLoading} = useLoginForm();
    const [showPassword, setShowPassword] = useState(false);

    return (
    <div className='p-3 bg-info vh-100 d-flex justify-content-center align-items-center'>
        <div className="card shadow-sm p-4">
            <h2 className="text-center mb-4">Login</h2>

                {errors.api && <div className="alert alert-danger">{errors.api}</div>}

                <form onSubmit={handleSubmit}>
                    <FormField
                        label = "Username"
                        name = "username"
                        type = "text"
                        value = {formData.username}
                        onChange = {changeHandler}
                        error = {errors.username}
                        icon = {<BsFillPersonFill/>}
                    />


                    <div className="input-group mb-3">
                        <input 
                            type={showPassword ? "text" : "password"} 
                            className="form-control"
                            name="password"
                            style = {{fontStyle: "italic"}}
                            value={formData.password}
                            onChange={changeHandler}
                            placeholder = "Enter your password"
                        />

                        <button 
                                type="button" 
                                className="btn btn-outline-secondary"
                                onClick={() => setShowPassword(!showPassword)}
                        >
                                {showPassword ? <BsEye />: <BsEyeSlash />}
                                
                        </button>
                    </div>

                    <Href 
                        hrefLink = "signin/"
                        hrefText = "Create an acount"
                    />

                    <LoadingFormBtn
                        text = "Connect"
                        isLoading = {isLoading}
                    />

                </form>
            </div>
        </div>

    );

}

export default LoginForm;