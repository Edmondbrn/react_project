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

// interceptor to add access token to header for API calls
axiosInstance.interceptors.request.use(

    (config) => {
        const token = localStorage.getItem("access_token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// interceptor to  refresh access token
axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        // refresh the token for the second call ONLY (else will throw error)
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const refreshToken = localStorage.getItem("refresh_token");
            if (refreshToken) {
                try {
                    // call the api to refresh the access token
                    const response = await axios.post(`${API_BASE_URL}/token/refresh/`, {
                        refresh: refreshToken
                    });
                    const newAccessToken = response.data.access;
                    localStorage.setItem("access_token", newAccessToken); // update the access cookie
                    // reperform the original request
                    originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                    return axiosInstance(originalRequest);
                } catch (refreshError) {
                    localStorage.removeItem("access_token");
                    localStorage.removeItem("refresh_token");
                    window.location.href = "/login";
                    return Promise.reject(refreshError);
                }
            }
        }
        return Promise.reject(error);
    }
)


export default axiosInstance;