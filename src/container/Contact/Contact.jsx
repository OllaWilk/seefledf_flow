import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { Headlines, ContactLabel } from '../../components';

import { BsFillTelephoneFill } from "react-icons/bs";
import { SiGmail, SiGooglemaps } from "react-icons/si";

import './Contact.scss';

const Contact = () => {

  const contactLabels = [
    {
      title: "Zadzwoń", 
      ikon: <BsFillTelephoneFill />,
      text: "739 978 899",
    },
    {
      title: "Napisz", 
      ikon: <SiGmail />,
      text: "namshejeshe@gmail.com",
    },
    {
      title: "Przyjedź", 
      ikon: <SiGooglemaps />,
      text: 'ul. Pereca 16/13',
      zipCode: '53-516 Wrocław',
    }
  ]

  const form = useRef();
  const [done, setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        'service_annaG',
        'template_anna_gidzinska', 
        form.current, 
        'emN60zZ4izVezIl4_'
       )
      .then((result) => {
          console.log(result.text);
          console.log("message send");
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id='kontakt'>
      <Headlines props={"Kontakt"} />
      <div className="app__contact">
        <div className="app__contact-form">
          <h3>Formularz kontaktowy:</h3>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Imię i nazwisko" minLength={2} maxLength={40} title="Imie" required />
            <input type="email" name="user_email" placeholder="E-mail" title="Email" required />
            <input type="text" name="user_subject" placeholder="Temat" minLength={2} title="Temat" required />
            <textarea placeholder="Wiadomość" name="message"></textarea>
            <button className="btn" type="submit" value="Send"  >wyślij</button>
            { done && "Wiadomość została wysłana"}
          </form>
        </div>
        <div className="app__contact-items">

          { contactLabels.map((contactLabel, index) => (
            <div className="app__contact-label-item" key={index}>
              <ContactLabel 
                title = {contactLabel.title}
                ikon = {contactLabel.ikon }
                text = {contactLabel.text}
                zipCode = {contactLabel.zipCode}
                />
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Contact