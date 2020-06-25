import {
    initialState,
    GET_TASKS_START,
    GET_TASKS_SUCCES,
    GET_TASKS_ERROR,
    START_ADD_TASK,
    SUCCES_ADD_TASK,
    ERROR_ADD_TASK,
    START_COMPLETE_TASK,
    SUCCES_COMPLETE_TASK, 
    ERROR_COMPLETE_TASK,
    START_DELETE_TASK,
    SUCCES_DELETE_TASK, 
    ERROR_DELETE_TASK 
} from '../actions/task'

export default (state=initialState, { type , payload }) => {
    switch(type){
        case GET_TASKS_START:
            return {
                ...state,
                tasks: {
                    ...state,
                    loading:true,
                    error:""
                }
            }

        case GET_TASKS_SUCCES:
            return {
                ...state,
                tasks: {
                    ...state,
                    loading:false,
                    data: payload
                }
            }

        case GET_TASKS_ERROR:
            return{
                ...state,
                tasks:{
                    ...state,
                    loading: false,
                    error:payload
                }
            }
        case START_ADD_TASK:
                return {
                    ...state,
                    tasks: {
                        ...state,
                        loading:true,
                        error:""
                    }
                }
            case SUCCES_ADD_TASK:
                return {
                    ...state,
                    tasks: {
                        ...state,
                        loading:false,
                        data: payload
                    }
                }
            case ERROR_ADD_TASK:
                return {
                    ...state,
                    tasks:{
                        ...state,
                        loading: false,
                        error:payload
                    }
                }
            case START_COMPLETE_TASK:
                return {
                    ...state,
                    tasks: {
                        ...state,
                        loading:true,
                        error:""
                    }
                }
            case SUCCES_COMPLETE_TASK:
                return {
                    ...state,
                    tasks: {
                        ...state,
                        loading:false
                    }
                }
            case ERROR_COMPLETE_TASK:
                return {
                    ...state,
                    tasks:{
                        ...state,
                        loading: false,
                        error:payload
                    }
                }
            case START_DELETE_TASK:
                return {
                    ...state,
                    tasks: {
                        ...state,
                        loading:true,
                        error:""
                    }
                    }
            case SUCCES_DELETE_TASK:
                return {
                    ...state,
                    tasks: {
                        ...state,
                        loading:false,
                        data: payload
                    }
                }
            case ERROR_DELETE_TASK:
                return {
                    ...state,
                    tasks:{
                        ...state,
                        loading: false,
                        error:payload
                    }
                    }        
        default:
            return state
    }
}