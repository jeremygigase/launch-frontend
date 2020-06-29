// NPM's
import React from "react";
import { useSelector } from 'react-redux';

// Components
import FriendRequest from './FriendRequest'

export default function FriendRequests({friends}) {

    const user = useSelector(state => state.user.user)
    const {id} = user

    return <ul>
    {
        friends
        .filter(friend => friend.receiver.id  === id)
        .map(friend => <FriendRequest key={friend.id} friend={friend} />)
    }
    </ul>
}