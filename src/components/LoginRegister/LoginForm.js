//NPM's
import React, {useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom'

//Actions 
import {loginUser} from '../../actions/user'

//To Do add loading asset

export default function LoginForm() {
    
    const [submitted, setSubmitted] = useState(false);
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("");
    //lastlogin needs to be send

    // showError?

    const error = useSelector(state => state.user.login.error)
    console.log(error)

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        setSubmitted(true);
        console.log("click")


        if (username && password) {
            dispatch(loginUser(username, password));
        }    
    }
    
    return (
        <>
        <main className="login">
            <form className="login-form" onSubmit={submitHandler}>
                <div className="">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" value={username} onChange={(e)=>{
                            setUsername(e.target.value)
                        }}  required />
                        {submitted && !username &&
                            <div className="invalid-feedback">Username is required</div>
                        }
                </div>
                <div className="">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={password} autoComplete="on" onChange={(e)=>{
                            setPassword(e.target.value)
                        }} 
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
                        {submitted && !password &&
                            <div className="invalid-feedback">Password is required</div>
                        }
                </div>
                <input type="submit" value="Login" className="button" />
                <Link to="/register" className="link-register">Not registered yet?</Link>
                {submitted && error && error.bool === true &&
                <div>
                    {error.message}
                </div>}
                
            </form>
        </main>
    </>);
}