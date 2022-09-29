import '../App/App.css';
import React from 'react';
import PostInput from '../postInput/postInput';
import GenerateButton from '../GenerateButton/generateButton'; 

function Home() {
  return (
    <div className="App">
        <div className='App-Content'>
            <PostInput/>
            <GenerateButton/>
        </div>
    </div> 
  );
}

export default Home;
