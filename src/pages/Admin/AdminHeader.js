import React, { useRef,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../assets/css/Admin/AdminHeader.css";

function AdminHeader() {
    const sidebarRef = useRef(null);
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const navigate = useNavigate();
    const redirectToProfile = () => {
        navigate('/admin/profile');
    }

    const toggleSidebar = () => {
        if (sidebarRef.current.style.right === '0px' || sidebarRef.current.style.right === "") {
            sidebarRef.current.style.right = '-250px';
        } else {
            sidebarRef.current.style.right = '0px';
        }
    }
    return (
            <div className="admin-header">
                <div className="hamburger" onClick={toggleSidebar}>
                    &#9776;
                </div>
                <div className="sidebar" ref={sidebarRef}>
<div className="close-btn" onClick={toggleSidebar}>&times;</div>
<div className="admin-dropdown" onClick={() => setDropdownVisible(!isDropdownVisible)}>
    <span id="AdminButton">Admin</span>
    {isDropdownVisible && (
    <div className="dropdown-content">
        <button onClick={redirectToProfile}>Profile</button>
    </div>
    )}
</div>
<span id="MobileAdminName" className="mobile-hide">Admin</span>
<button className="mobile-tab" onClick={redirectToProfile}>Profile</button>
              <button id="logoutButton">Log out</button>
                </div>
            </div>    
    );
}

export default AdminHeader;
