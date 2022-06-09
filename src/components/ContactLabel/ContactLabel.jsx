import React from 'react';

import './ContactLabel.scss';

const ContactLabel = ({title, ikon, text, zipCode }) => {

  const chooseHref = () => {

    if(title === "Zadzwoń") {
      return "tel:739978899"
    }
    else if (title === "Napisz") {
      return "mailto:namshejeshe@gmail.com"
    }
    else {
      return "https://goo.gl/maps/cGQQR91P8e9ojNz88"
    }
  }

  return (
    
    <a className='contact-wrapper' href={ chooseHref()}>
      <p>{title}:</p>
      <div className="wrapper-icon">
        {ikon}
        <h3>
          {text} <br />
          {zipCode}
        </h3> 
      </div>
    </a>
  )
}

export default ContactLabel;

