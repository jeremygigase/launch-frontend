import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import ScoreBoard from "./Score/ScoreBoard";

import moment from 'moment';

import TaskList from "./Task/TaskList";

export default function Profile() {

    const user = useSelector(state => state.user.user)
    const {username} = user

    const date = moment().format("YYYY-MM-DD");

    let props = {
        date: date,
        status:"complete"
        }

    return <div>
        <h1>Profile</h1>
        <div>
        <h2>{username}</h2>
        <h2>Image</h2>
        <ScoreBoard/>
        <h2>completed tasks today</h2>
        <TaskList {...props}/>
        </div>
        <div>
            <h2>Graph</h2>
        </div>
        <div>
        <h2>Friend requests</h2>
        </div>
        
    </div>;
}