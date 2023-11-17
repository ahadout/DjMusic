import React, { useRef,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../assets/css/Admin/AdminFirstPage.css";
import Footer from '../../components/Footer';
import AdminHeader from "./AdminHeader";


function AdminDashboard() {
    const navigate = useNavigate();
    const redirectToSongsAlbums = () => {
        navigate('/admin/songs-albums');
    }
    const redirectToUsersManagement = () => {
        navigate('/admin/users-management');
    }
    const redirectToOrdersManagement = () => {
        navigate('/admin/orders-management');
    }
    const redirectToProductsManagement = () => {
        navigate('/admin/products-management');
    }
    return (
        <>   
        <AdminHeader />
             <div className="admin-panel">

            <h1>ADMIN DASHBOARD</h1>
            <div className="admin-sections">
                <div className="section">
                    <div className="content-wrapper">
                        <div className='squareText'>USERS</div>
                        <button className='squareButton' onClick={redirectToUsersManagement}>SHOW</button>
                    </div>
                </div>
                <div className="section">
                    <div className="content-wrapper">
                        <div className='squareText'>MUSIC</div>
                        <button className='squareButton' onClick={redirectToSongsAlbums}>SHOW</button>
                    </div>
                </div>
                <div className="section">
                    <div className="content-wrapper">
                        <div className='squareText'>ORDERS</div>
                        <button className='squareButton' onClick={redirectToOrdersManagement}>SHOW</button>
                    </div>
                </div>
                <div className="section">
                    <div className="content-wrapper">
                        <div className='squareText'>PRODUCTS</div>
                        <button className='squareButton' onClick={redirectToProductsManagement}>SHOW</button>
                    </div>
                </div>
            </div>
        </div>
            <Footer />
        </>

    );
}

export default AdminDashboard;
