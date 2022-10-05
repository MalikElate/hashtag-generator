import React from 'react';
import { connect } from 'react-redux'; 
import './about.css';

function About() {
    return (
            <ul className='about-ul'>
                <li>Expert users, or users who frequent your website or use your product</li>
                <li>Expert users, or users who frequent your website or use your product</li>
                <li>Expert users, or users who frequent your website or use your product</li>
            </ul>
    );
}
const putReduxStateOnProps = ( reduxState) => ({ 
    reduxState
  })
  
export default connect(putReduxStateOnProps)(About) 