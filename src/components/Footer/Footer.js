import React, {useState} from "react";
import { HashLink } from "react-router-hash-link";
import {useLocation} from "react-router-dom";
import useInput from '../../hooks/useInput'
import ContactItem from "./ContactItem/ContactItem";


import contacts from "../../data/contacts";
import phone from './icons/contact-us/phone.svg';
import location from './icons/contact-us/location.svg';
import skype from './icons/contact-us/skype.svg';
import email from './icons/contact-us/email.svg'
import FooterTitle from "./FooterTitle";
import SubscribeItem from "./SubscribeItems/SubscribeItem";
import PopUp from "../PopUp/PopUp";
import Logo from "../Logo/Logo";

import goUp from "./icons/go-up.svg";
import '../PopUp/PopUp.css'


function Footer(){
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sent, setSent] =useState(null);
  const { pathname } = useLocation();

  const regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  const isEmail = (value) => regex.test(value);

  const {
    value: emailValue,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const submitHandler = async (evt) =>{
    evt.preventDefault();

    if(!regex.test(emailValue)) {
      emailBlurHandler();
      return;
    }

    try {
      setError(null);
      setLoading(true);

      const response = await fetch(process.env.REACT_APP_SUBSCRIPTION_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(emailValue),
      });

      if(!response.ok) {
        throw new Error('Что-то пошло не так. Попробуйте еще раз');
      } else {
        resetEmail();
        setSent(true);
      }
    } catch (err) {
      setSent(false);
      setError(err.message);
    } finally {
      setLoading(false)
    }
  };




  const contactUs = (
    <section id="contacts" className="Footer__contacts">
      <FooterTitle text="Свяжитесь с нами"/>
      <ul className="Footer__contacts__items">
        <ContactItem icon={phone} alt="телефон">
          <a href={`tel:${contacts.phone}`}>{contacts.phoneDisplay}</a>
        </ContactItem>
        <ContactItem icon={email} alt="эл.почта">
          <a href={`mailto:${contacts.mail}`}>{contacts.mail}</a>
        </ContactItem>
        <ContactItem icon={skype} alt="скайп">
          <a href={`skype:${contacts.skype}`}>{contacts.skype}</a>
        </ContactItem>
        <ContactItem icon={location} alt='адрес'>
          <div>
            {contacts.city}<br />
            {contacts.address} <br/>
            {contacts.office}
          </div>

        </ContactItem>
      </ul>
    </section>
  );

  const subscription = (
    <section className="Footer__subscribe">
      <h3 className="Footer__contacts__title">Подписка</h3>
      <h4 className="Footer__subscribe__title">Будьте в курсе событий</h4>

      <div className="subscribe__form">
        <input className="Footer__form"
               type="email"
               placeholder="e-mail"
               value={emailValue}
               onChange={emailChangeHandler}
               onBlur={emailBlurHandler}
        />
        <button className="Footer__subscribe__btn"
                onClick={submitHandler}
                type="submit"
        >
          Отправить
        </button>
      </div>
      {loading && <div className="footer__form__loading">Идет загрузка</div>}
      {emailHasError && (<div className='error'>Введите корректный email</div>
      )}
    </section>
  );

  const subscribe = (
    <section className="Footer__subscription">
      <h3 className="Footer__contacts__title">Подписывайтесь на нас</h3>
      <SubscribeItem />
    </section>
  );

  const bottom =(
    <div className="Footer__bottom">
      <Logo/>
      <HashLink smooth to={`${pathname}#Layout_navigation`}>
        <img
          className="bottom_nav"
          src={goUp}
          alt="кнопка наверх"
        />
      </HashLink>
      <div className="Footer__bottom__year">
        2022 web
      </div>
    </div>
  );

  const popupSuccess = (
    <PopUp message='Вы успешно подписались на рассылку, скоро отправим вам первое письмо:)'
           reason='info'/>
  )

  const popupFail = (
    <PopUp message="Мы не смогли оформить подписку" reason="error"/>
  );

  return(
<footer className="Footer__footer">
  {sent && popupSuccess}
  {error && popupFail}
  <div className="Footer__wrapper">
    {contactUs}


    <div className="Footer__subscribe__wrapper">
      {subscription}
      {subscribe}
    </div>
  </div>
  {bottom}
</footer>

  )
}

export default Footer;