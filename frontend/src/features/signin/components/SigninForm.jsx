import ErrorAlert from "../../../shared/ui/components/ErrorAlert";
import FormField from "../../../shared/ui/components/FormField";
import GradientBackground from "../../../shared/ui/components/GradientBackground";
import useSigninForm from "../hooks/useSigninForm"
import SuccessAlert from "../../../shared/ui/components/SuccessAlert";
import { BsEye, BsEyeSlash, BsFillPersonFill } from "react-icons/bs";


/**
 * Function that will create the signin form for the signin page
 * @returns react components for the signin page
 */
function SigninForm() {

    const {formData, changeHandler, errors, success, handleSubmit} = useSigninForm();

    return (
        <GradientBackground>

            <div className="card shadow p-4 rounded-4" 
                style={{
                    maxWidth: "500px",
                    width: "100%",
                    border: "none",
                    transition: "all 0.3s ease",
                    backdropFilter: "blur(10px)",
                    background: "rgba(255, 255, 255, 0.9)",
                    zIndex: 1
                }}>

                <h2 className='text-center mb-4 fw-bold'>Sign-up form</h2>

                {success && <SuccessAlert successMessage = "Account created!"/> }
                {errors.api && <ErrorAlert errorMessage = {errors.api}/>}

                <form onSubmit={handleSubmit}>

                    <FormField
                        label="Username"
                        name="username"
                        type="text"
                        value={formData.username}
                        onChange={changeHandler}
                        error={errors.username}
                        icon={<BsFillPersonFill size={18} />}
                    />

                    <FormField
                        label="Last name"
                        name="last_name"
                        type="text"
                        value={formData.last_name}
                        onChange={changeHandler}
                        error={errors.last_name}
                    />

                    <FormField
                        label="First name"
                        name="first_name"
                        type="text"
                        value={formData.first_name}
                        onChange={changeHandler}
                        error={errors.first_name}
                    />

                    <FormField
                        label="Email"
                        name="email"
                        type="text"
                        value={formData.email}
                        onChange={changeHandler}
                        error={errors.email}
                    />

                    <FormField
                        label="Password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={changeHandler}
                        error={errors.password}
                    />

                    <FormField
                        label="Confirm password"
                        name="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={changeHandler}
                        error={errors.confirmPassword}
                    />

                    <button type="submit" className='btn btn-primary my-3 w-100'>Sign Up</button>
                </form>
            </div>
                    
        </GradientBackground>
    );
}

export default SigninForm;