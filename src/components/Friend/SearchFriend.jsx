import React, {useState} from "react";
import styled from 'styled-components'

import configJWT from '../../helpers/configJWT'
import FoundFriend from './FoundFriend'

import LogoLoad from "../General/LogoLoad"

const SearchForm = styled.form`
text-align: center;
line-height: 2.5em;
color: black;
width: 50%;
margin: 0 auto;`

const SearchInput = styled.input`
border: none;
border-bottom: 1px solid #D3D3D3;
background-color: #F5F7F8;
width: 100%;
height: 1.5em;
margin-bottom: 0.5em;
background: white;`

const Nobody = styled.div`
width: 90%;
border: 1px solid #cadecf;
border-radius: 5px;
overflow: hidden;
font-weight: 600;
font-size: 0.9em;
box-shadow: 0.2em 0.2em #cadecf;
margin: 1em 0 1em 2em;`

export default function SearchFriend() {


    const [search, setSearch] = useState("")
    const [submitted, setSubmitted] = useState(false);
    const [foundFriend, setFoundFriend] = useState("")
    const [loading, setLoading] = useState(false)

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
                <label htmlFor="search">Search Friend</label>
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