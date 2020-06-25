// NPM's
import React, {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';

// Components
import TaskResult from "./TaskResult"

// Actions
import {getTasks} from '../../actions/task'

export default function TaskList(props) {

    console.log(props)
    const date = props.date
    const status = props.status

    const user = useSelector(state => state.user.user)
    const id = user.id
    
    const dispatch = useDispatch();
    useEffect(()=> dispatch(getTasks(id, date, status)), [dispatch, id, date, status])
    const tasks = useSelector(state => state.task.tasks.data)

    return <div>
        <h4>{date}</h4>
        {tasks && <TaskResult tasks={tasks} />}
        Hier eindigt de lijst...
    </div>;
}