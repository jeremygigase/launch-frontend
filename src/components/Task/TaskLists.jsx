
import React, {useState} from "react";
import moment from 'moment';

import TaskList from './TaskList'

export default function TaskLists() {

    const today = moment().format("YYYY-MM-DD");
    const tommorrow = moment().add(1,'days').format("YYYY-MM-DD");




    return <>
    <main className="tasklists">
        <h2>Today</h2>
        <TaskList date={today}/>
        <h2>Tommorrow</h2>
        <TaskList date={tommorrow}/>
    </main>
        
</>;
}