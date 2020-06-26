import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from 'react-redux';

import moment from 'moment'

import FriendsResult from './Friend/FriendsResult'

// Actions
import {getFriends} from '../actions/friend'

export default function Friends() {

    const date = moment().format("YYYY-MM-DD");

    const [search, setSearch] = useState("")
    const [submitted, setSubmitted] = useState(false);

    const user = useSelector(state => state.user.user)
    const id = user.id
    
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(getFriends(id))
        
    }, [dispatch, id])
    const friends = useSelector(state => state.friend.friends.data)
    //console.log(friends)

    const calculateScore = (scores) => {
        let totalScore = 0
        scores && scores.map(score => {
            if(score.date.slice(0,10) === date){
            (totalScore += score.amount)
        }
    })
        return totalScore
    }
    const submitHandler = (e) => {
        
        e.preventDefault();
        setSubmitted(true);
        console.log(search)

        if (search) {
            //dispatch(getFriend(search))
            setSubmitted(false);
            //setSearch("")
        }

    }    

    return <div>
        <ul>
        {
            friends && friends.map(friend => 
            <li key={friend.id}> 
                {/*<div>
                    <img />
                </div>*/}
                <div>
                    {friend.receiver.username}
                </div>
                <div>
                    {friend.receiver.created}
                </div>
                <div>
                    {calculateScore(friend.receiver.scores) } 
                </div>
                <div>
                    To do Task random, compelted & public komt hier dus neem een aaray van de taken en randomize
                </div>
            </li>
            )
        }
        </ul>
        <div>
            <h2>Searchfilter find friends with username exact?</h2>
            <form onSubmit = {submitHandler}> 
            <div>
                    <label htmlFor="search">Search Friend</label>
                    <input type="text" id="search" name="search" value={search} onChange={(e)=>{
                            setSearch(e.target.value)
                        }} 
                        required />
                        {submitted && !search &&
                            <div className="invalid-feedback">Search required</div>
                        }
                </div>
                <input type="submit" value="Search Friend" onClick = {() => submitHandler}/>
            </form>
            <div>
                <h1>Found Friend</h1>
                <p>balbla info send request???</p>
            </div>
            

        </div>

    </div>;
}