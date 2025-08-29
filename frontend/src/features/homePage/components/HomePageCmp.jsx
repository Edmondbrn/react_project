import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import axiosInstance from '../../../shared/utils/axiosConfiguration/axios';
import { useAuth } from '../../../shared/utils/auth/AuthContext';


function HomePageCmp() {
    
    const { logout } = useAuth();
    return(
        <div>
            <Sidebar>
                <Menu>
                    <SubMenu label="Charts">
                    <MenuItem> Pie charts </MenuItem>
                    <MenuItem> Line charts </MenuItem>
                    </SubMenu>
                    <MenuItem> Documentation </MenuItem>
                    <MenuItem> Calendar </MenuItem>
                </Menu>
            </Sidebar>

            <button className='btn btn-primary me-3' onClick={async () => await axiosInstance.get("/api/check-auth")}>Test</button>
            <button className='btn btn-danger' onClick={async () => {
                    await axiosInstance.post("/api/logout/");
                    logout();
                }
            }>
            Logout</button>
        </div>

    )
}


export default HomePageCmp;