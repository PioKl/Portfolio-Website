import React from 'react';
import '../../style/Mobile/ToolsMobile.scss';
const ToolsMobile = () => {
    return (
        <div className="toolsMobile">
            <div className="toolsMobile__titleContainer">
                <h1 className="toolsMobile__title">Narzędzia z których korzystam</h1>
            </div>

            <div className="toolsMobile__imagesContainer">
                <div title="html" className="toolsMobile__img toolsMobile__img--html"></div>
                <div title="javaScript" className="toolsMobile__img toolsMobile__img--js"></div>
                <div title="css" className="toolsMobile__img toolsMobile__img--css"></div>
                <div title="react" className="toolsMobile__img toolsMobile__img--react"></div>
                <div title="redux" className="toolsMobile__img toolsMobile__img--redux"></div>
                <div title="github" className="toolsMobile__img toolsMobile__img--github"></div>
                <div title="bootstrap" className="toolsMobile__img toolsMobile__img--bootstrap"></div>
                <div title="Visual Studio Code" className="toolsMobile__img toolsMobile__img--visualStudioCode"></div>
                <div title="git" className="toolsMobile__img toolsMobile__img--git"></div>
                <div title="adobexD" className="toolsMobile__img toolsMobile__img--adobexD"></div>
            </div>

        </div>
    );
}

export default ToolsMobile;