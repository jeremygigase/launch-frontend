// NPM'S
import React, {useState} from "react";
import styled from "styled-components";
import {useDispatch} from 'react-redux';
import moment from 'moment';


// Actions
import {completeTask, deleteTask} from '../../actions/task'
import {postScore} from '../../actions/score'

//import configJWT from '../../helpers/configJWT'



//To Do add Edit functions

const Button = styled.input`
color: white;
width: 50%;
border: none;
&:hover {
  text-decoration: underline;
}`

const Complete = styled(Button)`
background-color: #136F63;
`

const Delete = styled(Button)`
background-color: #E71D36;
`

export default function TaskOptions({props}) {
    const dispatch = useDispatch();
    const date = moment().format("YYYY-MM-DD")
    const [submitted, setSubmitted] = useState(false)

    const getWeight = (number) => {
        const weights = {
            "Easy": 25,
            "Medium": 50,
            "Hard": 100
        };
        return weights[number];
    }

    const completeHandler = (id, date, weight) => {
        console.log(id, date, weight)
        setSubmitted(true)
        dispatch(completeTask(id, date))
        dispatch(postScore(weight, date))

      };

      const deleteHandler = (id) => {
        console.log(id)
        setSubmitted(true)
        dispatch(deleteTask(props.id))
      };

    return <>
            {
              !submitted ?
              <div>
                <Complete type="button" value="Complete" onClick={() => completeHandler(props.id, date, getWeight(props.weight))}/>
                <Delete type="button" value="Delete" onClick={() => deleteHandler(props.id)}/>
              </div> : 
              <div>
                Task Completed/Deleted
              </div>
            }

    </>

;
}