import React from 'react';
import { connect } from 'react-redux'; 
import './LoginButton.css';

function GenerateButton() {
    
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
  
export default connect(putReduxStateOnProps)(GenerateButton) 