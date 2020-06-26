// Helpers
import configJWT from '../helpers/configJWT'


export const initialState= {
    friends: {
        loading: false,
        error: "",
        data: []
    }
}

export const GET_FRIENDS_START = "GET_FRIENDS_START";
export const GET_FRIENDS_SUCCES = "GET_FRIENDS_SUCCES";
export const GET_FRIENDS_ERROR = "GET_FRIENDS_ERROR";


export const getFriends = (id) => dispatch => {
    dispatch(getFriendsStart())
    configJWT
    .get(`${process.env.REACT_APP_API}/users/${id}/friend1s?request=accepted`)
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
        default:
            return state
    }
}