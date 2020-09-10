import React, { useState, useEffect } from 'react';
import Scrollspy from 'react-scrollspy';
import '../style/Hero.scss';

const Hero = () => {
    /*     const [mainSite, setMainSite] = useState(true);
        const [projects, setProjects] = useState(false);
        const [tools, setTools] = useState(false);
        const [aboutMe, setAboutMe] = useState(false);
        const [contact, setContact] = useState(false);
    
        const handleScrollMainSite = () => {
            setMainSite(true);
            setProjects(false);
            setTools(false);
            setAboutMe(false);
            setContact(false);
        }
        const handleScrollProjects = () => {
            setMainSite(false);
            setProjects(true);
            setTools(false);
            setAboutMe(false);
            setContact(false);
        }
        const handleScrollTools = () => {
            setMainSite(false);
            setProjects(false);
            setTools(true);
            setAboutMe(false);
            setContact(false);
        }
        const handleScrollAboutMe = () => {
            setMainSite(false);
            setProjects(false);
            setTools(false);
            setAboutMe(true);
            setContact(false);
        }
        const handleScrollContact = () => {
            setMainSite(false);
            setProjects(false);
            setTools(false);
            setAboutMe(false);
            setContact(true);
        }
     */
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
                    <li /* onClick={handleScrollMainSite} */ className="navigation__item navigation__item">
                        <a href="#mainSite">Strona <span className="navigation__item--mainSite">główna</span></a>
                    </li>
                    <ul className="navigation__itemsList--middle">
                        <li /* onClick={handleScrollProjects} */ className="navigation__item navigation__item--middle">
                            <a href="#projects">Projekty</a>
                        </li>
                        <li /* onClick={handleScrollTools} */ className="navigation__item navigation__item--middle">
                            <a href="#tools">Narzędzia</a>
                        </li>
                        <li /* onClick={handleScrollAboutMe} */ className="navigation__item navigation__item--middle">
                            <a href="#aboutMe">O mnie</a>
                        </li>
                        <li /* onClick={handleScrollContact} */ className="navigation__item navigation__item--middle">
                            <a href="#contact">Kontakt</a>
                        </li>
                    </ul>
                    <li className="navigation__timeItem">{time.hours}:{time.minutes}</li>
                </ul>
            </div>
            <div className="scroll-navigation">
                <Scrollspy className="scroll-navigation__itemsList" items={['mainSite', 'projects', 'tools', 'aboutMe', 'contact']} currentClassName="scroll-navigation__item--active" >
                    <a href="#mainSite" /* onClick={handleScrollMainSite} */ className={`scroll-navigation__item scroll-navigation__item--mainSite`}>mainSite</a>
                    <a href="#projects" /* onClick={handleScrollProjects} */ className={`scroll-navigation__item scroll-navigation__item--projects`}>projects</a>
                    <a href="#tools" /* onClick={handleScrollTools} */ className={`scroll-navigation__item scroll-navigation__item--tools`}>tools</a>
                    <a href="#aboutMe" /* onClick={handleScrollAboutMe} */ className={`scroll-navigation__item scroll-navigation__item--aboutMe`}>aboutMe</a>
                    <a href="#contact" /* onClick={handleScrollContact} */ className={`scroll-navigation__item scroll-navigation__item--contact`}>contact</a>



                    {/*                         <a href="#mainSite"><li onClick={handleScrollMainSite} className={`scroll-navigation__item scroll-navigation__item--mainSite ${mainSite && 'scroll-navigation__item--active'}`}></li></a>
                        <a href="#projects"><li onClick={handleScrollProjects} className={`scroll-navigation__item scroll-navigation__item--projects ${projects && 'scroll-navigation__item--active'}`}></li></a>
                        <a href="#tools"><li onClick={handleScrollTools} className={`scroll-navigation__item scroll-navigation__item--tools ${tools && 'scroll-navigation__item--active'}`}></li></a>
                        <a href="#aboutMe"><li onClick={handleScrollAboutMe} className={`scroll-navigation__item scroll-navigation__item--aboutMe ${aboutMe && 'scroll-navigation__item--active'}`}></li></a>
                        <a href="#contact"><li onClick={handleScrollContact} className={`scroll-navigation__item scroll-navigation__item--contact ${contact && 'scroll-navigation__item--active'}`}></li></a> */}
                </Scrollspy>
            </div>

            <div className="hero-info">
                <h1 data-aos="fade-right" className="hero-info__heading">Cześć, jestem Piotr i tworzę aplikacje w React oraz strony internetowe!</h1>
                <a href="#projects"><button /* onClick={handleScrollProjects} */ data-aos="fade-up" data-aos-offset="50" className="hero-info__button button">Sprawdź moje projekty</button></a>
            </div>


        </div>
    );
}

export default Hero;