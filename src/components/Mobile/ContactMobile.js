import React, { useState, useEffect } from 'react';
import '../../style/Mobile/ContactMobile.scss';
import emailjs from 'emailjs-com';

const ContactMobile = () => {

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
        <div className="contactMobile-container">
            <div className="contactMobile-titleContainer">
                <h1 className="contactMobile-titleContainer__title">Wyślij mi wiadomość</h1>
            </div>

            <form className="contactMobile-form" action="" onSubmit={handleSendMessage}>
                <input className="contactMobile-form__input contactMobile-form__input--email" name="email" type="email" placeholder="E-mail" required />
                <input className="contactMobile-form__input contactMobile-form__input--title" emial="title" type="text" placeholder="Tytuł" required />
                <textarea className="contactMobile-form__input contactMobile-form__input--message" name="message" placeholder="Wiadomość" required></textarea>
                <button className="button buttonMobile--submit" type="submit">Wyślij</button>
            </form>
            {notification &&
                <div className='contactMobile-notificationContainer'>
                    <span className='contactMobile-notification'>Wiadomość wysłana</span>
                </div>
            }
        </div>
    );
}

export default ContactMobile;