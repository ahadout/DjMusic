import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminProtectedRoute = ({ children }) => {
    const isAdmin = localStorage.getItem('role') === 'admin';
    const isLoggedIn = localStorage.getItem('token');

    return isAdmin && isLoggedIn ? children : <Navigate to="/login" />;
};

export default AdminProtectedRoute;
