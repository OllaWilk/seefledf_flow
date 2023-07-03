import React from 'react';
import { Link } from 'react-scroll';

import './Header.scss';

const Header = () => {
  return (
    <header id='home' className='app__header'>
      <div className='app__header-spaceing'>
        {/* <h1>
          <span> joga & masaż </span> <br />
          ciała i umysłu
        </h1> */}
        <h2>
          Dobrostan, równowaga, wzmocnienie <br />
          naturalnie i holistycznie, <br />
          tradycyjnie i na miarę naszych czasów.
        </h2>
        <Link to='kontakt' spy={true} offset={-140} className='btn header-btn'>
          Zamów
        </Link>
      </div>
    </header>
  );
};

export default Header;
