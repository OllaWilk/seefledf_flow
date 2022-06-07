import React from 'react';
import { Headlines } from '../../components';
import './Contact.scss';

const Contact = () => {
  return (
    <section>
      <Headlines props={"Kontakt"} />
      <div className="app__contact">
        <div className="app__contact-form">
          <form >
            <input type="text" name="user_name" placeholder="Imię i nazwisko" minlength="2" maxlength="40" title="Imie" required />
            <input type="email" name="user_email" placeholder="E-mail" title="Email" required />
            <input type="text" name="user_subject" placeholder="Temat" minlength="2" title="Temat" required />
            <textarea placeholder="Wiadomość" name="user_message"></textarea>
            <a href="#" class="btn btn_one">wyśłij</a>
          </form>
        </div>
        <div className="app__contact-adres">
         <h3>Joga & Masaż <br /> Ciała & Umysłu </h3>
          <p>zadzwoń</p>
          <p>Napisz</p>
          <p>Przyjedź</p>

          <div className="adres">
            ul. Lwowska 108
            53-439 Wrocław
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact