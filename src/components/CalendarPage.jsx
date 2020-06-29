// NPM's
import React, {useState} from "react";

// Components
import TaskList from './Task/TaskList'

// Styling
import {Main, Column1, Column2, StyledCalendar, Title, Request, StatusTitle} from './StyledComponents'

export default function CalendarPage() {

    const [date, setDate] = useState(new Date())
    const [click, setClick] = useState(false)
    const [status, setStatus] = useState("complete")
    const [buttonStatus, setButtonStatus] = useState("Incomplete")

    // Changes JS Date object to date used in database
    const formatDate = date => {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }

    //Send 2 things through as props
    let props = {
        date: formatDate(date),
        status: status
        }


    const clickHandler = () => {
        setClick(!click)
        if(click === true){
            setStatus("complete")
            setButtonStatus("Incomplete")
        } else {
            setStatus("incomplete")
            setButtonStatus("Complete")
        }
    }

    const onChange = date => {
        setDate(date);
      };
      
    return <Main>
        <Column1>
            <Title>Calendar</Title>
            <StyledCalendar  onChange={onChange} value={date} />  
            <Request type="button" value={buttonStatus} onClick={clickHandler} />
        </Column1>
        <Column2>
            <StatusTitle>{status.charAt(0).toUpperCase() + status.slice(1)}</StatusTitle>
            <TaskList {...props}/> 
        </Column2>              
    </Main>;
}