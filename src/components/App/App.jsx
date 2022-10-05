import './App.css';
import React from 'react';
import Landing from '../Landing/Landing'; 
import Footer from '../Footer/Footer';
import Header from '../Header/header';
import Home from '../Home/Home'
import {
  HashRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="App-Content">
        <Header/>
        <Router>
          <Routes>
            <Route
            exact
            path='/'
            element={<Landing/>}
            />
             <Route
            exact
            path='/home'
            element={<Home/>}
            />
          </Routes>
          <Footer/>
        </Router>
      </div> 
    </div> 
  );
}

export default App;
