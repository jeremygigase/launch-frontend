// NPM's
import React from "react";
import moment from 'moment';

// Components
import TaskList from './Task/TaskList'
import ScoreBoard from "./Score/ScoreBoard";

//Styling
import {Main, Column1, Column2, Title} from './StyledComponents'

// To Do Add yesterdays Score

export default function Home() {

    const date = moment().format("YYYY-MM-DD");

    let props = {
        date: date,
        status:"incomplete"
        }

    return <>
    <Main>
        <Column1>
            <Title>Home</Title>
            <ScoreBoard date={date}/>
        </Column1>
        <Column2> 
            <Title>Today's Tasks</Title>
            <TaskList {...props}/>
        </Column2>  
    </Main>
    </>;
}