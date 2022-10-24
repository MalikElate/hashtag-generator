import '../App/App.css';
import React from 'react';
import About from '../About/About'; 
import HashtagForm from '../HashtagForm/HashtagForm'
import Post from '../Post/Post'; 
import Hashtags from '../Hashtags/Hashtags'; 
import './landing.css'

function Landing() {
  return (
    <>
      {/* <Post/> */}
      <About/>
      <HashtagForm/>
      <Hashtags/>
    </>
  );
}

export default Landing;
