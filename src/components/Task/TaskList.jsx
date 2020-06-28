// NPM's
import React, {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';

// Components
import TaskResult from "./TaskResult"
import LogoLoad from '../General/LogoLoad'



// Actions
import {getTasks} from '../../actions/task'


export default function TaskList(props) {
    const date = props.date
    const status = props.status

    const user = useSelector(state => state.user.user)
    const id = user.id
    
    const dispatch = useDispatch();
    useEffect(()=> dispatch(getTasks(id, date, status)), [dispatch, id, date, status])
    const tasks = useSelector(state => state.task.tasks.data)
    const loading = useSelector(state => state.task.tasks.loading)

    return <div>
        <h4>{date}</h4>
        {loading && <LogoLoad />}
        {tasks && <TaskResult tasks={tasks} />}
    </div>;
}