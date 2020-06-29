// NPM's
import React from "react";

// Components
import HeaderLogReg from './HeaderLogReg'
import RegisterForm from './RegisterForm'

// Styling
import {BGReg} from '../StyledComponents'

export default function Register() {

    const header = "Ready to launch your productivity?"
    return (
    <BGReg>
        <HeaderLogReg props={header} />
            <RegisterForm />
    </BGReg>
    );
}