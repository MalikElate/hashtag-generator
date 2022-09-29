import './App.css';
import React from 'react';
import Home from '../Home/Home'; 
import Header from '../Header/header';
import Footer from '../Footer/Footer';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Routes,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route
         path='/'
         element={<Home/>}
        />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
