// NPM'S
import React from "react";

// Components
import Task from './Task'


// Styling
import {Results, Item} from '../StyledComponents'

//To Do Change cursor to pointer

export default function TaskResult({tasks}) {

    return <>
        <Results>
        {tasks && tasks.map(task => (
                <Item key={task.id} >
                    <Task task={task}/>
                </Item>
                
                ))}
    </Results>
    </>

;
}