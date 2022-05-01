import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Emailverifiction from '../Emailverifiction/Emailverifiction';
const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    const location = useLocation()
    if (loading) {
        return;
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if (!user.emailVerified) {
        return <Emailverifiction></Emailverifiction>
    }
    return children
    
};

export default RequireAuth;