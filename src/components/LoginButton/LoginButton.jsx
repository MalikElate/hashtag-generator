import React from 'react';
import { connect } from 'react-redux'; 
import './LoginButton.css';

function LoginButton() {
    
    const handleInput = (e) => {
        e.preventDefault();
        console.log("hello world") 
    }

    return (
            <button
                className='login-button'
                onClick={handleInput}> Generate My Hashtags
            </button>
    );
}   
const putReduxStateOnProps = ( reduxState) => ({ 
    reduxState
  })
  
export default connect(putReduxStateOnProps)(LoginButton) 