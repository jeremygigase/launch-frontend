import Cookies from 'js-cookie';

import {
    initialState,
    START_USER_REGISTER,
    SUCCES_USER_REGISTER,
    ERROR_USER_REGISTER,
    START_USER_LOGIN,
    SUCCES_USER_LOGIN,
    ERROR_USER_LOGIN,
    SUCCES_USER_SET,
    USER_LOGOUT
} from '../actions/user'

export default (state = initialState, {type,payload}) => {
    switch(type){
        case START_USER_REGISTER:
            return {
                ...state,
                register: {
                    error:{
                        bool:false,
                        message:""
                    },
                    loading:true
                }
            }
        case SUCCES_USER_REGISTER:
            return {
                ...state,
                register: {
                    ...state.register,
                    loading:false
                }
            }
        case ERROR_USER_REGISTER:
            return {
                ...state,
                register:{
                    error:{
                        bool:true,
                        message:payload
                    },
                    loading:false
                }
            }
        case START_USER_LOGIN:
            return {
                ...state,
                login: {
                    error:{
                        bool:false,
                        message:""
                    },
                    loading: true
                }
            }
        case SUCCES_USER_LOGIN:
            Cookies.set("jwt", payload)
            return {
                ...state,
                login:{
                    ...state,
                    loading: false
                },
                loggedIn: true
            }
        case ERROR_USER_LOGIN:
            const message =
                payload === "Invalid credentials."
                ? "Username and password don't match"
                : "Something went wrong, try again later";
            return {
                ...state,
                login: {
                    error: {
                        bool: true,
                        message: message,
                    },
                loading: false,
                }
            }
        case SUCCES_USER_SET:
            return {
                ...state,
                user: payload
            }

        case USER_LOGOUT:
                return {
                ...state,
            loggedIn: false
        }
    
        default:
            return state;
    }
    
}