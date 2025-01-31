import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Resume from './Resume';
import Navbar from "./Navbar";
import "./Navbar.css";
import Contact  from "./ExpandedContact";


function App() {
  return (
    
    <div className='main'>
       <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element = {<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path ="/resume" element = {<Resume />}/>
        
        </Routes>
      </BrowserRouter>

     
      
    </div>
  );
}

export default App;
