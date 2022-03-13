import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Post from './Components/Post';
import Posts from './Components/Posts';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path = '/' element = { <Home /> } />
          <Route path = 'about' element = { <About /> } />
          <Route path = 'post' element = { <Post /> } />
          <Route path = 'posts' element = { <Posts /> } />
          <Route path = 'contact' element = { <Contact /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
