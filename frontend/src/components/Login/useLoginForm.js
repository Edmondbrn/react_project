import { useState } from 'react';
import axiosInstance from '../../api/axios';
import { handleChange } from '../FormUtils/handleChangeForm';

function useLoginForm() {


    const [formData, setFormData] = useState({
        username: "",
        password: "", 
    });

    const [errors, setErrors] = useState({});

    const changeHandler = handleChange(formData, setFormData);


    /**
     * Function that checks if all the fields are correct for the login
     * @returns JS object with incorrect fields
     */
    const checkLoginData = () => {
        let newErrors = {};
        if (!formData.username) newErrors.username = "Username is required";
        if (!formData.password) newErrors.password = "Password is required";
        return newErrors;
    }

    const checkUserExists = async (username) => {
        try {
            const response = await axiosInstance.post("/api/check-user", {
                "username": username
            })
            return response.data.exists;
        } catch (error) {
            console.error("Error while checking username.");
            return false;
        }
    }


        /**
     * Function that will send the data to the API to create a user
     * @param {click event} e 
     * @returns 
     */
    const handleSubmit = async (e) => {
        e.preventDefault();
        // check data conformity
        const newErrors = checkLoginData();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        // call the API
        try {
            const userExist = await checkUserExists(formData.username);
            if (!userExist) {
                setErrors({"api" : "The username does not exist."})
                return;
            }
        } catch (error) { // handle error
            // let apiError = "Error while connecting.";
            // if (error.response) {
            //     // backend error
            //     if (typeof error.response.data === "string") {
            //         apiError = error.response.data;
            //     } else if (typeof error.response.data === "object") { // join messages if various
            //         apiError = Object.values(error.response.data).flat().join(' ');
            //     }
            // } else if (error.request) {
            //     apiError = "Server connection impossible";
            // }
            // setErrors({ api: apiError });
            console.error(error);
        }
    };

  return { formData, changeHandler, errors, handleSubmit };
}

export default useLoginForm;