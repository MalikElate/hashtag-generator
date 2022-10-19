import React from 'react';
import { connect } from 'react-redux'; 
import './post.css';
import personImage from './person.png';
import footerImage from './footer.png';

function Post() {
    return (
            <div className='post-div'>
                <img src={personImage} alt="horse" className="post-person-img" />
                <p className='post-p'>using the right LinkedIn hashtags helps you get views. But it can also help you build connections</p>
                <img src={footerImage} alt="horse" className="post-person-img" />
            </div>
    );
}
const putReduxStateOnProps = ( reduxState) => ({ 
    reduxState
  })
  
export default connect(putReduxStateOnProps)(Post) 