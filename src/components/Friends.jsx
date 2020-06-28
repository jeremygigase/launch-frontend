import React, {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';

import styled from "styled-components";

import FriendsResult from './Friend/FriendsResult'
import SearchFriend from './Friend/SearchFriend'

import LogoLoad from "./General/LogoLoad"
// Actions
import {getFriends} from '../actions/friend'

const FriendsMain = styled.main`
color:black;
margin: 0 auto;
width: 50%;
text-align: center;`;

export default function Friends() {

    const user = useSelector(state => state.user.user)
    const id = user.id
    
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(getFriends(id, "friend1s", "accepted"))
    }, [dispatch, id])
    const friends = useSelector(state => state.friend.friends.data)
    const loading = useSelector(state => state.friend.friends.loading)

    console.log(loading)
    
    return <FriendsMain>
        {
            loading && <LogoLoad />
        }
        {
            friends && <FriendsResult friends={friends}/>
        }
    
        <SearchFriend />
    </FriendsMain>;
}