import React, { useState } from 'react';
import axiosInstance from '../../api/axios';
import { handleChange } from '../FormUtils/handleChangeForm';

function useSigninForm() {
    const [formData, setFormData] = useState({
            username: '',
            last_name: '',
            first_name: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const changeHandler = handleChange(formData, setFormData);

    /**
     * Function that checks if all the fields are correct for the inscription
     * @returns JS object with incorrect fields
     */
    const checkSignInData = () => {
        let newErrors = {};
        if (!formData.username) newErrors.username = "Username is required";
        if (!formData.password) newErrors.password = "Password is required";
        if (!formData.last_name) newErrors.last_name = "Last name is required";
        if (!formData.last_name) newErrors.first_name = "First name is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords don't match";
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{7,}$/;
        if (formData.password && !passwordRegex.test(formData.password)) {
            newErrors.password = "Password must be at least 7 characters and include uppercase, lowercase, number, and special character.";
        }
        return newErrors;
    }
    
    /**
     * Function that will send the data to the API to create a user
     * @param {click event} e 
     * @returns 
     */
    const handleSubmit = async (e) => {
        e.preventDefault();
        // check data conformity
        const newErrors = checkSignInData();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        // call the API
        try {
            const response = await axiosInstance.post('/api/users/', {
                username: formData.username,
                first_name: formData.username,
                last_name: formData.last_name,
                email: formData.email,    
                password: formData.password
            });
            setSuccess(true);
        } catch (error) { // handle error
            let apiError = "Error while creating the user";
            if (error.response) {
                // backend erro
                if (typeof error.response.data === "string") {
                    apiError = error.response.data;
                } else if (typeof error.response.data === "object") { // join messages if various
                    apiError = Object.values(error.response.data).flat().join(' ');
                }
            } else if (error.request) {
                apiError = "Server connection impossible";
            }
            setErrors({ api: apiError });
            console.error(error);
        }
    };
    
  return { formData, changeHandler, errors, success, handleSubmit };
}

export default useSigninForm;