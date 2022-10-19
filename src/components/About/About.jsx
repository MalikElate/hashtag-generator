import React from 'react';
import { connect } from 'react-redux'; 
import './about.css';

function About() {
    return (

            <ul className='about-ul'>
                <h4 className='about-ul-header'>How to use this app</h4>
                <li>Enter a the job title or industry you want your post to target for example Salesperson</li>
                <li>Generate </li>
                <li>Expert users, or users who frequent your website or use your product</li>
            </ul>
    );
}
const putReduxStateOnProps = ( reduxState) => ({ 
    reduxState
  })
  
export default connect(putReduxStateOnProps)(About) 