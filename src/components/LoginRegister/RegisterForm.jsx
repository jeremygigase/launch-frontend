// NPM's
import React, {useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom'

// Actions
import {registerUser} from '../../actions/user'

// Styling
import {RegLogForm, AddMain, StyledInput, Confirmation} from '../StyledComponents'

// To Do better error handling can create duplicate accounts(email, username), 
//backend issue with UniqueEntity & nicer confirmation div

export default function RegisterForm() {

    const dispatch = useDispatch();
    const loading = useSelector(state => state.user.login.loading);

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
        <AddMain>
        {username && password && email && firstName && lastName && birthday && submitted ?
        
            <Confirmation>
                <h1>Thank you for registering!</h1> 
                <h2>Please check your inbox to confirm your account.</h2>
            </Confirmation> 
             :        
            <RegLogForm onSubmit={submitHandler}>
                    <label htmlFor="username">Username</label>
                    <StyledInput type="text" id="username" name="username" value={username} onChange={(e)=>{
                            setUsername(e.target.value)
                        }}
                        required
                        />
                    <label htmlFor="email">Email</label>
                    <StyledInput type="email" id="email" name="email" value={email} onChange={(e)=>{
                            setEmail(e.target.value)
                        }}/>
                    <label htmlFor="firstname">First Name</label>
                    <StyledInput type="text" id="firstname" name="firstname" value={firstName} onChange={(e)=>{
                            setFirstName(e.target.value)
                        }}
                        required
                        />
                    <label htmlFor="lastname">Last Name</label>
                    <StyledInput type="Text" id="lastname" name="lastname" value={lastName} onChange={(e)=>{
                            setLastName(e.target.value)
                        }}
                        required
                        />
                    <label htmlFor="password">Password</label>
                    <StyledInput type="password" id="password" name="password" value={password} onChange={(e)=>{
                            setPassword(e.target.value)
                        }}                    
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                        title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" 
                        required />
                        {submitted && !password &&
                            <div className="invalid-feedback">Password is required</div>
                        }
                    <label htmlFor="birthday">Birthday</label>
                    <StyledInput type="date" id="birthday" name="birthday" value={birthday} onChange={(e)=>{
                            setBirthday(e.target.value)
                        }}
                        required
                        />

                <input type="submit" value="Register" className="button" disabled={loading}/>
                <Link to="/" className="link-login">Already launched?</Link>
            </RegLogForm>   
            }
        </AddMain>
        </>
    );
}