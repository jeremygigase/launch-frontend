// NPM's
import React from "react";
import moment from 'moment'

//Styling
import {Item, Description, Weight} from '../StyledComponents'


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