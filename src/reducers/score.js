import {
    initialState,
    POST_SCORE_START,
    POST_SCORE_SUCCES,
    POST_SCORE_ERROR,
    GET_SCORES_START,
    GET_SCORES_SUCCES,
    GET_SCORES_ERROR,
} from '../actions/score'

export default (state=initialState, { type , payload }) => {
    switch(type){
        case POST_SCORE_START:
            return {
                ...state,
                scores: {
                    ...state,
                    loading:true,
                    error:""
                }
            }

        case POST_SCORE_SUCCES:
            return {
                ...state,
                scores: {
                    ...state,
                    loading:false,
                    data: payload
                }
            }

        case POST_SCORE_ERROR:
            return{
                ...state,
                scores:{
                    ...state,
                    loading: false,
                    error:payload
                }
            }  
            case GET_SCORES_START:
                return {
                    ...state,
                    scores: {
                        ...state,
                        loading:true,
                        error:""
                    }
                }
    
            case GET_SCORES_SUCCES:
                return {
                    ...state,
                    scores: {
                        ...state,
                        loading:false,
                        data: payload
                    }
                }
            case GET_SCORES_ERROR:
                return{
                    ...state,
                    scores:{
                        ...state,
                        loading: false,
                        error:payload
                    }
                }     
        default:
            return state
    }
}