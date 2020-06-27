// NPM's
import React, {useState} from "react";
import Calendar from 'react-calendar';
import styled from 'styled-components'

// Components
import TaskList from './Task/TaskList'

const CalendarMain = styled.main`
color:black;
margin: 0 auto;
width: 50%;`;

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

    console.log(date)
    console.log(formatDate(date))

    const onChange = date => {
        setDate(date);
      };
      
    return <CalendarMain>
        <div>
            <Calendar  className={['calendar']} onChange={onChange} value={date} />  
        </div>
        <div>
            <TaskList {...props}/> 
        </div>               
    </CalendarMain>;
}