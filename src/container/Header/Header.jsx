import React from 'react';

import { ButtonBlack } from '../../components';
import "./Header.scss";



const Header = () => {
  
  return (
    <header className="app__header">
      <div className="app__header-spaceing">
        <h1 >
          joga & masaż <br/>
           ciało & umysł
        </h1>
        <h2> Dobrostan, równowaga, wzmocnienie
          naturalnie, holistycznie, transpersonalnie
          tradycyjnie i na miarę naszych czasów.</h2>
        <ButtonBlack props={"skontaktuj się"}/>
      </div> 
    </header>
  )
}

export default Header