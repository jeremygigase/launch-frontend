// NPM'S
import React from "react";
import styled from "styled-components";
import {useDispatch} from 'react-redux';
import moment from 'moment';


// Actions
import {completeTask, deleteTask} from '../../actions/task'


//To Do Change add Edit functions

const Button = styled.input`
background-color: #136F63;
color: white;
width: 100%;
width: 50%;
float: left;`

export default function TaskOptions({props}) {
    console.log(props)
    const dispatch = useDispatch();
    const date = moment().format("YYYY-MM-DD");

    const getWeight = (number) => {
        const weights = {
            "Easy": 25,
            "Medium": 50,
            "Hard": 100
        };
        return weights[number];
    }

    return <>
            <Button type="button" value="Complete" onClick={() => dispatch(completeTask(props.id, date, getWeight(props.weight)))}/>
            {/*<input type="button" value="Edit"/>*/}
            <Button type="button" value="Delete" onClick={() => dispatch(deleteTask(props))}/>
    </>

;
}