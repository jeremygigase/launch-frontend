//NPM's
import React from "react";
import styled from 'styled-components'

//Assets
import logo from '../../images/logo_without_word_load.gif'

const Logo = styled.img`
    height: 10vmin;
    margin: 0 auto;
`;

export default function LogoLoad() {

    return (
        <>
            <Logo src={logo} alt="loading..." />
    </>);
}