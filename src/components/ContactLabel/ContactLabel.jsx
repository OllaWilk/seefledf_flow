import React from 'react';

import './ContactLabel.scss';

const ContactLabel = ({ title, ikon, text, zipCode, name }) => {
  const chooseHref = () => {
    if (title === 'Zadzwoń:') {
      return 'tel:739978899';
    } else if (title === 'Napisz:') {
      return 'mailto:namshejeshe@gmail.com';
    } else if (title === 'Przyjedź:') {
      return 'https://goo.gl/maps/tkstE84Qf1rE4j7p7';
    } else {
      return 'https://g.page/domjesionow?share';
    }
  };

  return (
    <a className="contact-wrapper" href={chooseHref()}>
      <p>{title}</p>
      <div className="wrapper-icon">
        {ikon}
        <h3>
          {text}
          {zipCode}
        </h3>
      </div>
    </a>
  );
};

export default ContactLabel;
