import React from 'react';
import '../style/App.scss';
import Hero from './Hero';
import Projects from './Projects';

function App() {
  return (
    <div className="App container">
      <Hero />
      <Projects />
    </div>
  );
}

export default App;
