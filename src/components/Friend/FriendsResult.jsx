import React from "react";
import { useDispatch } from 'react-redux';


import {getFriendInfo} from '../../actions/friend'

export default function FriendsResult({friends}) {

    const dispatch = useDispatch();

    return <ul>
    {friends.map(friend => (
        <li key={friend.id} >
            {friend.id} {friend.request} {dispatch(getFriendInfo(friend.frnUsr2))}
        </li>
        
        ))}
</ul>;
}