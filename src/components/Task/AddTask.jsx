import React from "react";

import TaskForm from './TaskForm'

export default function AddTask() {

    return <main className="add-task">
        <div className="add-task-container">
        <h1>Add Task</h1>
        <TaskForm />
        </div>
    </main>;
}