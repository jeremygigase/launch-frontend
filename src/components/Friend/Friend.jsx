// NPM's
import React, {useState} from "react";
import moment from 'moment';

// Components
import TaskResult from '../Task/TaskResult'

// Helpers
import calculateScore from '../../helpers/calculateScore'
import configJWT from '../../helpers/configJWT'

//Styling
import {Item, Description, Weight, StyledShowTasksInput} from '../StyledComponents'

// Friend Component used in Friends Page
//To Do Profile Pictures


export default function Friend({friend}) {

    const [tasks, setTasks] = useState([])
    const [clicked, setClicked] = useState(false);

    const date = moment().format("YYYY-MM-DD");

    //Gets public tasks of other users 
    const clickHandler = () => {
        setClicked(!clicked)
        configJWT
        .get(`${process.env.REACT_APP_API}/users/${friend.id}/tasks?status=complete&public=1&tocomplete=${date}`)
        .then(response => {
        console.log(response.data['hydra:member'])
        setTasks(response.data['hydra:member'])
        if(tasks.length > 0){
        }
        
        })
        .catch(error =>  console.log(error))
    }
 
    return <Item > 
            <Description>
            <div>
                {friend.username}
            </div>
            </Description>
            <Weight>
                {calculateScore(friend.scores) } 
            </Weight>
            <StyledShowTasksInput type="button" value="Show Completed Tasks" onClick={clickHandler} />
            {
                clicked && tasks && 
            <TaskResult tasks={tasks}>
                
            </TaskResult>
            }

        </Item>
}