import {useSelector} from 'react-redux'

// Helpers
import configJWT from '../helpers/configJWT'

export const initialState= {
    tasks: {
        loading: false,
        error: "",
        data: []
    }
}



export const GET_TASKS_START = "GET_TASKS_START";
export const GET_TASKS_SUCCES = "GET_TASKS_SUCCES";
export const GET_TASKS_ERROR = "GET_TASKS_ERROR";

export const START_ADD_TASK = 'START_ADD_TASK'
export const SUCCES_ADD_TASK = 'SUCCES_ADD_TASK'
export const ERROR_ADD_TASK = 'ERROR_ADD_TASK'

export const START_COMPLETE_TASK = 'START_COMPLETE_TASK'
export const SUCCES_COMPLETE_TASK = 'SUCCES_COMPLETE_TASK'
export const ERROR_COMPLETE_TASK = 'ERROR_COMPLETE_TASK'

export const START_DELETE_TASK = 'START_DELETE_TASK'
export const SUCCES_DELETE_TASK = 'SUCCES_DELETE_TASK'
export const ERROR_DELETE_TASK = 'ERROR_DELETE_TASK'


export const getTasks = (id, tocomplete, status) => dispatch => {
    dispatch(setTasksStart())
    configJWT
    .get(`${process.env.REACT_APP_API}/users/${id}/tasks?tocomplete=${tocomplete}&status=${status}`)
    .then(response => {
        console.log(response.data['hydra:member'])
        dispatch(setTasksSucces(response.data['hydra:member']))
    })
    .catch(error =>  dispatch(setTasksError(error.response.data.error)))
}

export const setTasksStart = () => ({
    type: GET_TASKS_START
})

export const setTasksSucces = (data) => ({
    type: GET_TASKS_SUCCES,
    payload: data
  })
  
  export const setTasksError = (message) => ({
    type: GET_TASKS_ERROR,
    payload: message
  })

  
  export const addTask = (text, tocomplete, weight) => (dispatch) => {
      dispatch(addTaskStart())
      configJWT
      .post(`${process.env.REACT_APP_API}/tasks`,
      {
          "text": text,
          "status": "incomplete",
          "tocomplete": tocomplete,
          "weight": weight,
          "public": true 
      })
      .then(response => {
          console.log(response)
          dispatch(addTaskSucces())
      })
      .catch(dispatch(addTaskError("Could not post tasks!")))
  }
  
  export const addTaskStart= () => ({
      type: START_ADD_TASK
  });
    
  export const addTaskSucces = (data) => ({
      type: SUCCES_ADD_TASK,
      payload: data
  })
    
  export const addTaskError= (message) => ({
      type: ERROR_ADD_TASK,
      payload: message
  }) 

  export const completeTask = (id, date) => (dispatch) => {
    dispatch(completeTaskStart())
    configJWT
    .put(`${process.env.REACT_APP_API}/tasks/${id}`,
    {
        "status": "complete",
        "datecompleted": date,
    })
    .then(response => {
        console.log(response)
        dispatch(completeTaskSucces())
        dispatch(getTasks(id, date, "complete"))
    })
    .catch(dispatch(completeTaskError("Could not complete task!")))
}

export const completeTaskStart= () => ({
    type: START_COMPLETE_TASK
});
  
export const completeTaskSucces = () => ({
    type: SUCCES_COMPLETE_TASK,
})
  
export const completeTaskError= (message) => ({
    type: ERROR_COMPLETE_TASK,
    payload: message
}) 

export const deleteTask = (id) => (dispatch) => {
    dispatch(deleteTaskStart())
    configJWT
    .delete(`${process.env.REACT_APP_API}/tasks/${id}`)
    .then(response => {
        console.log(response)
        dispatch(deleteTaskSucces())
    })
    .catch(dispatch(deleteTaskError("Could not delete task!")))
}

export const deleteTaskStart= () => ({
    type: START_DELETE_TASK
});
  
export const deleteTaskSucces = (data) => ({
    type: SUCCES_DELETE_TASK,
    payload: data
})
  
export const deleteTaskError= (message) => ({
    type: ERROR_DELETE_TASK,
    payload: message
})