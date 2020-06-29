import styled from "styled-components";
import Calendar from 'react-calendar';
import {NavLink} from 'react-router-dom'

/*Main*/

export const Main = styled.main`
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

export const AddMain = styled.main`
  margin: auto;
  background-color: #F5F7F8;
  padding: 0.25em;
  max-width: 50vmin;
  text-align: center;
  border-radius: 0.25em;`;

export const Column1= styled.div`
grid-column: 1;`;

export const Column2= styled.div`
grid-column: 2;
@media (max-width: 768px) {
    grid-column: 1;
  }`;

export const Title= styled.h1`
color: #136F63;
font-weight: 700;
font-size: 2em;`;

export const DateTitle= styled.h2`
color: #136F63;
font-weight: 700;
font-size: 1.5em; 
margin-left: 1em;`;

export const SmallTitle= styled.h2`
color: #136F63;
font-weight: 700;
font-size: 1.5em; `;

export const StatusTitle= styled.h2`
color: #136F63;
font-weight: 700;
font-size: 1.5em; 
margin-left: 1em;`;

/* RegisterLogin*/

export const RegLogForm = styled.form`
text-align: left;
padding: 1em;
line-height: 2.5em;
color: black;
font-size: 80%; `;

export const BGReg = styled.div`
background:#041B15;
padding-bottom: 24em; `;

export const BGLog = styled.div`
background:#041B15;
padding-bottom: 34em; `;
/* Task*/ 

export const Options = styled.div`
overflow: hidden;
border: 1px solid white;`;

export const TaskWeight = styled.div`
width: 20%;
float: left;
padding: 1em 0;
color: white;
background-color: ${props => (props.bGColor)}`;

export const Confirmation= styled.div`
    text-align: center;
    padding: 1em;
    border: 1px solid black;
    background: #F5F7F8;
    line-height: 2.5em;
    color: black;
    font-size: 80%;`;

/* AddTask*/

export const StyledInput = styled.input`
border: none;
border-bottom: 1px solid #D3D3D3;
background-color: #F5F7F8;
width: 100%;
height: 1.5em;
margin-bottom: 0.5em;
background: white;`;

export const StyledSelect = styled.select`
border: none;
border-bottom: 1px solid #D3D3D3;
background-color: #F5F7F8;
width: 100%;
height: 1.5em;
margin-bottom: 0.5em;
background: white;`;

export const StyledCheckbox = styled.div`
border: none;
background-color: #F5F7F8;
width: 100%;
background: white;`;

export const StyledForm = styled.form`
    text-align: left;
    padding: 1em;
    border: 1px solid black;
    background: white;
    line-height: 2.5em;
    color: black;
    font-size: 80%;`;

/*ScoreBoard*/

export const Circle = styled.div`
  margin: 0 auto;
  border: 4px solid #136F63;
  width: 100px;
  height: 100px;
  border-radius: 50%;`
  
export const Score = styled.h3`
  margin:auto;
  line-height:95px;
  vertical-align:middle;
  color: #136F63;`;

/*FoundFriend, FriendRequest, Friend*/

export const Item = styled.li`
width: 100%;
border: 1px solid #cadecf;
border-radius: 5px;
overflow: hidden;
font-weight: 600;
font-size: 0.9em;
box-shadow: 0.2em 0.2em #cadecf;
margin: 0.5em auto;`

export const Item2 = styled.div`
width: 80%;
border: 1px solid #cadecf;
border-radius: 5px;
overflow: hidden;
font-weight: 600;
font-size: 0.9em;
box-shadow: 0.2em 0.2em #cadecf;
margin: 0 0 1em 2em;`;

export const Description = styled.a`
padding: 1em 0;
width: 80%;
float: left;
background-color: white;`;

export const Weight = styled.div`
width: 20%;
float: left;
padding: 1em 0;
color: white;
background-color: #041B15;`;

export const Request = styled.input`
text-align: center;
background: black;
margin: 1em;
padding-top: 2px;
width: 9em;
height: 3em;
border-radius: 25px;
color: white;
&:hover {
    background: #E71D36;
  }`;

export const StyledShowTasksInput = styled.input`
  border: none;
  border-bottom: 1px solid #041B15;
  background-color: #041B15;
  color: white;
  width: 100%;
  height: 1.5em;
  margin-bottom: 0.5em;
  &:hover {
    background: #E71D36;
  }`;

/*CalendarPage*/

export const StyledCalendar = styled(Calendar)`
  color:black;
  margin: 1em auto;
  max-width: 20em;
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

/*SearchFriend*/
export const SearchForm = styled.form`
text-align: center;
line-height: 2.5em;
color: black;
width: 50%;
margin: 0 auto;`

export const SearchInput = styled.input`
border: none;
border-bottom: 1px solid #D3D3D3;
background-color: #F5F7F8;
width: 100%;
height: 1.5em;
margin-bottom: 0.5em;
background: white;`;

export const Nobody = styled.div`
width: 90%;
border: 1px solid #cadecf;
border-radius: 5px;
overflow: hidden;
font-weight: 600;
font-size: 0.9em;
box-shadow: 0.2em 0.2em #cadecf;
margin: 1em 0 1em 2em;`;


export const StyledFooter = styled.footer`
position: fixed; 
color:white;
padding: 0.5em 0;
text-align: center;
bottom: 0;
width: 100%;
height: 3rem;
background-color: #041B15;`;

/* TaskResults */

export const Results = styled.ul`
list-style: none;`;

export const StyledTaskList = styled.div`
margin-bottom: 5em;`;

/* Navigation */

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: white;
    margin: 0 0.5em;

   &:hover {
        text-decoration: none;
        color: #E71D36;
    }
    &.active {
      color: #E71D36;
      text-decoration: underline;
    }
`;

export const Nav = styled.nav`
  padding: 0 2em;
  min-height: 9vh;
  background: #041B15;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


export const Menu = styled.ul`
  list-style: none;
  display: flex;

  li:nth-child(2) {
    margin: 0px 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Item3 = styled.li``;


export const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #fff;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${props => (props.open ? "40%" : "70%")};
  }
`;

export const Overlay = styled.div`
  position: absolute;
  height: ${props => (props.open ? "91vh" : 0)};
  width: 100vw;
  background: #041B15;
  transition: height 0.4s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);

  li {
    opacity: ${props => (props.open ? 1 : 0)};
    font-size: 25px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;

  }

  li:nth-child(2) {
    margin: 50px 0px;
  }
`;