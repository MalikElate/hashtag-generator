import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux'; 
import './LoginButton.css';
import axios from 'axios'; 


function LoginButton() {

    const options = {
    method: 'GET',
    url: 'https://hashtagy-generate-hashtags.p.rapidapi.com/v1/comprehensive/tags',
    params: {keyword: 'travel'},
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_HASHTAG_API_KEY,
        'X-RapidAPI-Host': 'hashtagy-generate-hashtags.p.rapidapi.com'
        }
    };
    
    const dispatch = useDispatch(); 

    const handleInput = (e) => {
        e.preventDefault();
        console.log("send request with options:", options); 
        dispatch({ type: 'SET_GENERATE_INPUT', payload: options }); 
        // axios.request(options).then(function (response) {
        //     console.log(response.data);
        // }).catch(function (error) {
        //     console.error(error);
        // });
    }
    return (
            <button
                type="button" 
                className='login-button'
                onClick={handleInput}> Generate My Hashtags
            </button>
    );
}   
const putReduxStateOnProps = ( reduxState) => ({ 
    reduxState
  })
  
export default connect(putReduxStateOnProps)(LoginButton) 

