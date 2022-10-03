import './App.css';
import React from 'react';
import Home from '../Home/Home'; 
import Footer from '../Footer/Footer';
import {
  HashRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

function App() {
  return (
    <Router>
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
