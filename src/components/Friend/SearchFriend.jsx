// NPM's
import React, {useState} from "react";

// helpers
import configJWT from '../../helpers/configJWT'

// Components
import FoundFriend from './FoundFriend'

// Styling
import {SearchForm, SearchInput, Nobody, SmallTitle} from '../StyledComponents'

// Assets
import LogoLoad from "../General/LogoLoad"

export default function SearchFriend() {

    const [search, setSearch] = useState("")
    const [submitted, setSubmitted] = useState(false);
    const [foundFriend, setFoundFriend] = useState("")
    const [loading, setLoading] = useState(false)

    // After submittung sending username to find a user
    // returns user or a nobody found
    const submitHandler = (e) => {
            
            e.preventDefault();
            setSubmitted(true);
            setFoundFriend("")
            setLoading(true)

            if (search) {
                configJWT
                .get(`${process.env.REACT_APP_API}/users?username=${search}`)
                .then(response => {
                console.log(response.data['hydra:member'])
                setFoundFriend(response.data['hydra:member'][0])
            })
            .catch(error =>  console.log(error))
                setSubmitted(false);
                setSearch("")
                setLoading(false)
        }  
    }  

    return <div>
    <SearchForm onSubmit = {submitHandler}> 
            <div>
                <SmallTitle htmlFor="search">Search Friend</SmallTitle>
                <SearchInput type="text" id="search" name="search" value={search} onChange={(e)=>{
                        setSearch(e.target.value)
                        }} 
                    required />
                        {submitted && !search &&
                            <div className="invalid-feedback">Search required</div>
                        }
            </div>
            <input type="submit" value="Search Friend" />
    </SearchForm>
            <div>
            {
            loading && <LogoLoad />
            }
                
                {
                foundFriend && 
                    <div> 
                        <h3>Found a friend!</h3>
                        <FoundFriend friend={foundFriend} />
                        </div>
                }
                {
                typeof foundFriend === "undefined" &&
                    <Nobody>
                        <h3>Nobody found</h3>
                    </Nobody>
                }   
        </div>
    </div>;
}