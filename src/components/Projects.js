import React, { useState } from 'react';
import '../style/Projects.scss';
import data from '../data/data.json';
import projectImg1 from '../images/projectImg1.png';
import projectImg2 from '../images/projectImg2.png';
import projectImg3 from '../images/projectImg3.png';
import projectImg4 from '../images/projectImg4.png';
import projectImg5 from '../images/projectImg5.png';
import projectImg6 from '../images/projectImg6.png';
import projectImg7 from '../images/projectImg7.png';
import projectImg8 from '../images/projectImg8.png';
import projectImg9 from '../images/projectImg9.png';

import { CSSTransition, TransitionGroup } from "react-transition-group";


const Projects = () => {
    const [count, setCount] = useState(0);

    const projectImages = [projectImg1, projectImg2, projectImg3, projectImg4, projectImg5, projectImg6, projectImg7, projectImg8, projectImg9];

    const handlePreviousProject = () => {
        setCount(count - 1);
        if (count <= 0) {
            setCount(projectImages.length - 1);
        }
    }
    const handleNextProject = () => {
        setCount(count + 1);
        if (count >= projectImages.length - 1) {
            setCount(0)
        }
    }

    /*     console.log(count)
        console.log(projectImages.length - 1) */
    return (
        <div id="projects" className="projects-container">
            <div className="project">
                <div className="project__title-container">
                    <h1 className="project__title">{data[count].title}</h1>
                    {/* <h1 className="project__title">{projectTitle[count]}</h1> */}
                    {/*                     <button className="arrow" onClick={handlePreviousProject}>back</button>
                    <button className="arrow" onClick={handleNextProject}>forward</button> */}
                    <div className='project__buttons-container'>
                        <i onClick={handlePreviousProject} className="project__arrow-button fas fa-arrow-alt-circle-left"></i>
                        <i onClick={handleNextProject} className="project__arrow-button fas fa-arrow-alt-circle-right"></i>
                    </div>
                </div>
                <div className='spr'>
                    <p className="project__description">{data[count].description}</p>
                    {/* <p className="project__description">Aplikacja, której zadaniem jest wyświetlenie memów, które pobierane są poprzez API, wyszukania go (wyszukiwanie ze względu na wpisane słowo, ale także dostępna jest "drop-down lista", która zawiera interesujące użytkownika memy), a następnie możliwości utworzenia własnego mema (liczba tekstów w obrazku jest różna i zależy od tego na ile dany mem pozwala). Głównie wykorzystywane jest REST API i Routing.</p> */}
                </div>
            </div>
            {/*             <div className="project-imgContainer">
                <img className="project__img" src={projectImages[count]} alt="" />
            </div> */}
            <TransitionGroup className="project-imgContainer">
                <CSSTransition
                    key={count}
                    timeout={450}
                    classNames="slide"
                >
                    <a href={data[count].link} target="_blank" rel="noopener noreferrer"><img className="project__img" src={projectImages[count]} alt="" /></a>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
}

export default Projects;