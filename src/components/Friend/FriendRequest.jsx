// NPM's
import React, {useState} from "react";
import {useDispatch } from 'react-redux';
import moment from 'moment'

//Actions
import {acceptRequest, denyRequest} from '../../actions/friend'

//Styling
import {Item, Description, Weight, Request} from '../StyledComponents'

export default function FoundFriend({friend}) {

    const [clicked, setClicked] = useState(false);

    const dispatch = useDispatch();

    const date = moment().format("YYYY-MM-DD");

    const calculateScore = (scores) => {
        let totalScore = 0
        scores && scores
        .filter(score => score.date.slice(0,10) === date)
        .map(score => totalScore += score.amount)
    
        return totalScore
    }


    const clickHandlerAccept = (id, friend) => {
        dispatch(acceptRequest(id, friend))
        setClicked(true)
    }

    const clickHandlerDeny = (id, friend) => {
        dispatch(denyRequest(id, friend))
        setClicked(true)
        
    }

    /*checkedFriends && checkedFriends
                        .filter(friend => friend.sender.id === id)
                        .filter(friend => friend.receiver.id === foundFriend.id)
                        .length > 0 || 
                        </div>*/

    return <>
    
    <Item key={friend.id}> 
            {/*<div>
                <img />
            </div>*/}
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