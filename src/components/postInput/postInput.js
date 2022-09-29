import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './postInput.css';

function PostInput() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'SET_GENERATE_INPUT', payload: { generateInput: input } })
  });

  return (
    <input
      className='generateInput'
      placeholder='enter a keyword here, for example, software engineering or accounting '
      maxLength="25"
      onChange={e => { setInput(e.target.value) }}
    ></input>
  );
}

export default PostInput;