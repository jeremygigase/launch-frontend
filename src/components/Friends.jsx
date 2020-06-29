// NPM's
import React, {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';

// Actions
import {getFriends} from '../actions/friend'

// Components
import FriendsResult from './Friend/FriendsResult'
import SearchFriend from './Friend/SearchFriend'

// Styling
import {Main, Column1, Column2, Title} from './StyledComponents'

// Assets
import LogoLoad from "./General/LogoLoad"

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
    
    return <Main>
        <Column1>
        <Title>Friends</Title>
        {
            loading && <LogoLoad />
        }
        {
            friends && <FriendsResult friends={friends}/>
        }
        </Column1>
        <Column2>
            <SearchFriend />
        </Column2>
    </Main>;
}