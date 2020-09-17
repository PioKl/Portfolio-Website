import React, { useState, useEffect } from 'react';
import '../style/App.scss';
import Hero from './Hero';
import Projects from './Projects';
import Tools from './Tools';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Aos from 'aos';
import "aos/dist/aos.css";
import HeroMobile from './Mobile/HeroMobile';

function App() {

  //Sprawdzanie innerWidth okna przeglądarki i przypisanie wartości do zmiennej
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: true,
    });

    const updateWindowInnerWidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWindowInnerWidth);

    return () => window.removeEventListener("resize", updateWindowInnerWidth)

  }, []);

  const isMobile = width <= 1199;

  return (

    isMobile ?

      <HeroMobile />

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
