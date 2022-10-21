import React from 'react';
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
        'X-RapidAPI-Host': process.env.REACT_APP_HASHTAG_API_URL
        }
    };
    
    const dispatch = useDispatch(); 

    const handleInput = (e) => {
        e.preventDefault();
        console.log("send request with options:", options); 

        // axios.request(options).then(function (response) {
        //     console.log(response.data.data.best_30_hashtags.hashtags);
        //     dispatch({ type: 'SET_GENERATE_INPUT', payload: response.data.data.best_30_hashtags.hashtags }); 
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

