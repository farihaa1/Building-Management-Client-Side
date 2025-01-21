import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../Components/Loader';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    
    if(loading){
        <Loader></Loader>
    }

    if(user){
        return children;
    }
    return (
       <Navigate to ="sign-in" state={{from: location}} replace> </Navigate>
    );
};

export default PrivateRoutes;