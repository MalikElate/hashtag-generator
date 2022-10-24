import React from 'react';
import { connect, useSelector } from 'react-redux';
import './hashtags.css';

import { MdOutlineContentCopy } from 'react-icons/md';
function Question() {
  return(
    <h3> Lets go for a <MdOutlineContentCopy />? </h3>
  ) 
}

function Hashtags() {
  const hashtags = useSelector((state) => state.hashtags);
  return (
    <section>
      {hashtags ?
        hashtags.slice(0, 5).map((hashtag, i) =>
          <p 
            className='hashtag-p' key={i}
            onClick={() => {navigator.clipboard.writeText(hashtag)}}
          >
            #{hashtag} <MdOutlineContentCopy />
          </p>
        )
        : console.log("hello from hashtags.jsx hashtags ? map or this")}
    </section>

  );
}
const putReduxStateOnProps = (reduxState) => ({
  reduxState
})

export default connect(putReduxStateOnProps)(Hashtags) 