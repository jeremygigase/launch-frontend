
// NPM's
import React , { useState } from "react";
import {Link} from 'react-router-dom'
import styled from "styled-components";


// Components
import Logout from "../LoginRegister/Logout"

//Assets
import logo from '../../images/logo.png'

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    margin: 0 0.5em;

   &:hover {
        text-decoration: none;
        color: #E71D36;
    }
`;

const Nav = styled.nav`
  padding: 0 2em;
  min-height: 9vh;
  background: #041B15;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const Menu = styled.ul`
  list-style: none;
  display: flex;

  li:nth-child(2) {
    margin: 0px 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li``;


const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Line = styled.span`
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

const Overlay = styled.div`
  position: absolute;
  height: ${props => (props.open ? "91vh" : 0)};
  width: 100vw;
  background: #041B15;
  transition: height 0.4s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
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



export default function Home() {

    const [toggle, toggleNav] = useState(false);

    return <>
    <Nav>
        <StyledLink to="/home"><img src={logo} alt="launch logo loading" className="nav-logo"/> </StyledLink>
        <Menu>
          <Item>
          <StyledLink to="/tasklists">Tasklists </StyledLink>
          </Item>
          <Item>
            <StyledLink to="/calendar">Calendar </StyledLink>
          </Item>
          <Item>
            <StyledLink to="/friends">Friends </StyledLink>
          </Item>
          <Item>
            <StyledLink to="/addtask">Add Task</StyledLink>
          </Item>
          <Item>
            <StyledLink to="/profile">Profile </StyledLink>
          </Item>
          <Item>
            <Logout />
          </Item>
        </Menu>
        <NavIcon onClick={() => toggleNav(!toggle)}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </NavIcon>
      </Nav>
      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
            <Item>
                <StyledLink to="/tasklists">Tasklists </StyledLink>
            </Item>
            <Item>
                <StyledLink to="/calendar">Calendar </StyledLink>
            </Item>
            <Item>
                <StyledLink to="/friends">Friends </StyledLink>
            </Item>
            <Item>
                <StyledLink to="/addtask">Add Task</StyledLink>
            </Item>
            <Item>
                <StyledLink to="/profile">Profile </StyledLink>
            </Item>
            <Item>
                <Logout />
            </Item>
        </OverlayMenu>
      </Overlay>

    </>;
}