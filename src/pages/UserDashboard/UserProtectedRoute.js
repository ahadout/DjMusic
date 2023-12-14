import React from 'react';
import { Navigate } from 'react-router-dom';

const UserProtectedRoute = ({ children }) => {
    const isUser = localStorage.getItem('role') === 'user';
    const isLoggedIn = localStorage.getItem('token');

    return isUser && isLoggedIn ? children : <Navigate to="/login" />;
};

export default UserProtectedRoute;
