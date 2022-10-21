import React from 'react';
import { connect, useSelector } from 'react-redux';
import './hashtags.css';

function Hashtags() {
  const hashtags = useSelector((state) => state.generateInput);
  console.log(hashtags)
  return (
    <div>
      {hashtags ?
        hashtags.map((info, i) =>
          <div className='pricing-box' key={i}>
            {info}
          </div>
          
        )
        : console.log("test")}
    </div>

  );
}
const putReduxStateOnProps = (reduxState) => ({
  reduxState
})

export default connect(putReduxStateOnProps)(Hashtags) 