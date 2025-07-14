import React, { useState } from 'react';
import axios from 'axios';


function SigninForm() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    });
    
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const newErrors = {};
        if (!formData.username) newErrors.username = "Username is required";
        if (!formData.password) newErrors.password = "Password is required";
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords don't match";
        }
        
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        
        console.log("Form submitted:", formData);
        try {
            // Adapter les champs selon ton modèle backend
            const response = await axios.post('http://localhost:8000/api/users/', {
                username: "test",
                first_name: formData.username,
                last_name: 'default', // ou autre champ si besoin
                email: 'default@default.com',     // ou autre champ si besoin
                password: formData.password
            });
            setSuccess(true);
            console.log('User created:', response.data);
        } catch (error) {
            setErrors({ api: error.response?.data || "Erreur lors de la création de l'utilisateur" });
            console.error(error);
        }
    };

    return (
        <div className='p-3 bg-info'>
            <div className='d-flex justify-content-center align-items-center min-vh-100'>
                <div className='container border border-2 border-black rounded w-50 p-3 shadow p-3 mb-5 bg-body'>
                    <h2 className='text-center'>Sign-up form</h2>
                    {success && <div className="alert alert-success">Compte créé !</div>}
                    {errors.api && <div className="alert alert-danger">{errors.api}</div>}
                    
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className='form-label'>Username</label>
                            <input 
                                type='text' 
                                name="username"
                                className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                                value={formData.username}
                                onChange={handleChange}
                            />
                            {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                        </div>

                        <div className="mb-3">
                            <label className='form-label'>Password</label>
                            <input 
                                type='password'
                                name="password" 
                                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                value={formData.password}
                                onChange={handleChange}
                            />
                            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                        </div>

                        <div className="mb-3">
                            <label className='form-label'>Confirm password</label>
                            <input 
                                type='password'
                                name="confirmPassword" 
                                className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                            {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                        </div>

                        <button type="submit" className='btn btn-primary my-3 w-100'>Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SigninForm;