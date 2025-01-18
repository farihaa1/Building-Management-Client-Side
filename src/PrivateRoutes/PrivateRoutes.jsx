import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(user){
        return children;
    }
    if(loading){
        <p>loading</p>
    }
    return (
       <Navigate to ="sign-in" state={{from: location}} replace> </Navigate>
    );
};

export default PrivateRoutes;