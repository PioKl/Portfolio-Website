import React from 'react';
import '../../style/Mobile/AboutMeMobile.scss';
import CV from '../../documents/CV.pdf';

const AboutMeMobile = () => {
    return (
        <div className="aboutMeMobile">
            <h1 className="aboutMeMobile__title"> O mnie</h1>
            <p className="aboutMeMobile__description">Cześć, jestem Piotr i chciałbym zostać frontend developerem. Tworzę przede wszystkim aplikacje wykorzystując Reacta. Wykorzystuję Hooki, Context API, RESTFUL API, React Router, a także Reduxa. Używam również różne zewnętrzne biblioteki w celu ułatwienia pracy. Wiedzę dotyczącą HTML, CSS, JavaScriptu, czy Reacta czerpię głównie z kursów i przeróżnych kanałów na YouTube (np. kanał Kevina Powella, czy The Net Ninja). Umiejętności szlifuję wykonując różne projekty na frontendmentor, a także wymyślam je sobie samemu, w celu nauczenia się czegoś ciekawego. Pragnę także rozszerzyć swoją wiedzą dotyczącą programów Adobe (Adobe Xd i Photoshop). Ukończyłem informatykę (inżynieria systemów informatycznych) na Uniwersytecie Warmińsko-Mazurskim w Olsztynie (inżynier).</p>
            <div className='aboutMeMobile__buttonContainer'>
                <a href={CV} target="_blank" rel="noopener noreferrer"><button className="button button--cvMobile">Moje CV</button></a>
            </div>
        </div>
    );
}

export default AboutMeMobile;