// NPM's
import axios from 'axios';
//import moment from 'moment'

// Helpers
import configJWT  from '../helpers/configJWT';

export const initialState = {
    loggedIn: false,
    user: [],
    login: {
        error: {
            bool: false,
            message:""
        },
        loading: false
    },
    register: {
        error: {
            bool: false,
            message:""
        },
        loading: false
    }
} 

export const START_USER_REGISTER = 'START_USER_REGISTER'
export const SUCCES_USER_REGISTER = 'SUCCES_USER_REGISTER'
export const ERROR_USER_REGISTER = 'ERROR_USER_REGISTER'

export const START_USER_LOGIN = 'START_USER_LOGIN'
export const SUCCES_USER_LOGIN = 'SUCCES_USER_LOGIN'
export const ERROR_USER_LOGIN = 'ERROR_USER_LOGIN'

export const START_USER_SET = 'START_USER_SET'
export const SUCCES_USER_SET = 'SUCCES_USER_SET'

export const USER_LOGOUT = 'USER_LOGOUT'

export const registerUser = (username, email, firstName, lastName, password, birthday) => (dispatch) => {
    dispatch(setStartRegister())
    axios
    .post(`${process.env.REACT_APP_API}/users`,{
        "username": username,
        "email": email,
        "firstname": firstName,
        "lastname": lastName,
        "password": password,
        "birthday": birthday  
    })
    .then(response => {
        //console.log(response)
        dispatch(setSuccesRegister(response.data[0]))
    })
    .catch(error =>  
        //console.log(error.response)
        dispatch(setErrorRegister(error.response.data.error))
    )
}


  
export const setStartRegister = () => ({
    type: START_USER_REGISTER
});
  
export const setSuccesRegister = (data) => ({
    type: SUCCES_USER_REGISTER,
    payload: data
})
  
export const setErrorRegister = (message) => ({
    type: ERROR_USER_REGISTER,
    payload: message
})

export const loginUser = (username,password) => (dispatch) => {
    dispatch(setStartLogin())
    axios
    .post(`${process.env.REACT_APP_API}/login_check`,{
            "username": username ,
            "password": password,    
    })
    .then(response => {
        dispatch(setUser(username));
        dispatch(setSuccesLogin(response.data.token))
        console.log(response)
    })
    .catch( error => dispatch(setErrorLogin(error.response.data.message)) )
}

export const setUser = (username) => (dispatch) => {
    dispatch(setUserStart())
    configJWT
    .get(`${process.env.REACT_APP_API}/users?username=${username}`)
    .then(response => {
        console.log(response.data['hydra:member'][0])
        dispatch(setUserSucces(response.data['hydra:member'][0]))
    })
    .catch( 
        dispatch(setErrorLogin("Login"))
        )
}

export const setStartLogin = () => ({
    type: START_USER_LOGIN
  });
  
  export const setSuccesLogin = (data) => ({
    type: SUCCES_USER_LOGIN,
    payload: data
  })
  
  export const setErrorLogin = (message) => ({
    type: ERROR_USER_LOGIN,
    payload: message
  })

  export const setUserStart = () => ({
    type: START_USER_SET
})

export const setUserSucces = (data) => ({
    type: SUCCES_USER_SET,
    payload: data
  })

export const userLogout = () => ({
    type: USER_LOGOUT,
});