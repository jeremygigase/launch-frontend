// NPM's
import React, {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

// Helpers
import calculateScore from '../../helpers/calculateScore'

// Actions
import {getScores} from '../../actions/score'

//Styling
import {Circle, Score, SmallTitle} from '../StyledComponents'

// To Do Scores on other days and last week

export default function ScoreBoard({date}) {

    const user = useSelector(state => state.user.user)
    const id = user.id
    const today = moment().format("YYYY-MM-DD");
    
    const dispatch = useDispatch();
    useEffect(()=> dispatch(getScores(id, today)), [dispatch, id, today ])
    const scores = useSelector(state => state.score.scores.data)

    return <div>
        <SmallTitle>Your Score Today</SmallTitle>
        <Circle>
            <Score>{calculateScore(scores)}</Score>
        </Circle>
            
    </div>;
}