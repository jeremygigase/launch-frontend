// NPM's
import React, {useState} from "react";

// Components
import TaskList from './Task/TaskList'

// Styling
import {Main, Column1, Column2, StyledCalendar, Title} from './StyledComponents'


export default function CalendarPage() {

    const [date, setDate] = useState(new Date())

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

    let props = {
        date: formatDate(date),
        status:"incomplete"
        }


    const onChange = date => {
        setDate(date);
      };
      
    return <Main>
        <Column1>
            <Title>Calendar</Title>
            <StyledCalendar  onChange={onChange} value={date} />  
        </Column1>
        <Column2>
            <TaskList {...props}/> 
        </Column2>              
    </Main>;
}