// NPM'S
import React from "react";
import styled from "styled-components";

// Components
import Task from './Task'
//To Do Change cursor to pointer

const Results = styled.ul`
list-style: none;
`
const Item = styled.li`
width: 75%;
min-width: 20em;
border: 1px solid #cadecf;
border-radius: 5px;
overflow: hidden;
font-weight: 600;
font-size: 0.9em;
box-shadow: 0.2em 0.2em #cadecf;
margin: 0.5em auto;
text-align: center;`



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