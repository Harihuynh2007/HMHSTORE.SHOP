import React from 'react';

import './App.css';

import Header from './components/sections/Header/Header';
import About from './components/sections/About/About';
import Skills from './components/sections/Skills/Skills';
import Projects from './components/sections/Project/Projects';

function App() {
  
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Projects/>
    </div>
  );
}

export default App;
