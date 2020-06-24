//NPM's
import React, {useState} from "react";
import {useDispatch, useSelector} from 'react-redux';

//Actions 
import {addTask} from '../../actions/task'


export default function TaskForm() {

    const [submitted, setSubmitted] = useState(false);
    const [text, setText] = useState("")
    const [tocomplete, setTocomplete] = useState("");
    const [weight, setWeight] = useState("Easy");
    const [send, setSend] = useState(false)
    //const [public2, setPublic2] = useState("");

    const loading = useSelector(state => state.user.login.loading);
    const dispatch = useDispatch();

    console.log(weight)

    const submitHandler = (e) => {
        e.preventDefault();
        setSubmitted(true);

        //console.log(text,  tocomplete, weight, public2)
        if (text  && tocomplete && weight) {
            dispatch(addTask(text,  tocomplete, weight));
            setSubmitted(false);
            setSend(true)
            setText("")
            setTocomplete("")
            setWeight("")
        }
        
    }

    return <div>

        <form className="login-form" onSubmit={submitHandler}>
        {send ? 
        <div>
            Want to add another task?
        </div> : ""}
                <div className="">
                    <label htmlFor="text">Text</label>
                    <input type="text" id="text" name="text" value={text} onChange={(e)=>{
                            setText(e.target.value)
                        }}  required />
                        {submitted && !text &&
                            <div className="invalid-feedback">Text is required</div>
                        }
                </div>
                <div className="">
                    <label htmlFor="tocomplete">To Complete</label>
                    <input type="date" id="tocomplete" name="tocomplete" value={tocomplete} onChange={(e)=>{
                            setTocomplete(e.target.value)
                        }} 
                        required />
                        {submitted && !tocomplete &&
                            <div className="invalid-feedback">Date is required</div>
                        }
                </div>
                <div className="">
                    <label htmlFor="weight">Weight</label>
                    <select onChange={(e)=>{ setWeight(e.target.value)}} id="weight" name="weight" required>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                        {submitted && !tocomplete &&
                            <div className="invalid-feedback">Weight is required</div>
                        }
                </div>
                {/*<div className="">
                    <label htmlFor="public2">Public</label>
                    <input type="text" id="public2" name="public2" value={public2} onChange={(e)=>{
                            setPublic2(e.target.value)
                        }} 
                        required />
                    <select id="public2" name="public2" value={public2} onChange={(e)=>{
                            setPublic2(e.target.value)
                        }} 
                        required>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                        {submitted && !public2 &&
                            <div className="invalid-feedback">Public is required</div>
                        }
                </div>*/}
                <input type="submit" value="Add" className="button" disabled={loading}/>
            </form>
    </div>;
}