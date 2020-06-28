import React, {useState} from "react";
import styled from "styled-components";

import {useDispatch } from 'react-redux';
import moment from 'moment'

import {postRequest} from '../../actions/friend'

const Item = styled.div`
width: 90%;
border: 1px solid #cadecf;
border-radius: 5px;
overflow: hidden;
font-weight: 600;
font-size: 0.9em;
box-shadow: 0.2em 0.2em #cadecf;
margin: 0 0 1em 2em;`

const Description = styled.a`
padding: 1em 0;
width: 80%;
float: left;
background-color: white;`

const Weight = styled.div`
width: 20%;
float: left;
padding: 1em 0;
color: white;
background-color: black;`

const Request = styled.input`
text-align: center;
background: black;
margin-top: 1em;
padding-top: 2px;
width: 9em;
height: 3em;
border-radius: 25px;
color: white;

&:hover {
    background: #E71D36;
  }`



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
    <Item key={friend.id}> 
            {/*<div>
                <img />
            </div>*/}
            <Description>
            <div>
                {friend.username}
            </div>
            </Description>
            <Weight>
                {calculateScore(friend.scores) } 
            </Weight>
        </Item>
        {clicked ? 
            <div>
                Request send
            </div>
            : 
            <Request type="button" value="Send request?" onClick={clickHandler}/>}
                          

    </>
}