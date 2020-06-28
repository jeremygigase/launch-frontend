// NPM's
import React from "react";
import moment from 'moment';
import styled from "styled-components";


// Components
import TaskList from './Task/TaskList'
import ScoreBoard from "./Score/ScoreBoard";


const Main = styled.main `
margin: 0 auto;
text-align: center;
`;


export default function Home() {

    const date = moment().format("YYYY-MM-DD");

    let props = {
        date: date,
        status:"incomplete"
        }

    return <>
    <Main>
        <div>
            <ScoreBoard date={date}/>
            <h2>Today's Tasks</h2>
            <TaskList {...props}/>
        </div>
    </Main>
    </>;
}