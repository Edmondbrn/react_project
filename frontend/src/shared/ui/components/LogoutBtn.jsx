import axiosInstance from "../../utils/axiosConfiguration/axios";
import { Tooltip } from 'react-tooltip'
import { FaDoorClosed} from 'react-icons/fa';
import { useAuth } from '../../../shared/utils/auth/AuthContext';
    
/**
 * Components to insert the logout button if needed
 * @returns the logout button with its listener
 */
function LogoutBtn() {
    const { logout } = useAuth(); // get the logout function from the auth context

    return (
        <>
            <Tooltip id="logout-tooltip" />
            <button
                data-tooltip-id="logout-tooltip"
                data-tooltip-content="Logout"
                data-tooltip-place="top"
                className='btn btn-danger mx-3'
                onClick={async () => {
                    await axiosInstance.post("/api/logout/");
                    logout();
                } }
            >
                <FaDoorClosed />
            </button>
        </>
    )
}
export default LogoutBtn;