// NPM's
import React, {useState} from "react";
import Calendar from 'react-calendar';
import styled from 'styled-components'

// Components
import TaskList from './Task/TaskList'

const Main = styled.main`
color:black;
margin: 0 auto;
width: 75%;
text-align: center;
display: grid;
grid-template-columns: auto auto;
grid-template-rows: auto;
text-align: center;
@media (max-width: 768px) {
    grid-template-columns: auto;
  }`;

const Column1= styled.div`
grid-column: 1;`;

const Column2= styled.div`
grid-column: 2;
@media (max-width: 768px) {
    grid-column: 1;
  }`;


const Tasks = styled.div`
color: black;
margin: 0 auto;
min-width: 20em;`;

const StyledCalendar = styled(Calendar)`
color:black;
margin: 1em auto;
max-width: 25em;
button {
    background: white;
    color: black;
    height: 3em;
    border: none;
    &:hover {
        background: #E71D36;
        color: white;
      }
    &:active {
        background: #E71D36;
        color: white;
      }
  } 
    div {
        background: #E71D36;
        color: white;
        margin: 0.1em 0;

  }
  `;

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
            <StyledCalendar  onChange={onChange} value={date} />  
        </Column1>
        <Column2>
            <TaskList {...props}/> 
        </Column2>              
    </Main>;
}