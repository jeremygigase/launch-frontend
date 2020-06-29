// NPM's
import React , { useState } from "react";

// Components
import Logout from "../LoginRegister/Logout"

//Assets
import logo from '../../images/logo.png'

// Styling
import {StyledLink, Nav, Menu, Item3, NavIcon, Line, Overlay, OverlayMenu} from '../StyledComponents'

export default function Home() {

    const [toggle, toggleNav] = useState(false);

    // Closes overlay menu after clicking link 
    const clickHandler = () => {
      toggleNav(!toggle)
  }

    return <>
    <Nav>
        <StyledLink to="/"><img src={logo} alt="launch logo" className="nav-logo"/> </StyledLink>
        <Menu>
          <Item3>
            <StyledLink to="/calendar">Calendar </StyledLink>
          </Item3>
          <Item3>
            <StyledLink to="/friends">Friends </StyledLink>
          </Item3>
          <Item3>
            <StyledLink to="/addtask">Add Task</StyledLink>
          </Item3>
          <Item3>
            <StyledLink to="/profile">Profile </StyledLink>
          </Item3>
          <Item3>
            <Logout />
          </Item3>
        </Menu>
        <NavIcon onClick={clickHandler}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </NavIcon>
      </Nav>
      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
            <Item3>
                <StyledLink onClick={clickHandler} to="/calendar">Calendar </StyledLink>
            </Item3>
            <Item3>
                <StyledLink onClick={clickHandler} to="/friends">Friends </StyledLink>
            </Item3>
            <Item3>
                <StyledLink onClick={clickHandler} to="/addtask">Add Task</StyledLink>
            </Item3>
            <Item3>
                <StyledLink onClick={clickHandler} to="/profile">Profile </StyledLink>
            </Item3>
            <Item3>
                <Logout />
            </Item3>
        </OverlayMenu>
      </Overlay>

    </>;
}