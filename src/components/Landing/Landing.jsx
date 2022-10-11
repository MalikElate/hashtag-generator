import '../App/App.css';
import React from 'react';
import LoginButton from '../LoginButton/LoginButton'; 
import About from '../About/About'; 
import Post from '../Post/Post'; 

function Landing() {
  return (
    <>
      <About/>
      <LoginButton/>
      <About/>
      <Post/>
    </>
  );
}

export default Landing;
