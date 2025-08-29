import axios from "axios";


const API_BASE_URL = process.env.REACT_APP_API_URL;

// create an axios instance with the base url to call Django APIs
const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest' // more secure (allow to verify if the request comes from the website and not from another one)
    },
    withCredentials: true // send cookies with the auth token
});


// interceptor to  refresh access token
axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        // refresh the token for the second call ONLY (else will throw error)
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                // call the api to refresh the access token
                await axios.post(`${API_BASE_URL}/api/refresh-token/`, 
                    {},
                    { withCredentials: true }
                );
                return axiosInstance(originalRequest);
            } catch (refreshError) {
                return Promise.reject(refreshError);
            }
            
        }
        return Promise.reject(error);
    }
)


export default axiosInstance;