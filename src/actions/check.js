
// Helpers
import configJWT from '../helpers/configJWT'

export const initialState= {
    check: {
        loading: false,
        error: "",
        data: []
    }
}

export const CHECK_FRIENDS_START = "CHECK_FRIENDS_START";
export const CHECK_FRIENDS_SUCCES = "CHECK_FRIENDS_SUCCES";
export const CHECK_FRIENDS_ERROR = "CHECK_FRIENDS_ERROR";

export const checkFriends = (id, senrec) => dispatch => {
    dispatch(checkFriendsStart())
    configJWT
    .get(`${process.env.REACT_APP_API}/users/${id}/${senrec}`)
    .then(response => {
        console.log(response.data['hydra:member'])
        dispatch(checkFriendsSucces(response.data['hydra:member']))
        //dispatch(getFriends(id, senrec, "accepted"))

    })
    .catch(error =>  dispatch(checkFriendsError(error.response.data.error)))
}

export const checkFriendsStart = () => ({
    type: CHECK_FRIENDS_START
})

export const checkFriendsSucces = (data) => ({
    type: CHECK_FRIENDS_SUCCES,
    payload: data
})
  
export const checkFriendsError = (message) => ({
    type: CHECK_FRIENDS_ERROR,
    payload: message
})

export default (state=initialState, { type , payload }) => {
    switch(type){
                    case CHECK_FRIENDS_START:
                        return {
                            ...state,
                            friends: {
                                ...state,
                                loading:true,
                                error:""
                            }
                        }
            
                    case CHECK_FRIENDS_SUCCES:
                        return {
                            ...state,
                            friends: {
                                ...state,
                                loading:false,
                                data: payload
                            }
                        }
            
                    case CHECK_FRIENDS_ERROR:
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