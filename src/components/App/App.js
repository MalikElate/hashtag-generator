import './App.css';
import React from 'react';
import PostInput from '../postInput/postInput';
import GenerateButton from '../GenerateButton/GenerateButton'; 

function App() {
  return (
    <div className="App">
      <PostInput/>
      <GenerateButton/>
    </div>
  );
}

export default App;
