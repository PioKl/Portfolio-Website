import React from 'react';
import "../style/Contact.scss";

const Contact = () => {
    return (
        <div id="contact" className="contact-container">
            <div data-aos="flip-left" className="contact-titleContainer">
                <h1 className="contact-titleContainer__title">Wyślij mi wiadomość</h1>
            </div>

            <form className="contact-form" action="">
                {/* <input className="contact-form__input contact-form__input--name" type="text" placeholder="Imię" /> */}
                <input data-aos="fade-right" className="contact-form__input contact-form__input--email" type="email" placeholder="E-mail" />
                <input data-aos="fade-left" className="contact-form__input contact-form__input--title" type="text" placeholder="Tytuł" />
                <textarea data-aos="fade-right" className="contact-form__input contact-form__input--message" name="" id="" placeholder="Wiadomość"/* cols="30" rows="10" */></textarea>
                <button data-aos="fade-left" className="button button--submit" type="submit">Wyślij</button>
            </form>
        </div>
    );
}

export default Contact;