
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    CLEAR_ERRORS,
    AUTH_ERROR,
    USER_LOADED,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT
 } from '../types';

export default(state,action) => {
    switch(action.type) {
        case USER_LOADED:
            localStorage.setItem('userId',action.payload._id);
            return {
                ...state,
                isAuthenticated:true,
                loading:false,
                errFlag:false,
                user:action.payload
            }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token',action.payload.token);
            // localStorage.setItem('user',action.payload.id);
            return {
                ...state,
                token:action.payload.token,
                isAdmin:action.payload.isAdmin,
                isAuthenticated:true,
                loading:true,
                errFlag:false                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
        }
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAIL:
            localStorage.removeItem('token');
            // localStorage.removeItem('user');
            return {
                token:null,
                isAdmin:false,
                isAuthenticated:false,
                loading:true,
                user:null,
                error:action.payload,
                errFlag:true
           }
        case LOGOUT:
                localStorage.removeItem('token');
                // localStorage.removeItem('user');
                localStorage.removeItem('userId');
                return {
                    token:null,
                    isAuthenticated:false,
                    loading:false,
                    user:null
               }
        case CLEAR_ERRORS:
            return {
                   ...state,
                   error:null,
                   errFlag:false
               }
        default:
            return state;
    }
}