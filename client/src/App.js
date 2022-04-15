import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import About from './Components/About';
import Contact from './Components/Contact-Me';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Post from './Components/Post';
import Posts from './Components/Posts';
import NewPost from './Components/NewPost';

import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getPosts());
  }, [ dispatch ])

  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path = '/' element = { <Home /> } />
          <Route path = 'about' element = { <About /> } />
          <Route path = 'post' element = { <Post /> } />
          <Route path = 'posts' element = { <Posts /> } />
          <Route path = 'new-post' element = { <NewPost /> } />
          <Route path = 'contact' element = { <Contact /> } />
        </Routes>
    </div>
  );
}

export default App;
