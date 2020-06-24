//NPM's
import React from "react";

//Components
import HeaderLogReg from './HeaderLogReg'
import LoginForm from './LoginForm'

export default function Login() {
    const header = "Launch your productivity!"

    return (
    <div className="log-reg-container">
        <HeaderLogReg props={header}/>
            <LoginForm />
    </div>);
}