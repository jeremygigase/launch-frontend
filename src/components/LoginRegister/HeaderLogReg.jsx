//NPM's
import React from "react";

//Assets
import logo from '../../images/logo_load.gif'

export default function HeaderLogReg({props}) {

    return (
        <>
    <header className="App-header">
        <img src={logo} alt="launch logo loading" className="App-logo"/>
        <h1>{props}</h1>
    </header>
    </>);
}