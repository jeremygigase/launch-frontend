// NPM'S
import React, {useState} from "react";

// Components 
import TaskOptions from './TaskOptions'

// Styling
import {Description, Options, TaskWeight} from '../StyledComponents'

// To Do Edit Task Options

export default function Task({task}) {

    const [options, setOptions] = useState(false)

    // Gives back the amount of points a task is worth
    // Could probably give the value already when you choose
    // In select
    const getWeight = (number) => {
        const weights = {
            "Easy": 25,
            "Medium": 50,
            "Hard": 100
        };
        return weights[number];
    }

    //Gives back the right colors for the difficulty of the task
    const getBGColor = (color) => {
        const weights = {
            "Easy": "#17B890",
            "Medium": "#E3C567",
            "Hard": "#E71D36"
        };
        return weights[color];
    }

    // If task isn't completed yet it gets options otherwise none like in the profile page
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
        <TaskWeight bGColor={getBGColor(task.weight)}>
            {getWeight(task.weight)}
        </TaskWeight>
        {options ? optionsComponent : ""}
    </>

;
}