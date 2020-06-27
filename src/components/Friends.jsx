import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from 'react-redux';

import moment from 'moment'
import configJWT from '../helpers/configJWT'
//import FriendsResult from './Friend/FriendsResult'

// Actions
import {getFriends, postRequest} from '../actions/friend'
//import {checkFriends} from '../actions/check'

export default function Friends() {

    const date = moment().format("YYYY-MM-DD");

    const [search, setSearch] = useState("")
    const [submitted, setSubmitted] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [foundFriend, setFoundFriend] = useState("")

    const user = useSelector(state => state.user.user)
    const id = user.id
    
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(getFriends(id, "friend1s", "accepted"))
        //dispatch(checkFriends(id, "friend1s"))
    }, [dispatch, id])
    const friends = useSelector(state => state.friend.friends.data)
    //const checkedFriends = useSelector(state => state.check.check.data)
    //console.log(checkedFriends)

    //https://wdev.be/wdev_jeremy/eindwerk/api/users/40/friend1s?request=send

    const calculateScore = (scores) => {
        let totalScore = 0
        scores && scores
        .filter(score => score.date.slice(0,10) === date)
        .map(score => totalScore += score.amount)
    
        return totalScore
    }
    const submitHandler = (e) => {
            
            e.preventDefault();
            setSubmitted(true);
            console.log(search)
            setClicked(false)
            //dispatch(checkFriends(id, "friend1s"))

            setFoundFriend("")

            if (search) {
                //dispatch(getFriend(search))
                configJWT
                .get(`${process.env.REACT_APP_API}/users?username=${search}`)
                .then(response => {
                console.log(response.data['hydra:member'])
                setFoundFriend(response.data['hydra:member'][0])
                
            })
            .catch(error =>  console.log(error))
                setSubmitted(false);
                setSearch("")
            

        }  
    }  

    const clickHandler = () => {
        dispatch(postRequest(foundFriend.id, "send"))
        setClicked(true)
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
                <input type="submit" value="Search Friend" />
            </form>
            <div>
                <h1>Found Friend</h1>
                    {foundFriend && <div>
                        <h3>{foundFriend.username }</h3>
                        {/*checkedFriends && checkedFriends
                        .filter(friend => friend.sender.id === id)
                        .filter(friend => friend.receiver.id === foundFriend.id)
                        .length > 0 ||*/ clicked ? 
                        <div>
                            Request send
                        </div>: 
                        <input type="button" value="Send request?" onClick={clickHandler}/>}
                        </div>}
              
                    {typeof foundFriend === "undefined" &&
                            <div className="invalid-feedback">Nobody found</div>
                        }
            
            

        </div>

    </div>
    </div>;
}