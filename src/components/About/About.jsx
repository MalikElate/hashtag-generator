import React from 'react';
import { connect } from 'react-redux'; 
import './about.css';

function About() {
    return (
            <ol className='about-ul'>
                <h3 className='about-ul-header'>How to use boost linkedin views &#11015;&#65039;</h3>
                <li >Enter a the job title or industry you want your post to target</li>
                <li>Generate </li>
                <li>Add two or less hashtags to your post</li>
            </ol>
    );
}
const putReduxStateOnProps = ( reduxState) => ({ 
    reduxState
  })
  
export default connect(putReduxStateOnProps)(About) 