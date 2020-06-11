import React, { useContext } from 'react';
import {Route,Redirect} from "react-router-dom"
import AuthContext from '../../context/auth/authContext';

const PrivateRoute = ({component: Component, ...rest}) => {
    const authContext = useContext(AuthContext);
    const {isAuthenticated,token,isAdmin} = authContext;

    return (

       <Route {...rest} render = {
            props => !token && !isAuthenticated && !isAdmin ? (
               <Redirect to="/login" />
           ) : (
               <Component {...props} />
           )} />




           //Worked but can't be refreshed

    // <Route {...rest} render = {
    //     props => token &&
    //              isAuthenticated && 
    //              isAdmin == false  ? (
    //        <Component {...props} />
    //    ) : (
    //        <Redirect to="/loginer" />
    //    )} />
    );
}

export default PrivateRoute;