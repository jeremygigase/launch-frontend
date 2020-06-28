// Helpers
import configJWT from '../helpers/configJWT'


export const initialState= {
    friends: {
        loading: false,
        error: "",
        data: [],
        check: []
    }
}

export const GET_FRIENDS_START = "GET_FRIENDS_START";
export const GET_FRIENDS_SUCCES = "GET_FRIENDS_SUCCES";
export const GET_FRIENDS_ERROR = "GET_FRIENDS_ERROR";

export const POST_REQUEST_START = "POST_REQUEST_START";
export const POST_REQUEST_SUCCES = "POST_REQUEST_SUCCES";
export const POST_REQUEST_ERROR = "POST_REQUEST_ERROR";

export const ACCEPT_REQUEST_START = "ACCEPT_REQUEST_START";
export const ACCEPT_REQUEST_SUCCES = "ACCEPT_REQUEST_SUCCES";
export const ACCEPT_REQUEST_ERROR = "ACCEPT_REQUEST_ERROR";

export const DENY_REQUEST_START = "DENY_REQUEST_START";
export const DENY_REQUEST_SUCCES = "DENY_REQUEST_SUCCES";
export const DENY_REQUEST_ERROR = "DENY_REQUEST_ERROR";

export const getFriends = (id, senrec, request) => dispatch => {
    dispatch(getFriendsStart())
    configJWT
    .get(`${process.env.REACT_APP_API}/users/${id}/${senrec}?request=${request}`)
    .then(response => {
        console.log(response.data['hydra:member'])
        dispatch(getFriendsSucces(response.data['hydra:member']))

    })
    .catch(error =>  dispatch(getFriendsError(error.response.data.error)))
}

export const getFriendsStart = () => ({
    type: GET_FRIENDS_START
})

export const getFriendsSucces = (data) => ({
    type: GET_FRIENDS_SUCCES,
    payload: data
})
  
export const getFriendsError = (message) => ({
    type: GET_FRIENDS_ERROR,
    payload: message
})

export const postRequest = (id, request) => dispatch => {
    console.log(id)
    dispatch(postRequestStart())
    configJWT
    .post(`${process.env.REACT_APP_API}/friends`,{
        "request": request, 
        "receiver": `api/users/${id}`
        
    })
    .then(response => {
        console.log(response)
        dispatch(postRequestSucces())

    })
    .catch(error =>  dispatch(postRequestError(error.response.data.error)))
}

export const postRequestStart = () => ({
    type: POST_REQUEST_START
})

export const postRequestSucces = (data) => ({
    type: POST_REQUEST_SUCCES,
    payload: data
})
  
export const postRequestError = (message) => ({
    type: POST_REQUEST_ERROR,
    payload: message
})

export const acceptRequest = (id, friend) => dispatch => {
    console.log(id)
    dispatch(acceptRequestStart())
    configJWT
    .put(`${process.env.REACT_APP_API}/friends/${id}`,{
        "request": "accepted"
        
    })
    .then(response => {
        console.log(response)
        dispatch(acceptRequestSucces())
        dispatch(postRequest(friend, "accepted"))
    })
    .catch(error =>  dispatch(acceptRequestError(error.response.data.error)))
}

export const acceptRequestStart = () => ({
    type: ACCEPT_REQUEST_START
})

export const acceptRequestSucces = (data) => ({
    type: ACCEPT_REQUEST_SUCCES,
    payload: data
})
  
export const acceptRequestError = (message) => ({
    type: ACCEPT_REQUEST_ERROR,
    payload: message
})

export const denyRequest = (id, friend) => dispatch => {
    console.log(id)
    dispatch(denyRequestStart())
    configJWT
    .put(`${process.env.REACT_APP_API}/friends/${id}`,{
        "request": "deny" 
    })
    .then(response => {
        console.log(response)
        dispatch(denyRequestSucces())
        dispatch(postRequest(friend, "deny"))
    })
    .catch(error =>  dispatch(denyRequestError(error.response.data.error)))
}

export const denyRequestStart = () => ({
    type: DENY_REQUEST_START
})

export const denyRequestSucces = (data) => ({
    type: DENY_REQUEST_SUCCES,
    payload: data
})
  
export const denyRequestError = (message) => ({
    type: DENY_REQUEST_ERROR,
    payload: message
})

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