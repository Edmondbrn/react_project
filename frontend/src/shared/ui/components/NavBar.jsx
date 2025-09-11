import { FaChartPie, FaDna, FaUsers, FaCog } from 'react-icons/fa';
import { GiDna2, GiMolecule } from 'react-icons/gi';
import { MdDashboard, MdNotifications } from 'react-icons/md';
import Logo from '../../../shared/ui/components/Logo';
import LogoutBtn from '../../../shared/ui/components/LogoutBtn';
import { Sidebar, Menu, MenuItem, SubMenu, sidebarClasses } from 'react-pro-sidebar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


/**
 * NavBar component to load the navigation bar on the left of any web page
 * Take 1 props as arguments:
 *  - children JSX code to add on the right of the nav bar
 * @param {import('react').PropsWithChildren} param0 
 * @returns 
 */
function NavBar({children}) {

    const [isCollapsed, setIsCollapsed] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            {/* d-flex because we want the nav bar and the content to be aligned as rows */}
            <div className='d-flex vh-100'>
                <Sidebar 
                    collapsed={isCollapsed}
                    collapsedWidth='100px'
                    rootStyles={{
                        [`.${sidebarClasses.container}`]: {
                            boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.05)',
                            borderRight: '1px solid #e9ecef',
                            color: "white",
                            background: "linear-gradient(to bottom, #888888 60%, #666666 80%, #333333 100%)"
                        }
                    }}
                >
                    {/* flex box to align sidebar items in column */}
                    <div className='d-flex flex-column justify-content-between h-100'>

                        {/* Logo and app name*/}
                        <div className = "text-center border-bottom bg-light rounded ">
                            <Logo logoWidth = "70%" />
                        </div>

                        {/* Menu options */}
                        <div className = 'flex-grow-1' >

                            <div className = 'd-flex flex-column'>

                                <button 
                                    className='btn-sm btn-light border rounded mx-3 my-2 shadow-sm' 
                                    style={{fontSize : "0.8em"}}
                                    onClick={() => setIsCollapsed(!isCollapsed)}
                                >
                                    {isCollapsed ? "Expand" : "Collapse" }
                                </button>

                                    <Menu 
                                        menuItemStyles={{
                                            button: ({ level, active }) => {
                                                const hoverStyle = {
                                                    backgroundColor: 'rgba(241, 243, 245, 0.2)',
                                                    borderRadius: '8px',
                                                    marginLeft: '8px',
                                                    marginRight: '8px'
                                                };
                                                
                                                return {
                                                    '&:hover': hoverStyle,
                                                };
                                            }
                                        }}
                                    >
                                    <MenuItem icon={<MdDashboard />}> My data </MenuItem>
                                    
                                    {/* Analytics Section */}
                                    <SubMenu label="Import" icon={<FaChartPie />}>
                                    {/* Force the color to be black, Pro sidebar bugs */}
                                        <div style={{color : "black"}}> 
                                            <MenuItem  icon={ <FaDna />} onClick={() => navigate("/import/dna")}> DNA </MenuItem>
                                            <MenuItem  icon={<GiDna2  />}> RNA </MenuItem>
                                            <MenuItem  icon={<GiMolecule />}> Protein </MenuItem>
                                        </div>
                                    </SubMenu>
                                    
                                    
                                    <MenuItem icon={<MdNotifications />}> Notifications </MenuItem>
                                    <MenuItem icon={<FaUsers />}> Team </MenuItem>
                                    
                                    <div style={{ padding: '16px' }}></div>
                                    
                                    <MenuItem icon={<FaCog />}> Settings </MenuItem>
                                </Menu>

                            </div>

                        </div>

                        {/* User profile at bottom */}
                        <div className='d-flex justify-content-center align-items-center border-top border-white py-3 pe-auto'>
                            {/* Logout button */}
                            {!isCollapsed && <p>Logout</p>}
                            <LogoutBtn />
                        </div>
                    </div>
                    
                </Sidebar>

                {/* Insert the rest of the page here */}
                {children}
            </div>
        </>
    )
}

export default NavBar;