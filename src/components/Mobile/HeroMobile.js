import React, { useRef, useState } from 'react';
import '../../style/Mobile/HeroMobile.scss';
import AboutMeMobile from './AboutMeMobile';
import ToolsMobile from './ToolsMobile';
import ContactMobile from './ContactMobile';
import ProjectsMobile from './ProjectsMobile';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const HeroMobile = () => {

    const swiperRef = useRef(null);
    const [checked, setChecked] = useState(false);

    const handleChecked = () => {
        setChecked(!checked);
    }
    const params = {
        spaceBetween: 10,
        initialSlide: 0,
        pagination: {
            type: "bullets",
            clickable: true
        },
    }
    const goToSlide = (number) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(number, 300, true);
        }
    };

    return (
        <div className="heroMobile-container">
            <div className="navigationMobile">
                <input onChange={handleChecked} type="checkbox" checked={checked} className="navigationMobile__checkbox" id="navi-toggle" />

                <label htmlFor="navi-toggle" className="navigationMobile__button">
                    <span className="navigationMobile__icon">&nbsp;</span>
                </label>

                <div className="navigationMobile__background">&nbsp;</div>

                <nav className="navigationMobile__nav">
                    <ul className="navigationMobile__list">
                        <li className="navigationMobile__item">
                            <button onClick={() => { goToSlide(0); handleChecked() }} className="navigationMobile__link">Strona główna</button>
                        </li>
                        <li className="navigationMobile__item">
                            <button onClick={() => { goToSlide(1); handleChecked() }} className="navigationMobile__link">Projekty</button>
                        </li>
                        <li className="navigationMobile__item">
                            <button onClick={() => { goToSlide(2); handleChecked() }} className="navigationMobile__link">Narzędzia</button>
                        </li>
                        <li className="navigationMobile__item">
                            <button onClick={() => { goToSlide(3); handleChecked() }} className="navigationMobile__link">O mnie</button>
                        </li>
                        <li className="navigationMobile__item">
                            <button onClick={() => { goToSlide(4); handleChecked() }} className="navigationMobile__link">Kontakt</button>
                        </li>
                    </ul>
                </nav>
            </div>



            <Swiper className='components-slider'{...params} ref={swiperRef}>
                <SwiperSlide className="mainSite-mobile">
                    <div className="mainSite-mobile__hero-info">
                        <h1 className="mainSite-mobile__primary-title">Cześć, jestem Piotr i tworzę aplikacje w React oraz strony internetowe!</h1>
                    </div>
                    <div className="mainSite-mobile__hero-buttons">
                        <button onClick={() => { goToSlide(1) }} className="mainSite-mobile__button button">Projekty</button>
                        <button onClick={() => { goToSlide(4) }} className="mainSite-mobile__button button">Kontakt</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <ProjectsMobile />
                </SwiperSlide>
                <SwiperSlide>
                    <ToolsMobile />
                </SwiperSlide>
                <SwiperSlide>
                    <AboutMeMobile />
                </SwiperSlide>
                <SwiperSlide>
                    <ContactMobile />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default HeroMobile;
