// NPM's
import React, {useState} from "react";
import {useDispatch} from 'react-redux';

// Actions
import {postRequest} from '../../actions/friend'

//Styling
import {Item2, Description, Request} from '../StyledComponents'

export default function FoundFriend({friend}) {

    const [clicked, setClicked] = useState(false);

    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch(postRequest(friend.id, "send"))
        setClicked(true)
    }

    /*checkedFriends && checkedFriends
                        .filter(friend => friend.sender.id === id)
                        .filter(friend => friend.receiver.id === foundFriend.id)
                        .length > 0 || 
                        </div>*/

    return <>
    <Item2 key={friend.id}> 
            <Description>
                {friend.username}
            </Description>
    </Item2>
    {clicked ? 
    <div>
        Request send
    </div>
        : 
    <Request type="button" value="Send request?" onClick={clickHandler}/>}
    </>
}