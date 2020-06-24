// NPM's
import React from "react";
import moment from 'moment';


// Components
import TaskList from './Task/TaskList'
import ScoreBoard from "./Score/ScoreBoard";


export default function Home() {

    const date = moment().format("YYYY-MM-DD");

    return <>
    <main className="home">
        <div>
            <h1>Home</h1>
            <ScoreBoard date={date}/>
            <h2>Today's Tasks</h2>
            <TaskList date={date}/>
        </div>
    </main>
    </>;
}