// NPM's
import React, {useState} from "react";
import {useDispatch } from 'react-redux';

// helpers
import calculateScore from '../../helpers/calculateScore'

//Actions
import {acceptRequest, denyRequest} from '../../actions/friend'

//Styling
import {Item, Description, Weight, Request} from '../StyledComponents'

//Friend Request Component used in Profile Page

export default function FriendRequest({friend}) {

    const [clicked, setClicked] = useState(false);

    const dispatch = useDispatch();

    // Accepting friend request sends a put and post request through the user reducer
    const clickHandlerAccept = (id, friend) => {
        dispatch(acceptRequest(id, friend))
        setClicked(true)
    }

    // Denying friend request sends a put and post request through the user reducer
    const clickHandlerDeny = (id, friend) => {
        dispatch(denyRequest(id, friend))
        setClicked(true)
        
    }

    return <>
    
    <Item key={friend.id}> 
            <Description>
            <div>
                {friend.sender.username}
            </div>
            </Description>
            <Weight>
                {calculateScore(friend.sender.scores) } 
            </Weight>
        </Item>
        {                !clicked 
                ?
                <div>
                <Request type="button" value="Accept" onClick={() => clickHandlerAccept(friend.id, friend.sender.id)}/>
                <Request type="button" value="Deny" onClick={() => clickHandlerDeny(friend.id, friend.sender.id)}/>
                </div> 
                : <div>
                    reply send
                </div>}
                          

    </>
}