import React from 'react';
import "../style/AboutMe.scss";
import CV from '../documents/CV.pdf';

const AboutMe = () => {
    return (
        <div id="aboutMe" className="aboutMe-container">
            <div data-aos="fade-right" className="aboutMe">
                <h1 className="aboutMe__title">O mnie</h1>
                <p className="aboutMe__description">Cześć, jestem Piotr i chciałbym zostać frontend developerem. Tworzę przede wszystkim aplikacje wykorzystując Reacta, w którym stale staram się doskonalić. Pracując w nim i tworząc aplikacje wykorzystuję Hooki, Context API, RESTFUL API, React Router, a także Reduxa. Używam również różne zewnętrzne biblioteki w celu ułatwienia pracy, w zależności od problemu, np. axios. Wiedzę dotyczącą HTML, CSS, JavaScriptu, czy Reacta czerpię głównie z kursów i przeróżnych kanałów na YouTube (np. kanał Kevina Powella, czy The Net Ninja). Umiejętności szlifuję wykonując różne projekty na frontendmentor, a także wymyślam je sobie samemu, w celu nauczenia się czegoś ciekawego. Pragnę także rozszerzyć swoją wiedzą dotyczącą programów Adobe (Adobe Xd i Photoshop). Ukończyłem informatykę (inżynieria systemów informatycznych) na Uniwersytecie Warmińsko-Mazurskim w Olsztynie (inżynier). Interesuję się grami komputerowymi od kiedy dostałem starego dobrego Pegasusa, ale także nowymi technologiami i historią, lubię także posłuchać muzyki filmowej. </p>
            </div>
            <div data-aos="fade-up" className="cv">
                <a href={CV} target="_blank" rel="noopener noreferrer"><button className="button button--cv">Moje CV</button></a>
            </div>
        </div>
    );
}

export default AboutMe;