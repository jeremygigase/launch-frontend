import {
    initialState,
    GET_FRIENDS_START,
    GET_FRIENDS_SUCCES,
    GET_FRIENDS_ERROR,
    POST_REQUEST_START,
    POST_REQUEST_SUCCES,
    POST_REQUEST_ERROR,
    ACCEPT_REQUEST_START,
    ACCEPT_REQUEST_SUCCES, 
    ACCEPT_REQUEST_ERROR,
    DENY_REQUEST_START,
    DENY_REQUEST_SUCCES, 
    DENY_REQUEST_ERROR
} from '../actions/friend'

export default (state=initialState, { type , payload }) => {
    switch(type){
        case GET_FRIENDS_START:
            return {
                ...state,
                friends: {
                    ...state,
                    loading:true,
                    error:""
                }
            }

        case GET_FRIENDS_SUCCES:
            return {
                ...state,
                friends: {
                    ...state,
                    loading:false,
                    data: payload
                }
            }

        case GET_FRIENDS_ERROR:
            return{
                ...state,
                friends:{
                    ...state,
                    loading: false,
                    error:payload
                }
            }
            case POST_REQUEST_START:
                return {
                    ...state,
                    loading:true,
                    error: ""
                }
            case POST_REQUEST_SUCCES:
                return {
                    ...state,
                    loading: false
                }
            case POST_REQUEST_ERROR:
                return {
                    ...state,
                    loading:false,
                    error: payload
                }
                case ACCEPT_REQUEST_START:
                return {
                    ...state,
                    loading:true,
                    error: ""
                }
            case ACCEPT_REQUEST_SUCCES:
                return {
                    ...state,
                    loading: false
                }
            case ACCEPT_REQUEST_ERROR:
                return {
                    ...state,
                    loading:false,
                    error: payload
                }

                case DENY_REQUEST_START:
                    return {
                        ...state,
                        loading:true,
                        error: ""
                    }
                case DENY_REQUEST_SUCCES:
                    return {
                        ...state,
                        loading: false
                    }
                case DENY_REQUEST_ERROR:
                    return {
                        ...state,
                        loading:false,
                        error: payload
                    }
        default:
            return state
    }
}