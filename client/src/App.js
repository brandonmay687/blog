import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Post from './Components/Post';
import Posts from './Components/Posts';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        
      </Router>
    </div>
  );
}

export default App;
