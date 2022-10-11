import React from 'react';
import { connect, useDispatch } from 'react-redux'; 
import './LoginButton.css';
import axios from 'axios'; 

function LoginButton() {

    const redirect_uri = 'http://localhost:3000/'; 
    const client_id = '869xty0vmoa48p'; 
    const scope = 'r_liteprofile%20r_emailaddress%20w_member_social'; 
    const client_secret = "GqlayMptPqYMJniZ"; 
    const grant_type = "authorization_code"
    const signInLink =  "https://www.linkedin.com/uas/login?session_redirect=%2Foauth%2Fv2%2Flogin-success%3Fapp_id%3D205317196%26auth_type%3DAC%26flow%3D%257B%2522scope%2522%253A%2522r_emailaddress%2522%252C%2522appId%2522%253A205317196%252C%2522authorizationType%2522%253A%2522OAUTH2_AUTHORIZATION_CODE%2522%252C%2522redirectUri%2522%253A%2522http%253A%252F%252Flocalhost%253A3000%252F%2522%252C%2522currentStage%2522%253A%2522LOGIN_SUCCESS%2522%252C%2522currentSubStage%2522%253A0%252C%2522authFlowName%2522%253A%2522generic-permission-list%2522%252C%2522state%2522%253A%2522sqfqlH9tfnPa8PAtCBc4%2522%252C%2522creationTime%2522%253A1665025479903%257D&fromSignIn=1&trk=oauth&cancel_redirect=%2Foauth%2Fv2%2Flogin-cancel%3Fapp_id%3D205317196%26auth_type%3DAC%26flow%3D%257B%2522scope%2522%253A%2522r_emailaddress%2522%252C%2522appId%2522%253A205317196%252C%2522authorizationType%2522%253A%2522OAUTH2_AUTHORIZATION_CODE%2522%252C%2522redirectUri%2522%253A%2522http%253A%252F%252Flocalhost%253A3000%252F%2522%252C%2522currentStage%2522%253A%2522LOGIN_SUCCESS%2522%252C%2522currentSubStage%2522%253A0%252C%2522authFlowName%2522%253A%2522generic-permission-list%2522%252C%2522state%2522%253A%2522sqfqlH9tfnPa8PAtCBc4%2522%252C%2522creationTime%2522%253A1665025479903%257D"
    const dispatch = useDispatch(); 

    const handleInput = (e) => {
        let request = "deez nuts"; 
        e.preventDefault();
        console.log("hello world"); 
        dispatch({type: 'LINKEDIN_LOGIN', payload: {request: request}});
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

// useEffect(() => {
//     // Update the document title using the browser API
//     console.log(window.location.href); 
//     const url = new URL(window.location.href); 
//     console.log(url);
//     console.log(url.searchParams.get('code')); 
//     let code = url.searchParams.get('code');
//     if (code) { 
//         let codeString = code.toString(); 
//     }
    
//   });