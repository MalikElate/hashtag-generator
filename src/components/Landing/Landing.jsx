import '../App/App.css';
import React from 'react';
import LoginButton from '../LoginButton/LoginButton'; 
import PostInput from '../PostInput/PostInput'; 
import About from '../About/About'; 
import Post from '../Post/Post'; 
import './landing.css'

function Landing() {
  return (
    <>
      <Post/>
      <div className="generate-form">
        <PostInput/>
        <LoginButton/>
      </div>
      <About/>
    </>
  );
}

export default Landing;
