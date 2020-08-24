import React, { useRef, useState/* , useEffect */ } from 'react';
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

    /*     const [vh, setVh] = useState(window.innerHeight);
    
        useEffect(() => {
            const updateWindowInnerHeight = () => {
                setVh(window.innerHeight * 0.01);
            };
    
            window.addEventListener("resize", updateWindowInnerHeight);
    
            return () => window.removeEventListener("resize", updateWindowInnerHeight)
    
        }, []);
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        console.log(vh) */

    const swiperRef = useRef(null);
    const [checked, setChecked] = useState(false);

    const handleChecked = () => {
        setChecked(!checked);
    }
    const params = {
        spaceBetween: 10,
        initialSlide: 3,
        pagination: {
            //el: ".swiper-pagination",
            type: "bullets",
            clickable: true
        },
    }
    const goToSlide = (number) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(number, 300, true);
        }
    };
    /*     const goToMain = () => {
            if (swiperRef.current && swiperRef.current.swiper) {
                swiperRef.current.swiper.slideTo(0, 300, false);
            }
        };
        const goToProjects = () => {
            if (swiperRef.current && swiperRef.current.swiper) {
                swiperRef.current.swiper.slideTo(1, 300, false);
            }
        }; */
    return (
        <div className="heroMobile-container">
            {/*             <div className="navigation-mobile">
                <ul>
                    <button onClick={() => { goToSlide(0) }}>Strona główna</button>
                    <button onClick={() => { goToSlide(1) }}>Projekty</button>
                    <button onClick={() => { goToSlide(2) }}>Narzędzia</button>
                    <button onClick={() => { goToSlide(3) }}>O mnie</button>
                    <button onClick={() => { goToSlide(4) }}>Kontakt</button>
                </ul>
            </div> */}

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



            <Swiper className='components-slider'{...params} ref={swiperRef} /* hashNavigation={true} */ /* slidesPerView={'auto'} */ >
                <SwiperSlide className="mainSite-mobile">
                    <div className="mainSite-mobile__hero-info">
                        <h1 className="mainSite-mobile__heading">Cześć, jestem Piotr i tworzę aplikacje w React oraz strony internetowe!</h1>
                    </div>
                    <div className="mainSite-mobile__hero-buttons">
                        <button onClick={() => { goToSlide(1) }} className="mainSite-mobile__button button">Projekty</button>
                        <button onClick={() => { goToSlide(4) }} className="mainSite-mobile__button button">Kontakt</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <AboutMeMobile />
                </SwiperSlide>
                <SwiperSlide>
                    <ToolsMobile />
                </SwiperSlide>
                <SwiperSlide>
                    <ProjectsMobile />
                </SwiperSlide>
                <SwiperSlide>
                    <ContactMobile />
                </SwiperSlide>
            </Swiper>


            {/*                 <Swiper {...params} ref={swiperRef} >
                    <div key="1" className="spr">Slide 1</div>
                    <div key="2" className="spr2">Slide 2</div>
                    <div key="3">Slide 3</div>
                    <div key="4">Slide 4</div>
                    <div key="5">Slide 5</div>
                </Swiper> */}

            {/*                 <button onClick={goPrev}>Prev</button>
                <button onClick={goNext}>Next</button> */}
        </div>
    );
}

export default HeroMobile;
