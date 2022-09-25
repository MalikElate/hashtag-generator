import React, { useState } from 'react';

function PostInput() {
  const [input, setCount] = useState(0);
  
  return (
    <div className="App">
        <input 
          placeholder='enter you Linkedin Post here'
          maxLength="700"
          ></input>
    </div>
  );
}

export default PostInput;