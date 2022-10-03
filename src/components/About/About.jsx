import React from 'react';
import { connect } from 'react-redux'; 
import './about.css';

function About() {
    return (
            <p className='about-p'>
                More impressions means better results from linkedin. Use enter a freecreatortools.com 
                to increase your post impressions 
            </p>
    );
}
const putReduxStateOnProps = ( reduxState) => ({ 
    reduxState
  })
  
export default connect(putReduxStateOnProps)(About) 