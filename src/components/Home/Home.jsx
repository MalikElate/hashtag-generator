import '../App/App.css';
import React from 'react';
import LoginButton from '../LoginButton/LoginButton'; 
import About from '../About/About'; 
import Header from './Header/header'; 

function Home() {
  return (
    <div className="App">
      <div className="App-Content">
        <Header/>
        <About/>
        <LoginButton/>
      </div> 
    </div> 
  );
}

export default Home;
