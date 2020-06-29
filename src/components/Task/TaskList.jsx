// NPM's
import React, {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';

// Actions
import {getTasks} from '../../actions/task'

// Components
import TaskResult from "./TaskResult"
import LogoLoad from '../General/LogoLoad'

// Styling
import {StyledTaskList, DateTitle} from '../StyledComponents'

export default function TaskList(props) {
    const date = props.date
    const status = props.status

    const user = useSelector(state => state.user.user)
    const id = user.id
    
    const dispatch = useDispatch();
    useEffect(()=> dispatch(getTasks(id, date, status)), [dispatch, id, date, status])
    const tasks = useSelector(state => state.task.tasks.data)
    const loading = useSelector(state => state.task.tasks.loading)

    return <StyledTaskList>
        <DateTitle>{date}</DateTitle>
        {loading && <LogoLoad />}
        {tasks && <TaskResult tasks={tasks} />}
    </StyledTaskList>;
}