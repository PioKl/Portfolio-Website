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

    const updateWindowInnerWith = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWindowInnerWith);

    return () => window.removeEventListener("resize", updateWindowInnerWith)

  }, []);

  const isMobile = width <= 726;

  return (

    isMobile ?

      <div className="container-mobile">
        <HeroMobile />
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
