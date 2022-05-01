import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Emailverifiction from '../Emailverifiction/Emailverifiction';
import Spiner from '../Spiner/Spiner';
const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    console.log(user)
    const location = useLocation()
    if (loading) {
        return <Spiner></Spiner>;
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if (user.providerData[0].providerId==='password'&&!user.emailVerified) {
        return <Emailverifiction></Emailverifiction>
    }
    return children
    
};

export default RequireAuth;