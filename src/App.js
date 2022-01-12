import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import SinglePost from './components/SinglePost';
import Post from './components/Post';
import Project from './components/Project';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
     <Router>
       <Navbar />
       <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/singlepost" element={<SinglePost />} />
       <Route path="/post" element={<Post />} />
       <Route path="/project" element={<Project />} />
       </Routes>
     </Router>
    </div>
  );
}

export default App;
