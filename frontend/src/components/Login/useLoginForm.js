import { useState } from 'react';
import axiosInstance from '../../api/axios';
import { handleChange, handleChange } from '../FormUtils/handleChangeForm';

function useLoginForm() {


    const [formData, setFormData] = useState({
        email: "",
        password: "", 
    });
    const [errors, setErrors] = useState({});
    const changeHandler = handleChange(formData, setFormData);


    


}