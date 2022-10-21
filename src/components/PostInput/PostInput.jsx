import React, { useState } from 'react';
import './postInput.css';
import { connect, useDispatch } from 'react-redux'; 

function PostInput() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch(); 

  const onChange = () => { 
    console.log(input); 
  }

  return (
    <input
      className='generateInput'
      placeholder='job title you want e.g. accountant'
      maxLength="25"
      onChange={e => { setInput(e.target.value) }}
    ></input>
  );
}

const putReduxStateOnProps = ( reduxState) => ({ 
  reduxState
})

export default connect(putReduxStateOnProps)(PostInput) 