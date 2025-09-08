import { FaChartPie, FaChartLine, FaCalendarAlt, FaBook, FaTasks, FaUsers, FaCog } from 'react-icons/fa';
import { MdDashboard, MdNotifications } from 'react-icons/md';
import Logo from '../../../shared/ui/components/Logo';
import LogoutBtn from '../../../shared/ui/components/LogoutBtn';
import { Sidebar, Menu, MenuItem, SubMenu, sidebarClasses } from 'react-pro-sidebar';
import { useState } from 'react';


/**
 * NavBar component to load the navigation bar on the left of any web page
 * Take 2 props as arguments:
 *  - userData object to display the username and handle user permission ?
 *  - children JSX code to add on the right of the nav bar
 * @param {import('react').PropsWithChildren} param0 
 * @returns 
 */
function NavBar({userData, children}) {

    const [isCollapsed, setIsCollapsed] = useState(true);

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
                                    <MenuItem icon={<MdDashboard />}> Dashboard </MenuItem>
                                    
                                    {/* Analytics Section */}
                                    <SubMenu label="Analytics" icon={<FaChartPie />}>
                                        <MenuItem icon={<FaChartPie />}> Pie Charts </MenuItem>
                                        <MenuItem icon={<FaChartLine />}> Line Charts </MenuItem>
                                    </SubMenu>
                                    
                                    {/* Content Section */}
                                    <SubMenu label="Content" icon={<FaBook />}>
                                        <MenuItem icon={<FaBook />}> Documentation </MenuItem>
                                        <MenuItem icon={<FaTasks />}> Tasks </MenuItem>
                                    </SubMenu>
                                    
                                    {/* Calendar avec badge */}
                                    <MenuItem icon={<FaCalendarAlt />} suffix={
                                        <div style={{ 
                                            background: '#ff5252', 
                                            color: 'white', 
                                            borderRadius: '50%', 
                                            width: '20px', 
                                            height: '20px', 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            justifyContent: 'center',
                                            fontSize: '12px'
                                        }}>
                                            3
                                        </div>
                                    }> 
                                        Calendar 
                                    </MenuItem>
                                    
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
                            {!isCollapsed && (
                                <>
                                    <span className = 'font-weight-bold'>Username:</span> {userData ? userData.username : "User"}
                                </>
                            )}
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