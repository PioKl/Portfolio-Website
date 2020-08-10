import React, { useState } from 'react';
import '../style/Projects.scss';
import projectImg1 from '../images/projectImg1.png';
import projectImg2 from '../images/laptop.png';
import { CSSTransition, TransitionGroup } from "react-transition-group";


const Projects = () => {
    const [count, setCount] = useState(0);
    const projectImages = [projectImg1, projectImg2];
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
                <div className="title-container">
                    <h1 className="project__title">Project 1</h1>
                    {/*                     <button className="arrow" onClick={handlePreviousProject}>back</button>
                    <button className="arrow" onClick={handleNextProject}>forward</button> */}
                    <i onClick={handleNextProject} className="arrow fas fa-arrow-alt-circle-left"></i>
                    <i onClick={handlePreviousProject} className="arrow fas fa-arrow-alt-circle-right"></i>

                </div>
                <p className="project__description">Aplikacja, której zadaniem jest wyświetlenie memów, które pobierane są poprzez API, wyszukania go (wyszukiwanie ze względu na wpisane słowo, ale także dostępna jest "drop-down lista", która zawiera interesujące użytkownika memy), a następnie możliwości utworzenia własnego mema (liczba tekstów w obrazku jest różna i zależy od tego na ile dany mem pozwala). Głównie wykorzystywane jest REST API i Routing.</p>
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
                    <img className="project__img" src={projectImages[count]} alt="" />
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
}

export default Projects;