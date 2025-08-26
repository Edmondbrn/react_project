import { useState } from 'react';
import axiosInstance from '../../../shared/utils/axiosConfiguration/axios';
import { handleChange } from '../../../shared/ui/hooks/handleChangeForm';

function useLoginForm() {


    const [formData, setFormData] = useState({
        username: "",
        password: "", 
    });

    const [errors, setErrors] = useState({});
    const [user, setUser] = useState({});

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
            const response = await axiosInstance.post("/api/check-user/", {
                "username": username
            })
            return response.data.exists;
        } catch (error) {
            console.error("Error while checking username.");
            return false;
        }
    }

    const checkUserAuthentification = async (username, password) => {
        try {
            const response = await axiosInstance.post("/api/login/", {
                "username" : username,
                "password": password
            }, {
                withCredentials: true // import cookies
            });
            console.log("is authentificated:");
            console.log(response.data);
            if (response.data.success) { // if authentificated, save token and info in cookies
                setUser({
                    id: response.data.user_id,
                    username: response.data.username,
                })
            }
            return response.data;

        } catch (error) {
            return {"success": false};
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
                setErrors({"api" : "The username or the password is incorrect."})
                return;
            }
            const userData = await checkUserAuthentification(formData.username, formData.password);
            if (userData.success) {
                console.log(user);
            } else {
                setErrors({"api" : "The username or the password is incorrect."});
            }
            return;

        } catch (error) { // handle error
            let apiError = "Error while connecting.";
            setErrors({ api: apiError });
            console.error(error);
        }
    };
  return { formData, changeHandler, errors, handleSubmit };
}

export default useLoginForm;