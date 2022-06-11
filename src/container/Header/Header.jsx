import React from 'react';
import { Link } from 'react-scroll';

import "./Header.scss";



const Header = () => {
  
  return (
    <header id='home' className="app__header" >
      <div className="app__header-spaceing">
        <h1 >
          joga & masaż <br/>
           ciało & umysł
        </h1>
        <h2> Dobrostan, równowaga, wzmocnienie
          naturalnie, holistycznie, transpersonalnie
          tradycyjnie i na miarę naszych czasów.</h2>
        <Link to='kontakt' className='btn header-btn'>Skontaktuj się</Link>
      </div> 
    </header>
  )
}

export default Header