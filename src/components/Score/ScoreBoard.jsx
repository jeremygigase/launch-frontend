// NPM's
import React, {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import styled from 'styled-components'

// Actions
import {getScores} from '../../actions/score'

// Components
//import Score from './Score'

const Circle = styled.div`
margin: 0 auto;
border: 4px solid #136F63;
width: 100px;
height: 100px;
border-radius: 50%;`

const Score = styled.h3`
margin:auto;
line-height:95px;
vertical-align:middle;
color: #136F63;
`

export default function ScoreBoard({date}) {

    const user = useSelector(state => state.user.user)
    const id = user.id
    const today = moment().format("YYYY-MM-DD");
    //const yesterday = moment().subtract(1, 'days').format("YYYY-MM-DD");
    
    const dispatch = useDispatch();
    useEffect(()=> dispatch(getScores(id, today)), [dispatch, id, today ])
    const scores = useSelector(state => state.score.scores.data)
    let dayScore = 0
    //let yesterdayScore = 0

    const calculateScore = (calculatedScore) => {
        scores && scores.map(score => (calculatedScore += score.amount))
        return calculatedScore
    }

    return <div>
        <h3>Your Score Today</h3>
        <Circle>
            <Score>{calculateScore(dayScore)}</Score>
        </Circle>
            
    </div>;
}