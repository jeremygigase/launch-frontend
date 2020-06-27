import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import ScoreBoard from "./Score/ScoreBoard";

import moment from 'moment';

// Actions 
import {getFriends, acceptRequest, denyRequest} from '../actions/friend'

import TaskList from "./Task/TaskList";

export default function Profile() {

    //const [requestConfirmation, setRequestConfirmation] = useState(false)
    const user = useSelector(state => state.user.user)
    const {username, id} = user

    const [clicked, setClicked] = useState(false)



    const date = moment().format("YYYY-MM-DD");

    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(getFriends(id, "friend2s", "send"))
        
    }, [dispatch, id])
    const friends = useSelector(state => state.friend.friends.data)
    console.log(friends)

    let props = {
        date: date,
        status:"complete"
        }

    const clickHandlerAccept = (id, friend) => {
        dispatch(acceptRequest(id, friend))
        setClicked(true)
    }

    const clickHandlerDeny = (id, friend) => {
        dispatch(denyRequest(id, friend))
        setClicked(true)
        
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
        <ul>
        {
        friends && friends.filter(friend => friend.receiver.id  === id).map(friend => 
            
                <li key={friend.id}> 
                {/*<div>
                    <img />
                </div>*/}
                <div>
                    {friend.sender.username}
                </div>
                {
                    !clicked 
                    ?
                    <div>
                    <input type="button" value="Accept" onClick={() => clickHandlerAccept(friend.id, friend.sender.id)}/>
                    <input type="button" value="Deny" onClick={() => clickHandlerDeny(friend.id, friend.sender.id)}/>
                    </div> 
                    : <div>
                        reply send
                    </div>
                }

            </li>
        
    )
}
        </ul>
        </div>
        
    </div>;
}