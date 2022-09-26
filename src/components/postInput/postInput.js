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
    <textarea
      className='generateInput'
      placeholder='enter your linkedin post here'
      maxLength="700"
      onChange={e => { setInput(e.target.value) }}
    ></textarea>
  );
}

export default PostInput;