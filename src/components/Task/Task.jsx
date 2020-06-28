// NPM'S
import React, {useState} from "react";
import styled from "styled-components";


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
border: 1px solid white;`



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

    let optionsComponent = ""

    if(task.status === "incomplete" ){
        optionsComponent = 
    <Options>
        <TaskOptions props={task}/>
    </Options>
    }
    
    return <>
        <Description onClick={() =>
            setOptions(!options)}>
            {task.text} 
        </Description>
        <Weight bGColor={getBGColor(task.weight)}>
            {getWeight(task.weight)}
        </Weight>
        {options ? optionsComponent : ""}
    </>

;
}