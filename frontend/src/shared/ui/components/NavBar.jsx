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
                        },
                    }}
                >
                    {/* flex box to align sidebar items in column */}
                    <div className='d-flex flex-column justify-content-between h-100'>

                        {/* Logo and app name*/}
                        <div className = "text-center border-bottom bg-light rounded ">
                            <Logo logoWidth = "70%" />
                        </div>

                        {/* Menu options */}
                        <div className = 'flex-grow-1' style={{backgroundColor: 'oklch(60.6% 0.25 292.717)'}}>

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
                                            return {
                                                backgroundColor: active ? '#e9ecef' : undefined,
                                                '&:hover': {
                                                    backgroundColor: '#f1f3f5',
                                                    borderRadius: '8px',
                                                    marginLeft: '8px',
                                                    marginRight: '8px',
                                                },
                                                borderRadius: active ? '8px' : undefined,
                                                marginLeft: active ? '8px' : undefined,
                                                marginRight: active ? '8px' : undefined,
                                            };
                                        },
                                    }}

                                >
                                    <MenuItem icon={<MdDashboard />}> My data </MenuItem>
                                    
                                    {/* Analytics Section */}
                                    <SubMenu label="Import" icon={<FaChartPie />}>
                                        <MenuItem icon={ <FaDna />} onClick={() => navigate("/import/dna")}> DNA </MenuItem>
                                        <MenuItem icon={<GiDna2  />}> RNA </MenuItem>
                                        <MenuItem icon={<GiMolecule />}> Protein </MenuItem>
                                    </SubMenu>
                                    
                                    
                                    <MenuItem icon={<MdNotifications />}> Notifications </MenuItem>
                                    <MenuItem icon={<FaUsers />}> Team </MenuItem>
                                    
                                    <div style={{ padding: '16px' }}></div>
                                    
                                    <MenuItem icon={<FaCog />}> Settings </MenuItem>
                                </Menu>

                            </div>

                        </div>

                        {/* User profile at bottom */}
                        <div className='d-flex justify-content-evenly align-items-center py-3 pe-auto' 
                             style={{backgroundColor: "oklch(70% 0.18 290)"}}
                        >
                            {/* Logout button */}
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