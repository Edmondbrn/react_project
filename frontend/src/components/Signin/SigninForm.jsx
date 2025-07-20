import FormField from "../FormUtils/FormField"
import useSigninForm from "./useSigninForm"

/**
 * Function that will create the signin form for the signin page
 * @returns react components for the signin page
 */
function SigninForm() {

    const {formData, handleChange, errors, success, handleSubmit} = useSigninForm();

    return (
        <div className='p-3 bg-info'>
            <div className='d-flex justify-content-center align-items-center min-vh-100'>
                <div className='container border border-2 border-black rounded w-50 p-3 shadow p-3 mb-5 bg-body'>
                    <h2 className='text-center'>Sign-up form</h2>
                    {success && <div className="alert alert-success">Account created!</div>}
                    {errors.api && <div className="alert alert-danger">{errors.api}</div>}
                    
                    <form onSubmit={handleSubmit}>

                        <FormField
                            label="Username"
                            name="username"
                            type="text"
                            value={formData.username}
                            onChange={handleChange}
                            error={errors.username}
                        />

                        <FormField
                            label="Last name"
                            name="last_name"
                            type="text"
                            value={formData.last_name}
                            onChange={handleChange}
                            error={errors.last_name}
                        />

                        <FormField
                            label="First name"
                            name="first_name"
                            type="text"
                            value={formData.first_name}
                            onChange={handleChange}
                            error={errors.first_name}
                        />

                        <FormField
                            label="Email"
                            name="email"
                            type="text"
                            value={formData.email}
                            onChange={handleChange}
                            error={errors.email}
                        />

                        <FormField
                            label="Password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            error={errors.password}
                        />

                        <FormField
                            label="Confirm password"
                            name="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            error={errors.confirmPassword}
                        />

                        <button type="submit" className='btn btn-primary my-3 w-100'>Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SigninForm;