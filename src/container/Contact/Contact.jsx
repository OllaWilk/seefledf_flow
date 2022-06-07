import React from 'react';
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
      text: 'ul. Lwowska 108',
      zipCode: '53-439 Wrocław',
    }
  ]

  return (
    <section>
      <Headlines props={"Kontakt"} />
      <div className="app__contact">
        <div className="app__contact-form">
          <h3>Formularz kontaktowy:</h3>
          <form >
            <input type="text" name="user_name" placeholder="Imię i nazwisko" minlength="2" maxlength="40" title="Imie" required />
            <input type="email" name="user_email" placeholder="E-mail" title="Email" required />
            <input type="text" name="user_subject" placeholder="Temat" minlength="2" title="Temat" required />
            <textarea placeholder="Wiadomość" name="user_message"></textarea>
            <a href="#" class="btn btn_one">wyśłij</a>
          </form>
        </div>
        <div className="app__contact-items">

          { contactLabels.map((contactLabel, index) => (
            <div className="app__contact-label-item">
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