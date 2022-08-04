import React from 'react';

import { FaFacebook } from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {
  const facebook =
    'https://www.facebook.com/Joga-Qi-Gong-Tajski-Masa%C5%BC-Jivaka-244869702533238/?ref=page_internal&_rdr';

  return (
    <footer className="footer">
      <p>Anna Gidzińska</p>
      <a href={facebook} className="socialmedia-wrap">
        <p>Facebook</p>
        <FaFacebook />
      </a>
    </footer>
  );
};

export default Footer;
