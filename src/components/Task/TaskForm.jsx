//NPM's
import React, {useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';

//Actions 
import {addTask} from '../../actions/task'

// Styling
import {StyledInput, StyledSelect, StyledCheckbox, StyledForm} from '../StyledComponents'

// To Do returning Tasks

export default function TaskForm() {

    const date = moment().format("YYYY-MM-DD");

    const [submitted, setSubmitted] = useState(false);
    const [text, setText] = useState("")
    const [tocomplete, setTocomplete] = useState(date);
    const [weight, setWeight] = useState("Easy");
    const [send, setSend] = useState(false)
    const [public2, setPublic2] = useState(false);

    const loading = useSelector(state => state.user.login.loading);
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        setSubmitted(true);

        if (text  && tocomplete && weight) {
            dispatch(addTask(text,  tocomplete, weight, public2));
            setSubmitted(false);
            setSend(true)
            setText("")
            //setTocomplete("")
            setWeight("Easy")
        }
        
    }

    // Onca task is added a div appears after all the inputs are cleared 
    //if the user wants to create another task
    return <StyledForm onSubmit={submitHandler}>
        {send ? 
        <div>
            Want to add another task?
        </div> : ""}

                    <label htmlFor="text">Text</label>
                    <StyledInput type="text" id="text" name="text" value={text} onChange={(e)=>{
                            setText(e.target.value)
                        }}  required />
                        {submitted && !text &&
                            <div className="invalid-feedback">Text is required</div>
                        }


                    <label htmlFor="tocomplete">Date To Complete The Task</label>
                    <StyledInput type="date" id="tocomplete" name="tocomplete" value={tocomplete} onChange={(e)=>{
                            setTocomplete(e.target.value)
                        }} 
                        required />
                        {submitted && !tocomplete &&
                            <div className="invalid-feedback">Date is required</div>
                        }
 
                    <label htmlFor="weight">Weight</label>
                    <StyledSelect onChange={(e)=>{ setWeight(e.target.value)}} id="weight" name="weight" required>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </StyledSelect>
                        {submitted && !tocomplete &&
                            <div className="invalid-feedback">Weight is required</div>
                        }
                    <StyledCheckbox>
                    <label htmlFor="public2">Public</label>
                    <input type="checkbox" id="public2" name="public2" value={public2} onClick={(e)=>{
                            setPublic2(!public2)
                        }} 
                         />

                        {submitted && !public2 &&
                            <div className="invalid-feedback">Public is required</div>
                        }
                    </StyledCheckbox>
        
                <input type="submit" value="Add" className="button" disabled={loading}/>
            </StyledForm>;
}