import React from 'react';
import "../style/Contact.scss";

const Contact = () => {
    return (
        <div id="contact" className="contact-container">
            <div className="contact-titleContainer">
                <h1 className="contact-titleContainer__title">Wyślij mi wiadomość</h1>
            </div>

            <form className="contact-form" action="">
                <input className="contact-form__input contact-form__input--name" type="text" placeholder="Imię" />
                <input className="contact-form__input contact-form__input--email" type="email" placeholder="E-mail" />
                <input className="contact-form__input contact-form__input--title" type="text" placeholder="Tytuł" />
                <textarea className="contact-form__input contact-form__input--message" name="" id="" placeholder="Wiadomość"/* cols="30" rows="10" */></textarea>
                <button className="button button--submit" type="submit">Wyślij</button>
            </form>
        </div>
    );
}

export default Contact;