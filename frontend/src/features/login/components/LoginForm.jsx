import { useState } from "react";
import FormField from "../../../shared/ui/components/FormField";
import LoadingFormBtn from "../../../shared/ui/components/LoadingFormBtn";
import useLoginForm from "../hooks/useLoginForm";
import { BsEye, BsEyeSlash, BsFillPersonFill } from "react-icons/bs";
import Href from "../../../shared/ui/components/Href";
import GradientBackground from "../../../shared/ui/components/GradientBackground";
import ErrorAlert from "../../../shared/ui/components/ErrorAlert";

function LoginForm() {
    const {formData, changeHandler, errors, handleSubmit, isLoading} = useLoginForm();
    const [showPassword, setShowPassword] = useState(false);

return (
        <GradientBackground>
            {/* Login form card */}
            <div className="card shadow p-4 rounded-4" 
                style={{
                    maxWidth: "400px",
                    width: "100%",
                    border: "none",
                    transition: "all 0.3s ease",
                    backdropFilter: "blur(10px)",
                    background: "rgba(255, 255, 255, 0.9)",
                    zIndex: 1
                }}>
                <h2 className="text-center mb-4 fw-bold" style={{color: "#333"}}>Welcome Back</h2>
                
                {errors.api && 
                    <ErrorAlert errorMessage={errors.api}/>
                }
                
                {/* Login form username + password and button */}
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

                    <div className="mb-4">
                        <label className="form-label">Password</label>
                        <div className="input-group">
                            <input 
                                type={showPassword ? "text" : "password"} 
                                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                name="password"
                                value={formData.password}
                                onChange={changeHandler}
                                placeholder="Enter your password"
                                style={{
                                    fontSize: "0.95rem"
                                }}
                            />
                            <button 
                                type="button" 
                                className="btn btn-outline-secondary"
                                onClick={() => setShowPassword(!showPassword)}
                                style={{
                                    background: "white"
                                }}
                            >
                                {showPassword ? <BsEye size={18} /> : <BsEyeSlash size={18} />}
                            </button>
                            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                        </div>
                    </div>

                    <Href 
                        hrefLink="signin/"
                        hrefText="Create an account"
                        style={{fontSize: "0.9rem", color: "#2575fc"}}
                    />

                    <div className="d-grid">
                        <LoadingFormBtn
                            text="Sign In"
                            isLoading={isLoading}
                            className="btn-primary btn-lg"
                            style={{
                                background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
                                border: "none",
                                borderRadius: "8px",
                            }}
                        />
                    </div>
                </form>
            </div> 

        </GradientBackground>
        
    );
}

export default LoginForm;