import React, { useState } from 'react';
import '../style/Hero.scss';

const Hero = () => {
    const [mainSite, setMainSite] = useState(true);
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

    return (
        <div id="mainSite" className="hero-container">
            <div className="navigation">
                <ul className="navigation__itemsList">
                    <li onClick={handleScrollMainSite} className="navigation__item navigation__item">
                        <a href="#mainSite">Strona <span className="navigation__item--mainSite">główna</span></a>
                    </li>
                    <ul className="navigation__itemsList--middle">
                        <li onClick={handleScrollProjects} className="navigation__item navigation__item--middle">
                            <a href="#projects">Projekty</a>
                        </li>
                        <li onClick={handleScrollTools} className="navigation__item navigation__item--middle">
                            <a href="#tools">Narzędzia</a>
                        </li>
                        <li onClick={handleScrollAboutMe} className="navigation__item navigation__item--middle">
                            <a href="#aboutMe">O mnie</a>
                        </li>
                        <li onClick={handleScrollContact} className="navigation__item navigation__item--middle">
                            <a href="#contact">Kontakt</a>
                        </li>
                    </ul>
                    <li className="navigation__timeItem">18:56</li>
                </ul>
            </div>
            <div className="scroll-navigation">
                <ul className="scroll-navigation__itemsList">
                    <a href="#mainSite"><li onClick={handleScrollMainSite} className={`scroll-navigation__item scroll-navigation__item--mainSite ${mainSite && 'scroll-navigation__item--active'}`}></li></a>
                    <a href="#projects"><li onClick={handleScrollProjects} className={`scroll-navigation__item scroll-navigation__item--projects ${projects && 'scroll-navigation__item--active'}`}></li></a>
                    <a href="#tools"><li onClick={handleScrollTools} className={`scroll-navigation__item scroll-navigation__item--tools ${tools && 'scroll-navigation__item--active'}`}></li></a>
                    <a href="#aboutMe"><li onClick={handleScrollAboutMe} className={`scroll-navigation__item scroll-navigation__item--aboutMe ${aboutMe && 'scroll-navigation__item--active'}`}></li></a>
                    <a href="#contact"><li onClick={handleScrollContact} className={`scroll-navigation__item scroll-navigation__item--contact ${contact && 'scroll-navigation__item--active'}`}></li></a>
                </ul>
            </div>
            <div className="hero-info">
                <h1 className="hero-info__heading">Cześć, jestem Piotr i tworzę aplikacje w React oraz strony internetowe!</h1>
                <a href="#projects"><button onClick={handleScrollProjects} className="hero-info__button button">Sprawdź moje projekty</button></a>
            </div>


        </div>
    );
}

export default Hero;