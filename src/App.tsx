import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Resume from './Resume';
import Navbar from "./Navbar";
import Contact from "./ExpandedContact";

type ThemeMode = 'dark' | 'light';

function App() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const savedTheme = localStorage.getItem('theme-mode');
    return savedTheme === 'light' ? 'light' : 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme-mode', theme);
    document.body.classList.remove('theme-dark', 'theme-light');
    document.body.classList.add(theme === 'dark' ? 'theme-dark' : 'theme-light');
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={`app theme-${theme}`}>
      <BrowserRouter>
        <Navbar theme={theme} onToggleTheme={toggleTheme} />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
