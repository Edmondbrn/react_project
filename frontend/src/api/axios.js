import axios from "axios";


const API_BASE_URL = process.env.REACT_APP_API_URL;
// create an axios instance with the base url to call Django APIs
const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});


export default axiosInstance;