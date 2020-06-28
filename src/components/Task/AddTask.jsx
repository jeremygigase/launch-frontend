import React from "react";
import styled from "styled-components";

import TaskForm from './TaskForm';

const Container = styled.main`
margin: auto;
background-color: #F5F7F8;
padding: 0.25em;
max-width: 50vmin;
text-align: center;
border-radius: 0.25em;`;

export default function AddTask() {

    return <Container>
        <h1>Add Task</h1>
            <TaskForm />
            
        </Container>;
}