import React from 'react';
import "../style/Tools.scss";

const Tools = () => {
    return (
        <div id="tools" className="tools-container">
            <div data-aos="zoom-out" className="tools-titleContainer">
                <h1 className="tools-titleContainer__title">Narzędzia z których korzystam</h1>
            </div>
            <div className="tools">

                <div data-aos="fade-right" className="imagesPartOne">
                    <div title="html" className="imagesPartOne__img imagesPartOne__img--html"></div>
                    <div className="imagesPartOne__empty-0"></div>
                    <div title="javaScript" className="imagesPartOne__img imagesPartOne__img--js"></div>
                    <div className="imagesPartOne__empty-1"></div>
                    <div title="react" className="imagesPartOne__img imagesPartOne__img--react"></div>
                    <div className="imagesPartOne__empty-2"></div>
                    <div title="redux" className="imagesPartOne__img imagesPartOne__img--redux"></div>
                    <div className="imagesPartOne__empty-3"></div>
                    <div title="css" className="imagesPartOne__img imagesPartOne__img--css"></div>
                </div>

                <div data-aos="fade-left" className="imagesPartTwo">
                    <div title="github" className="imagesPartTwo__img imagesPartTwo__img--github"></div>
                    <div className="imagesPartTwo__empty-0"></div>
                    <div title="bootstrap" className="imagesPartTwo__img imagesPartTwo__img--bootstrap"></div>
                    <div className="imagesPartTwo__empty-1"></div>
                    <div title="Visual Studio Code" className="imagesPartTwo__img imagesPartTwo__img--visualStudioCode"></div>
                    <div className="imagesPartTwo__empty-2"></div>
                    <div title="git" className="imagesPartTwo__img imagesPartTwo__img--git"></div>
                    <div className="imagesPartTwo__empty-3"></div>
                    <div title="adobexD" className="imagesPartTwo__img imagesPartTwo__img--adobexD"></div>
                </div>

            </div>
        </div>
    );
}

export default Tools;