import { Sidebar, Menu, MenuItem, SubMenu, sidebarClasses } from 'react-pro-sidebar';
import axiosInstance from '../../../shared/utils/axiosConfiguration/axios';
import { useAuth } from '../../../shared/utils/auth/AuthContext';
import { useState } from 'react';
import { FaDoorClosed, FaChartPie, FaChartLine, FaCalendarAlt, FaBook, FaTasks, FaUsers, FaCog } from 'react-icons/fa';
import { MdDashboard, MdNotifications } from 'react-icons/md';
import { Tooltip } from 'react-tooltip'


function HomePageCmp() {
    
    const { logout } = useAuth();
    const [isCollapsed, setIsCollapsed] = useState(true);
    
    return(
        <div style={{ display: 'flex', height: '100vh' }}>
            <Sidebar 
                collapsed={isCollapsed}
                rootStyles={{
                    [`.${sidebarClasses.container}`]: {
                        backgroundColor: '#f8f9fa',
                        boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.05)',
                        borderRight: '1px solid #e9ecef',
                    },
                }}
            >
                {/* Logo et nom de l'app */}
                <div style={{ 
                    padding: '24px 20px 16px', 
                    textAlign: 'center',
                    borderBottom: '1px solid #e9ecef',
                    marginBottom: '12px'
                }}>
                    {!isCollapsed && (
                        <div style={{ marginBottom: '8px' }}>
                            <img 
                                src="https://via.placeholder.com/50" 
                                alt="Logo" 
                                style={{ maxWidth: '80px', borderRadius: '8px' }} 
                            />
                        </div>
                    )}
                    {!isCollapsed && <h3 style={{ fontSize: '18px', margin: '8px 0' }}>My App</h3>}
                </div>
                
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
                
                {/* User profile at bottom */}
                {!isCollapsed && (
                    <div style={{ 
                        padding: '16px', 
                        borderTop: '1px solid #e9ecef',
                        marginTop: 'auto',
                        position: 'absolute',
                        bottom: '0',
                        width: '100%'
                    }}>
                        <div style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            cursor: 'pointer' 
                        }}>
                            <img 
                                src="https://via.placeholder.com/40" 
                                alt="Profile" 
                                style={{ 
                                    width: '40px', 
                                    height: '40px', 
                                    borderRadius: '50%', 
                                    marginRight: '12px' 
                                }} 
                            />
                            <div>
                                <div style={{ fontSize: '14px', fontWeight: 'bold' }}>John Doe</div>
                                <div style={{ fontSize: '12px', color: '#6c757d' }}>Admin</div>
                            </div>

                            {/* tooltip declaration*/}
                            <Tooltip id="logout-tooltip" />
                            
                            {/* Logout button */}
                            <button 
                                data-tooltip-id="logout-tooltip" 
                                data-tooltip-content="Logout" 
                                data-tooltip-place="top" 
                                className='btn btn-danger mx-3' 
                                onClick={async () => {
                                    await axiosInstance.post("/api/logout/");
                                    logout();
                                }}
                            >
                                <FaDoorClosed />
                            </button>

                        </div>
                    </div>
                )}
            </Sidebar>

            <div style={{ flex: 1, padding: '20px' }}>
                <div style={{ marginBottom: '20px' }}>
                    <button 
                        className='btn btn-light' 
                        style={{ 
                            marginRight: '10px', 
                            borderRadius: '8px',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                        }} 
                        onClick={() => setIsCollapsed(!isCollapsed)}
                    >
                        {isCollapsed ? "Expand Menu" : "Collapse Menu" }
                    </button>
                    
                    <button 
                        className='btn btn-primary me-3' 
                        onClick={async () => await axiosInstance.get("/api/check-auth")}
                    >
                        Test
                    </button>
                    

                </div>
                
                <div style={{ padding: '20px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                    <h2>Main Content Area</h2>
                    <p>Your application content goes here.</p>
                </div>
            </div>
        </div>
    );
}

export default HomePageCmp;