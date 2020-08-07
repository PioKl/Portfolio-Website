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
        <div className="hero-container">
            <div className="navigation">
                <ul className="navigation__itemsList">
                    <li className="navigation__item navigation__item">Strona <span className="navigation__item--mainSite">główna</span></li>
                    <ul className="navigation__itemsList--middle">
                        <li className="navigation__item navigation__item--middle">Projekty</li>
                        <li className="navigation__item navigation__item--middle">Narzędzia</li>
                        <li className="navigation__item navigation__item--middle">O mnie</li>
                        <li className="navigation__item navigation__item--middle">Kontakt</li>
                    </ul>
                    <li className="navigation__timeItem">18:56</li>
                </ul>
            </div>
            <div className="scroll-navigation">
                <ul className="scroll-navigation__itemsList">
                    <li onClick={handleScrollMainSite} className={`scroll-navigation__item scroll-navigation__item--mainSite ${mainSite && 'scroll-navigation__item--active'}`}></li>
                    <li onClick={handleScrollProjects} className={`scroll-navigation__item scroll-navigation__item--projects ${projects && 'scroll-navigation__item--active'}`}></li>
                    <li onClick={handleScrollTools} className={`scroll-navigation__item scroll-navigation__item--tools ${tools && 'scroll-navigation__item--active'}`}></li>
                    <li onClick={handleScrollAboutMe} className={`scroll-navigation__item scroll-navigation__item--aboutMe ${aboutMe && 'scroll-navigation__item--active'}`}></li>
                    <li onClick={handleScrollContact} className={`scroll-navigation__item scroll-navigation__item--contact ${contact && 'scroll-navigation__item--active'}`}></li>
                </ul>
            </div>



        </div>
    );
}

export default Hero;