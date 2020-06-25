import React, {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';


import FriendsResult from './Friend/FriendsResult'
// Actions
import {getFriends} from '../actions/friend'

export default function Friends() {


    const user = useSelector(state => state.user.user)
    const id = user.id
    
    const dispatch = useDispatch();
    useEffect(()=> dispatch(getFriends(id)), [dispatch, id])
    const friends = useSelector(state => state.friend.friends.data)

    console.log(friends && friends.frnUser2)

    return <div>
        {friends && <FriendsResult friends={friends} />}

    </div>;
}