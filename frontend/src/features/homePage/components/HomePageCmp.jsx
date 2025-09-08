import { useEffect, useState } from 'react';
import NavBar from '../../../shared/ui/components/NavBar';
import axiosInstance from '../../../shared/utils/axiosConfiguration/axios';



function HomePageCmp() {

    const [userData, setUserData] = useState(null);
    
    useEffect(() => {
        const getUserData = async () => {
            try {
                const response = await axiosInstance.get("/api/check-auth");
                setUserData(response.data);
            } catch (error) {
                console.error("Failed to fetch user data:", error);
            }
        };
        getUserData();
    }, [])
    
    return(

        <NavBar userData = {userData}>   
            <div className = 'w-100'>
                <h2>Main Content Area</h2>
                <p>Your application content goes here.</p>
            </div>
        </NavBar>

    );
}

export default HomePageCmp;