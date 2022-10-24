import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux'; 
import './hashtagForm.css';
import axios from 'axios'; 


function HashtagForm() {

    const [input, setInput] = useState("");
    const dispatch = useDispatch(); 
    
    const options = {
    method: 'GET',
    url: 'https://hashtagy-generate-hashtags.p.rapidapi.com/v1/comprehensive/tags',
    params: {keyword: input},
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_HASHTAG_API_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_HASHTAG_API_URL
        }
    };

    const handleInput = (e) => {
        e.preventDefault();

        axios.request(options).then(function (response) {
            console.log(response.data.data.best_30_hashtags.hashtags);
            dispatch({ type: 'SET_HASHTAGS', payload: response.data.data.best_30_hashtags.hashtags }); 
        }).catch(function (error) {
            console.error(error);
        });
        console.log("hello from handle input")
    }
    return ( 
        <div className="generate-form">
            <input
                className='generateInput'
                placeholder='job title or industry'
                // maxLength="25"
                value = {input}
                onChange={ (e) => setInput(e.target.value) }
            ></input>
            <button
                type="button" 
                className='login-button'
                onClick={handleInput}> Generate My Hashtags
            </button>
        </div>
        
    );
}   
const putReduxStateOnProps = ( reduxState) => ({ 
    reduxState
  })
  
export default connect(putReduxStateOnProps)(HashtagForm) 

