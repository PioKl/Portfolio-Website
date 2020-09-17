import React, { useState } from 'react';
import '../../style/Mobile/ProjectsMobile.scss';
import data from '../../data/data.json';
import projectImg1 from '../../images/projectImg1.png';
import projectImg2 from '../../images/projectImg2.png';
import projectImg3 from '../../images/projectImg3.png';
import projectImg4 from '../../images/projectImg4.png';
import projectImg5 from '../../images/projectImg5.png';
import projectImg6 from '../../images/projectImg6.png';
import projectImg7 from '../../images/projectImg7.png';
import projectImg8 from '../../images/projectImg8.png';
import projectImg9 from '../../images/projectImg9.png';

import { CSSTransition, TransitionGroup } from "react-transition-group";

const ProjectsMobile = () => {
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

    return (
        <div className='projectsMobile'>
            <h1 className="projectsMobile__title">Projekty</h1>
            <div className="projectsMobile__projectsContainer">
                <h2 className="projectsMobile__projectTitle">{data[count].title}</h2>
                <TransitionGroup className="projectsMobile__imgContainer">
                    <CSSTransition
                        key={count}
                        timeout={450}
                        classNames="slide"
                    >
                        <a href={data[count].link} target="_blank" rel="noopener noreferrer"><img className="projectsMobile__img" src={projectImages[count]} alt="" /></a>
                    </CSSTransition>
                </TransitionGroup>
            </div>
            <div className='projectsMobile__arrowButtons-container'>
                <i onClick={handlePreviousProject} className="projectsMobile__arrow-button fas fa-arrow-alt-circle-left"></i>
                <i onClick={handleNextProject} className="projectsMobile__arrow-button fas fa-arrow-alt-circle-right"></i>
            </div>
            <div className="projectsMobile__buttonContainer">
                <button className="projectsMobile__buttonGithub button button--github"><a href="https://github.com/PioKl" target="_blank" rel="noopener noreferrer">Profil na github</a></button>
            </div>
        </div>
    );
}

export default ProjectsMobile;