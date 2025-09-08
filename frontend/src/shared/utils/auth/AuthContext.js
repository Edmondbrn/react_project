import { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "../axiosConfiguration/axios";


const AuthContext = createContext(null);

/**
 * The procvider of the AuthContext to define how to check if the user is autheticated and to setup util variables
 * @param {Object} children The routes that contains the components for every page of the web app 
 * @returns 
 */
export const AuthProvider = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // check after the component mounting if the user is autheticated or not
    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                const response = await axiosInstance.get('/api/check-auth/', {withCredentials : true});
                setIsAuthenticated(true);
            } catch (error) {// return 401 error by axios interceptor
                setIsAuthenticated(false);
            } finally {
                setIsLoading(false);
            }
        };
        
        checkAuthStatus();
    }, []);

    // function to update the authentification status in child components (login page and logout button)
    const login = () => setIsAuthenticated(true);
    const logout = () => setIsAuthenticated(false);

    return (
        <AuthContext.Provider value = {{
            isAuthenticated,
            isLoading,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    );

};

export const useAuth = () => {
    if (AuthContext === null) 
        throw new Error("Error, AuthContext must be used inside an AuthProvider.");
    return useContext(AuthContext);
};