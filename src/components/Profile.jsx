import React, {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import ScoreBoard from "./Score/ScoreBoard";
import styled from "styled-components";

import moment from 'moment';

import LogoLoad from './General/LogoLoad'

// Actions 
import {getFriends} from '../actions/friend'

import TaskList from "./Task/TaskList";
import FriendRequests from "./Friend/FriendRequests";


const Main = styled.main`
color:black;
margin: 0 auto;
width: 50%;
text-align: center;`;

export default function Profile() {

    //const [requestConfirmation, setRequestConfirmation] = useState(false)
    const user = useSelector(state => state.user.user)
    const {username, id} = user


    

    const date = moment().format("YYYY-MM-DD");

    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(getFriends(id, "friend2s", "send"))
        
    }, [dispatch, id])
    const friends = useSelector(state => state.friend.friends.data)
    const loading = useSelector(state => state.friend.friends.loading)
    //console.log(friends)
    console.log(loading)

    let props = {
        date: date,
        status:"complete"
        }

    

    return <Main>
        <div>
        <h2>{username}</h2>
        <ScoreBoard/>
        <h2>Completed tasks today</h2>
        <TaskList {...props}/>
        </div>
        <div>
        <h2>Friend requests</h2>
        { loading && <LogoLoad />  }
        {
        friends && <FriendRequests friends={friends}/>}
        </div>
        </Main>;
}