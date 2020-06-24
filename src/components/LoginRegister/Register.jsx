// NPM's
import React from "react";

// Components
import HeaderLogReg from './HeaderLogReg'
import RegisterForm from './RegisterForm'

export default function Register() {

    const header = "Ready to launch your productivity?"
    return (
    <div className="log-reg-container">
        <HeaderLogReg props={header} />
            <RegisterForm />
    </div>
    );
}