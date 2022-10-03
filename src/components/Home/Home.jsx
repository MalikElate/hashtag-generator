import '../App/App.css';
import React from 'react';
import PostInput from '../postInput/postInput';
import Results from '../Results/Results'; 
import GenerateButton from '../GenerateButton/GenerateButton'; 
import About from '../About/About'; 
import Header from './Header/header'; 

function Home() {
  return (
    <div className="App">
      <div className="App-Content">
        <Header/>
        <About/>
        <PostInput/>
        <GenerateButton/>
        <Results/>
      </div> 
    </div> 
  );
}

export default Home;
