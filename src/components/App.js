import React, { useState, useEffect } from 'react';
import '../style/App.scss';
import Hero from './Hero';
import Projects from './Projects';
import Tools from './Tools';
import AboutMe from './AboutMe';
import Contact from './Contact';

function App() {

  //Sprawdzanie innerWidth okna przeglądarki i przypisanie wartości do zmiennej
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowInnerWith = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWindowInnerWith);

    return () => window.removeEventListener("resize", updateWindowInnerWith)

  }, []);

  const isMobile = width <= 726;

  return (

    isMobile ?

      <div>
        <h1>Test</h1>
      </div>

      :

      <div className="App container">
        <Hero />
        <Projects />
        <Tools />
        <AboutMe />
        <Contact />
      </div>

  );
}

export default App;
