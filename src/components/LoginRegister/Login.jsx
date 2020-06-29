//NPM's
import React from "react";

//Components
import HeaderLogReg from './HeaderLogReg'
import LoginForm from './LoginForm'

// Styling
import {BGLog} from '../StyledComponents'

export default function Login() {
    const header = "Launch your productivity!"

    return (
    <BGLog>
        <HeaderLogReg props={header}/>
            <LoginForm />
    </BGLog>);
}