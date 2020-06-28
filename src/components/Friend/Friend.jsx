import React from "react";
import styled from "styled-components";

import moment from 'moment'


const Item = styled.li`
width: 100%;
border: 1px solid #cadecf;
border-radius: 5px;
overflow: hidden;
font-weight: 600;
font-size: 0.9em;
box-shadow: 0.2em 0.2em #cadecf;
margin: 0.5em auto;`

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


export default function Friend({friend}) {

    const date = moment().format("YYYY-MM-DD");

    const calculateScore = (scores) => {
        let totalScore = 0
        scores && scores
        .filter(score => score.date.slice(0,10) === date)
        .map(score => totalScore += score.amount)
    
        return totalScore
    }



    return <Item > 
            {/*<div>
                <img />
            </div>*/}
            <Description>
            <div>
                {friend.username}
            </div>
            {/*<div>
                {friend.receiver.created}
            </div>*/}
            </Description>
            <Weight>
                {calculateScore(friend.scores) } 
            </Weight>
            {/*<Task>
                To do Task random, compelted & public komt hier dus neem een aaray van de taken en randomize
            </Task> */}
        </Item>
}