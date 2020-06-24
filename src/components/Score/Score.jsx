// NPM's
import React, {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';


// Actions
import {getScores} from '../../actions/score'


export default function Score({date}) {

    const user = useSelector(state => state.user.user)
    const id = user.id
    
    const dispatch = useDispatch();
    useEffect(()=> dispatch(getScores(id, date)), [])
    const scores = useSelector(state => state.score.scores.data)
    let dayScore = 0

    console.log(scores)
    console.log(dayScore)
    console.log(date)

    const calculateScore = (calculatedScore) => {
        scores && scores.map(score => (calculatedScore += score.amount))
        return calculatedScore
    }

    return <>
        <h3>{calculateScore(dayScore)}</h3>
    </>;
}