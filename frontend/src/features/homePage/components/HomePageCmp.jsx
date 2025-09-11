import { useEffect, useState } from 'react';
import NavBar from '../../../shared/ui/components/NavBar';
import ContainerXl from '../../../shared/ui/components/ContainerXl';
import axiosInstance from '../../../shared/utils/axiosConfiguration/axios';



function HomePageCmp() {

    const [userData, setUserData] = useState(null);
    
    // Load username to fill teh nav bar field
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

        <NavBar>   
            <ContainerXl>
                <h2 className = 'text-center'>{userData?.username}'s personnal page</h2>
                <div className = 'shadow rounded'>
                    <p>Test du style de praragraphe</p>
                </div>
            </ContainerXl>
        </NavBar>

    );
}

export default HomePageCmp;