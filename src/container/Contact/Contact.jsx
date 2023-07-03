import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { Headlines, ContactLabel } from '../../components';

import { BsFillTelephoneFill } from 'react-icons/bs';
import { SiGmail, SiGooglemaps } from 'react-icons/si';
import { GrContact } from 'react-icons/gr';

import './Contact.scss';

const Contact = () => {
  const contactLabels = [
    {
      title: 'Zadzwoń:',
      ikon: <BsFillTelephoneFill />,
      text: '739 978 899',
    },
    {
      title: 'Whatsapp i Signal:',
      ikon: <GrContact />,
      text: '+48 739 978 899',
    },
    {
      title: 'Napisz:',
      ikon: <SiGmail />,
      text: 'namshejeshe@gmail.com',
    },
    {
      title: 'Przyjedź:',
      ikon: <SiGooglemaps />,
      text: (
        <p className='adres-style'>
          Gabinet "Między Nami" <br /> ul. Grabiszyńska 75a/6 <br /> 53-503
          Wrocław <br /> Zapraszamy w weekendy <br /> w godz. 10.00-20.00
        </p>
      ),
    },
    {
      ikon: <SiGooglemaps />,
      text: (
        <p>
          Just Flow Studio <br />
          ul. Krakowska 141-155
          <br />
          50-428 Wroclaw <br /> Zapraszamy w środy
          <br />w godz. 16.00-20.00 <br />
          oraz soboty w <br />
          godz. 10.00-11.00
        </p>
      ),
    },
  ];

  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_annaG',
        'template_anna_gidzinska',
        form.current,
        'emN60zZ4izVezIl4_'
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('message send');
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id='kontakt'>
      <Headlines props={'Kontakt'} />
      {/* <div className='reserwation-wrap'>
        <a href='https://jogaimasaz.nextvisit.pl/' className='btn reserwation'>
          umów wizytę
        </a>
      </div> */}
      <div className='app__contact'>
        <div className='app__contact-form'>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type='text'
              name='user_name'
              placeholder='Imię i nazwisko'
              minLength={2}
              maxLength={40}
              title='Imie'
              required
            />

            <input
              type='email'
              name='user_email'
              placeholder='E-mail'
              title='Email'
              required
            />
            <input
              type='text'
              name='user_subject'
              placeholder='Temat'
              minLength={2}
              title='Temat'
              required
            />
            <textarea placeholder='Wiadomość' name='message'></textarea>
            <button className='btn' type='submit' value='Send'>
              wyślij
            </button>
            {done && 'Wiadomość została wysłana'}
          </form>
        </div>
        <div className='app__contact-items'>
          {contactLabels.map((contactLabel, index) => (
            <div className='app__contact-label-item' key={index}>
              <br />
              <ContactLabel
                title={contactLabel.title}
                ikon={contactLabel.ikon}
                name={contactLabel.name}
                text={contactLabel.text}
                zipCode={contactLabel.zipCode}
              />
              <br />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
