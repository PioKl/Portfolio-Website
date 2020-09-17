import React, { useState, useEffect } from 'react';
import "../style/Contact.scss";
import emailjs from 'emailjs-com';

const Contact = () => {
    //parametry potrzebne do emailjs
    const params = {
        serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
        templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        userId: process.env.REACT_APP_EMAILJS_USER_ID,
    }
    const [notification, setNotification] = useState(false);

    const handleSendMessage = (e) => {
        e.preventDefault();
        setNotification(true);

        emailjs.sendForm(`${params.serviceId}`, `${params.templateId}`, e.target, `${params.userId}`)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset(); //wyczyszczenie formularza
    }

    useEffect(() => {
        const messageStateDelay = setTimeout(() => {
            setNotification(false);
        }, 4000);
        return () => clearTimeout(messageStateDelay);
    }, [notification]); //po zmianie w tej wartosci to uruchom

    return (
        <div id="contact" className="contact-container">
            <div data-aos="flip-left" className="contact-titleContainer">
                <h1 className="contact-titleContainer__title">Wyślij mi wiadomość</h1>
            </div>

            <form className="contact-form" action="" onSubmit={handleSendMessage}>
                <input data-aos="fade-right" className="contact-form__input contact-form__input--email" type="email" name="email" placeholder="E-mail" required />
                <input data-aos="fade-left" className="contact-form__input contact-form__input--title" type="text" placeholder="Tytuł" name="title" required />
                <textarea data-aos="fade-right" className="contact-form__input contact-form__input--message" name="message" id="" placeholder="Wiadomość" required></textarea>
                <button data-aos="fade-left" className="button button--submit" type="submit">Wyślij</button>
            </form>
            {notification &&
                <div className='contact-notificationContainer'>
                    <span className='contact-notification'>Wiadomość wysłana</span>
                </div>
            }
        </div>
    );
}

export default Contact;