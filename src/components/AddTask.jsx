// NPM's
import React from "react";

// Components
import TaskForm from './Task/TaskForm';

// Styling
import {Title, AddMain} from './StyledComponents'

export default function AddTask() {

    return <AddMain>
        <Title>Add Task</Title>
            <TaskForm />
            
        </AddMain>;
}