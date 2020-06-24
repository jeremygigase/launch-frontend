// NPM's
import React, {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

// Actions
import {getScores} from '../../actions/score'

// Components
//import Score from './Score'

export default function ScoreBoard({date}) {

    const user = useSelector(state => state.user.user)
    const id = user.id
    const yesterday = moment().subtract(1, 'days').format("YYYY-MM-DD");
    
    const dispatch = useDispatch();
    useEffect(()=> dispatch(getScores(id, yesterday)), [])
    const scores = useSelector(state => state.score.scores.data)
    let dayScore = 0
    let yesterdayScore = 0

    

    const calculateScore = (calculatedScore) => {
        scores && scores.map(score => (calculatedScore += score.amount))
        return calculatedScore
    }

    return <div>
        <h2>{user.username}</h2>
         <h3>Today</h3>
            <h3>{calculateScore(dayScore)}</h3>
        <h3>Yesterday</h3>
        {/*<Score  date={yesterday}/>*/}

    </div>;
}