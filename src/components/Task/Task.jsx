// NPM'S
import React, {useState} from "react";
import styled from "styled-components";
import {useDispatch} from 'react-redux';
import moment from 'moment';
//To Do Change cursor to pointer

// Actions
import {completeTask, deleteTask} from '../../actions/task'

// Components 
import TaskOptions from './TaskOptions'

const Description = styled.a`
padding: 1em 0;
width: 80%;
float: left;
background-color: white;`

const Weight = styled.div`
width: 20%;
float: left;
padding: 1em 0;
color: white;
background-color: ${props => (props.bGColor)}`

const Options = styled.div`
overflow: hidden;
border: 1px solid #136F63;`



export default function Task({task}) {

    const [options, setOptions] = useState(false)

    const getWeight = (number) => {
        const weights = {
            "Easy": 25,
            "Medium": 50,
            "Hard": 100
        };
        return weights[number];
    }

    const getBGColor = (color) => {
        const weights = {
            "Easy": "#17B890",
            "Medium": "#E3C567",
            "Hard": "#E71D36"
        };
        return weights[color];
    }


    return <>
        <Description onClick={() =>
            setOptions(!options)}>
            {task.text} 
        </Description>
        <Weight bGColor={getBGColor(task.weight)}>
            {getWeight(task.weight)}
        </Weight>
        {options ?
        <Options>
            <TaskOptions props={task}/>
        </Options> : ""}
    </>

;
}