// Helpers
import configJWT from '../helpers/configJWT'

export const initialState= {
    scores: {
        loading: false,
        error: "",
        data: []
    }
}

export const POST_SCORE_START = "POST_SCORE_START";
export const POST_SCORE_SUCCES = "POST_SCORE_SUCCES";
export const POST_SCORE_ERROR = "POST_SCORE_ERROR";

export const GET_SCORES_START = "GET_SCORES_START";
export const GET_SCORES_SUCCES = "GET_SCORES_SUCCES";
export const GET_SCORES_ERROR = "GET_SCORES_ERROR";

export const postScore = (amount, date) => (dispatch) => {
    dispatch(postScoreStart())
    configJWT
    .post(`${process.env.REACT_APP_API}/scores`,
    {
        "amount": amount,
        "date": date,
    })
    .then(response => {
        console.log(response)
        dispatch(postScoreSucces())
    })
    .catch(dispatch(postScoreError("Could not post score!")))
}

export const postScoreStart = () => ({
    type: POST_SCORE_START
})

export const postScoreSucces = (data) => ({
    type: POST_SCORE_SUCCES,
    payload: data
  })
  
  export const postScoreError= (message) => ({
    type: POST_SCORE_ERROR,
    payload: message
  })

export const getScores = (id, date) => dispatch => {
    dispatch(getScoresStart())
    configJWT
    .get(`${process.env.REACT_APP_API}/users/${id}/scores?date=${date}`)
    .then(response => {
        console.log(response.data['hydra:member'])
        dispatch(getScoresSucces(response.data['hydra:member']))
    })
    .catch(error =>  dispatch(getScoresError(error.response.data.error)))
}

export const getScoresStart = () => ({
    type: GET_SCORES_START
})

export const getScoresSucces = (data) => ({
    type: GET_SCORES_SUCCES,
    payload: data
  })
  
  export const getScoresError = (message) => ({
    type: GET_SCORES_ERROR,
    payload: message
  })

