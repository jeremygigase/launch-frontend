// NPM's
import moment from 'moment';


// Calculates score on a date for different friend components
export default function calculateScore(scores){
    const date = moment().format("YYYY-MM-DD");

    let totalScore = 0
    scores && scores
    .filter(score => score.date.slice(0,10) === date)
    .map(score => totalScore += score.amount)

    return totalScore
}
