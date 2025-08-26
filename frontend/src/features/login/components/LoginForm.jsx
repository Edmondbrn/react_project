import FormField from "../../../shared/ui/components/FormField";
import LoadingFormBtn from "../../../shared/ui/components/LoadingFormBtn";
import useLoginForm from "../hooks/useLoginForm";


function LoginForm() {

    const {formData, changeHandler, errors, handleSubmit, isLoading} = useLoginForm();

    return (
        <div className='p-3 bg-info'>
            <div className='d-flex justify-content-center align-items-center min-vh-100'>
                <div className='container border border-2 border-black rounded w-50 p-3 shadow p-3 mb-5 bg-body'>
                    <h2 className='text-center'>Login page</h2>   
                    {errors.api && <div className="alert alert-danger">{errors.api}</div>}

                    <form onSubmit={handleSubmit}>
                        <FormField
                            label = "Username"
                            name = "username"
                            type = "text"
                            value = {formData.username}
                            onChange = {changeHandler}
                            error = {errors.username}
                        />

                        <FormField
                            label = "Password"
                            name = "password"
                            type = "password"
                            value = {formData.password}
                            onChange = {changeHandler}
                            error = {errors.password}
                        />

                        <LoadingFormBtn
                            text = "Connect"
                            isLoading = {isLoading}
                        />
                    </form>
                </div> 
            </div>
        </div>
    );

}

export default LoginForm;