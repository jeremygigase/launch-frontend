// NPM's
import React, {useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom'

// Actions
import {registerUser} from '../../actions/user'

//To Do add loading asset

export default function RegisterForm() {

    const dispatch = useDispatch();

    const loading = useSelector(state => state.user.login.loading);
    console.log(loading)

    const [submitted, setSubmitted] = useState(false);

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [birthday, setBirthday] = useState("");
    //created sends automatically


    const submitHandler = (e) => {
        e.preventDefault();
        setSubmitted(true);

        if (username && password && email && firstName && lastName && birthday) {
            dispatch(registerUser(username, email, firstName, lastName, password, birthday));
        }       
    }

    return (
    <>
        <main className="register">
        {username && password && email && firstName && lastName && birthday && submitted ?
            <div className="confirmation">
                <h1>Thank you for registering!</h1> 
                <h2>Please check your inbox to confirm your account.</h2>
            </div> 
            :          
            <form className="register-form" onSubmit={submitHandler}>
                <div className="">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" value={username} onChange={(e)=>{
                            setUsername(e.target.value)
                        }}
                        required
                        />
                </div>
                <div className="">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e)=>{
                            setEmail(e.target.value)
                        }}/>
                </div>
                <div className="">
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" id="firstname" name="firstname" value={firstName} onChange={(e)=>{
                            setFirstName(e.target.value)
                        }}
                        required
                        />
                </div>
                <div className="">
                    <label htmlFor="lastname">Last Name</label>
                    <input type="Text" id="lastname" name="lastname" value={lastName} onChange={(e)=>{
                            setLastName(e.target.value)
                        }}
                        required
                        />
                </div>
                <div className="">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={password} onChange={(e)=>{
                            setPassword(e.target.value)
                        }}                    
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                        title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" 
                        required />
                        {submitted && !password &&
                            <div className="invalid-feedback">Password is required</div>
                        }
                </div>
                <div className="">
                    <label htmlFor="birthday">Birthday</label>
                    <input type="date" id="birthday" name="birthday" value={birthday} onChange={(e)=>{
                            setBirthday(e.target.value)
                        }}
                        required
                        />
                </div>
                <input type="submit" value="Register" className="button" disabled={loading}/>
                <Link to="/" className="link-login">Already launched?</Link>
            </form>  
            }
        </main>
        </>
    );
}