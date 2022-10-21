import '../App/App.css';
import React from 'react';
import LoginButton from '../LoginButton/LoginButton'; 
import PostInput from '../PostInput/PostInput'; 
import About from '../About/About'; 
import Post from '../Post/Post'; 
import Hashtags from '../Hashtags/Hashtags'; 
import './landing.css'

function Landing() {
  return (
    <>
      <Post/>
      <div className="generate-form">
        <PostInput/>
        <LoginButton/>
      </div>
      <Hashtags/>
      <About/>
    </>
  );
}

export default Landing;
