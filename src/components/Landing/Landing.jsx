import '../App/App.css';
import React from 'react';
import LoginButton from '../LoginButton/LoginButton'; 
import About from '../About/About'; 

function Landing() {
  return (
    <>
      <About/>
      <LoginButton/>
      <About/>
      <About/>
    </>
  );
}

export default Landing;
