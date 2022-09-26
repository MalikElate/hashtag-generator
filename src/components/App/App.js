import './App.css';
import React from 'react';
import PostInput from '../postInput/postInput';
import GenerateButton from '../GenerateButton/generateButton'; 
import Header from '../Header/header'

function App() {
  return (
    <div className="App">
      <Header/>
      <PostInput/>
      <GenerateButton/>
    </div>
  );
}

export default App;
