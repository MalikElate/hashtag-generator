import React from 'react';
import { connect } from 'react-redux'; 
import './LoginButton.css';
import axios from 'axios'; 

function LoginButton() {

    const your_callback_url = 'http://localhost:3000/'; 
    const your_client_id = '869xty0vmoa48p'; 
    const scope = 'r_liteprofile%20r_emailaddress%20w_member_social'; 
    
    const handleInput = (e) => {
        e.preventDefault();
        console.log("hello world") 
        window.location.href = 
        `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${your_client_id}&redirect_uri=${your_callback_url}&state=foobar&scope=r_liteprofile%20r_emailaddress%20w_member_social`; 
        
   
        // fetch('https://www.linkedin.com/oauth/v2/authorization?' + new URLSearchParams({
        //         response_type: 'code',
        //         client_id: your_client_id,
        //         redirect_uri:your_callback_url,
        //         scope: scope
        //     }))
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