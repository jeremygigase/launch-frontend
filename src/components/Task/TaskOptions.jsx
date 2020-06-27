// NPM'S
import React, { useState} from "react";
import styled from "styled-components";
import {useDispatch} from 'react-redux';
import moment from 'moment';


// Actions
import {completeTask, deleteTask, getTasks} from '../../actions/task'
import {postScore} from '../../actions/score'



//To Do add Edit functions

const Button = styled.input`
background-color: #136F63;
color: white;
width: 100%;
width: 50%;
float: left;`

export default function TaskOptions({props}) {
    const dispatch = useDispatch();
    const date = useState(moment().format("YYYY-MM-DD"));

    const getWeight = (number) => {
        const weights = {
            "Easy": 25,
            "Medium": 50,
            "Hard": 100
        };
        return weights[number];
    }


    const completeHandler = (id, date, weight) => {
        dispatch(completeTask(id, date, getWeight(weight)))
        dispatch(postScore(weight, date))
        dispatch(getTasks(id, date, "incomplete"))
      };

    return <>
            <Button type="button" value="Complete" onClick={() => completeHandler (props.id, date, getWeight(props.weight))}/>
            <Button type="button" value="Delete" onClick={() => dispatch(deleteTask(props))}/>
    </>

;
}