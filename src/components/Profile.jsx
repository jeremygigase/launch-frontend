// NPM's
import React, {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import ScoreBoard from "./Score/ScoreBoard";
import moment from 'moment';

// Actions 
import {getFriends} from '../actions/friend'

// Components
import TaskList from "./Task/TaskList";
import FriendRequests from "./Friend/FriendRequests";

// Styling
import {Main, Column1, Column2, Title} from './StyledComponents'

// Assets
import LogoLoad from "./General/LogoLoad"

// To Do add Graph with previous score
// Profile Picture, Backend Ready
// Change Password, Backend Ready

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

    let props = {
        date: date,
        status:"complete"
        }

    return <Main>
        <Column1>
            <Title>
                {username}
            </Title>
            <ScoreBoard/>
            <Title>
                Friend requests
            </Title>
            { 
                loading && <LogoLoad />  
            }
            {
                friends && <FriendRequests friends={friends}/>
            }
        </Column1>
        <Column2>
            <Title>Completed tasks today</Title>
            <TaskList {...props}/>
        </Column2>
    </Main>;
}