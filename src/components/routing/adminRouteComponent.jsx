import React, { useContext } from 'react';
import {Route,Redirect} from "react-router-dom"
import AuthContext from '../../context/auth/authContext';

const AdminRoute = ({component: Component, ...rest}) => {
    const authContext = useContext(AuthContext);
    const {isAuthenticated,token,isAdmin} = authContext;

    return (

        <Route {...rest} render = {
            props => token &&
                     isAuthenticated &&
                     isAdmin == true ? (
             <Component {...props} />
           ) : (
              <Redirect to="/login" />
           )} />


    //    <Route {...rest} render = {
    //         props => !token &&  
    //                  !isAuthenticated  &&
    //                  !isAdmin === 'false' ?   (
    //            <Redirect to="/login" />
    //        ) : (
    //            <Component {...props} />
    //        )} />

    //   <Route {...rest} render = {
    //     props => token && isAuthenticated  &&  isAdmin  ?  (
    //         <Component {...props} />
    //    ) : (
    //        <Redirect to="/login" />
    //    )} />
    );
}

export default AdminRoute;