//NPM's
import React, {useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom'

//Actions 
import {loginUser} from '../../actions/user'

// Styling
import {RegLogForm, AddMain, StyledInput} from '../StyledComponents'

// To Do better error handling

export default function LoginForm() {
    
    const [submitted, setSubmitted] = useState(false);
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("");
    //lastlogin needs to be send

    const error = useSelector(state => state.user.login.error)

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        setSubmitted(true);

        if (username && password) {
            dispatch(loginUser(username, password));
        }    
    }
    
    return (
        <>
            <AddMain>
            <RegLogForm onSubmit={submitHandler}>
                    <label htmlFor="username">Username</label>
                    <StyledInput type="text" id="username" name="username" value={username} onChange={(e)=>{
                            setUsername(e.target.value)
                        }}  required />
                        {submitted && !username &&
                            <div className="invalid-feedback">Username is required</div>
                        }
                    <label htmlFor="password">Password</label>
                    <StyledInput type="password" id="password" name="password" value={password} autoComplete="on" onChange={(e)=>{
                            setPassword(e.target.value)
                        }} 
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
                        {submitted && !password &&
                            <div className="invalid-feedback">Password is required</div>
                        }
                <input type="submit" value="Login" className="button" />
                <Link to="/register" className="link-register">Not registered yet?</Link>
                {submitted && error && error.bool === true &&
                <div>
                    {error.message}
                </div>}
            </RegLogForm>
            </AddMain>
    </>);
}