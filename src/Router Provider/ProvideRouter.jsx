import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router';

const ProvideRouter = ({children}) => {

    const {loading ,user} = useContext(AuthContext);
    

    const location = useLocation();
    
    

    if(loading){
        return <p>Loading...</p>
    }
    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to={'/login'}></Navigate>

    


}
export default ProvideRouter;