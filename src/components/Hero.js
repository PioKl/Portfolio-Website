import React, { useState, useEffect } from 'react';
import Scrollspy from 'react-scrollspy';
import '../style/Hero.scss';

const Hero = () => {

    const getTime = () => {
        const currentTime = new Date();
        return ({
            hours: currentTime.getHours() < 10 ? "0" + currentTime.getHours() : currentTime.getHours(),
            minutes: currentTime.getMinutes() < 10 ? "0" + currentTime.getMinutes() : currentTime.getMinutes(),
            seconds: currentTime.getSeconds(),
        })
    }
    const [time, setTime] = useState(getTime);

    useEffect(() => {
        let timerInterval = setInterval(() => setTime(getTime(), 1000))
        return () => {
            clearTimeout(timerInterval)
        }
    }, [])

    return (
        <div id="mainSite" className="hero-container">
            <div className="navigation">
                <ul data-aos="fade-down" className="navigation__itemsList">
                    <li className="navigation__item navigation__item">
                        <a href="#mainSite">Strona <span className="navigation__item--mainSite">główna</span></a>
                    </li>
                    <ul className="navigation__itemsList--middle">
                        <li className="navigation__item navigation__item--middle">
                            <a href="#projects">Projekty</a>
                        </li>
                        <li className="navigation__item navigation__item--middle">
                            <a href="#tools">Narzędzia</a>
                        </li>
                        <li className="navigation__item navigation__item--middle">
                            <a href="#aboutMe">O mnie</a>
                        </li>
                        <li className="navigation__item navigation__item--middle">
                            <a href="#contact">Kontakt</a>
                        </li>
                    </ul>
                    <li className="navigation__timeItem">{time.hours}:{time.minutes}</li>
                </ul>
            </div>
            <div className="scroll-navigation">
                <Scrollspy className="scroll-navigation__itemsList" items={['mainSite', 'projects', 'tools', 'aboutMe', 'contact']} currentClassName="scroll-navigation__item--active" >
                    <a href="#mainSite" className={`scroll-navigation__item scroll-navigation__item--mainSite`}>mainSite</a>
                    <a href="#projects" className={`scroll-navigation__item scroll-navigation__item--projects`}>projects</a>
                    <a href="#tools" className={`scroll-navigation__item scroll-navigation__item--tools`}>tools</a>
                    <a href="#aboutMe" className={`scroll-navigation__item scroll-navigation__item--aboutMe`}>aboutMe</a>
                    <a href="#contact" className={`scroll-navigation__item scroll-navigation__item--contact`}>contact</a>
                </Scrollspy>
            </div>

            <div className="hero-info">
                <h1 data-aos="fade-right" className="hero-info__heading">Cześć, jestem Piotr i tworzę aplikacje w React oraz strony internetowe!</h1>
                <a href="#projects"><button data-aos="fade-up" data-aos-offset="30" className="hero-info__button button">Sprawdź moje projekty</button></a>
            </div>


        </div>
    );
}

export default Hero;