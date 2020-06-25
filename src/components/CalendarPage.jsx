// NPM's
import React, {useState} from "react";
import Calendar from 'react-calendar';
//import styled from 'styled-components'

// Components
import TaskList from './Task/TaskList'

//const Container = styled.div``;

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
      
    return <main className="home">

            <Calendar  onChange={onChange} value={date} />  
            <TaskList {...props}/>          
    </main>;
}