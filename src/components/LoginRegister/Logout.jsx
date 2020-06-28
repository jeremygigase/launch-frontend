// NPM's
import React from 'react';
import {useDispatch} from "react-redux";
import styled from "styled-components";
import {Link} from 'react-router-dom'

// Actions
import {userLogout} from '../../actions/user'

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    margin-left: 0.5em;

    &:hover {
        text-decoration: underline;
        color: #E71D36;
    }
`;

export default function Logout(){
    const dispatch = useDispatch();

    const logoutHandler = (e) => {
        e.preventDefault();
        dispatch(userLogout());
    }

    return (
        <>
            <StyledLink to="/" onClick={logoutHandler}>Log out</StyledLink>
        </>
    )
}