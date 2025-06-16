import React from 'react';

import './App.css';

import Header from './components/sections/Header/Header';
import About from './components/sections/About/About';
import Skills from './components/sections/Skills/Skills';
import Experience from './components/sections/Experience/Experience';

function App() {
  
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Experience />
    </div>
  );
}

export default App;
