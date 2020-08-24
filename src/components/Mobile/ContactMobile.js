import React from 'react';
import '../../style/Mobile/ContactMobile.scss';
const ContactMobile = () => {
    return (
        <div className="contactMobile-container">
            <div className="contactMobile-titleContainer">
                <h1 className="contactMobile-titleContainer__title">Wyślij mi wiadomość</h1>
            </div>

            <form className="contactMobile-form" action="">
                <input className="contactMobile-form__input contactMobile-form__input--email" type="email" placeholder="E-mail" />
                <input className="contactMobile-form__input contactMobile-form__input--title" type="text" placeholder="Tytuł" />
                <textarea className="contactMobile-form__input contactMobile-form__input--message" name="" id="" placeholder="Wiadomość"></textarea>
                <button className="button buttonMobile--submit" type="submit">Wyślij</button>
            </form>
        </div>
    );
}

export default ContactMobile;