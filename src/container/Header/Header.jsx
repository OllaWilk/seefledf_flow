import React from 'react';

import { ButtonBlack } from '../../components';
import "./Header.scss";



const Header = () => {
  

  return (
    <header class="app__header">
      <div className="app__header-wrap ">
        <h1 >
          dobrostan, równowaga, wzmocnienie
          naturalnie, holistycznie, transpersonalnie
          tradycyjnie i na miarę naszych czasów.
        </h1>
        <span>Joga, masaż, ciało, umysł.</span>
        <ButtonBlack props={"skontaktuj się"}/>
      </div> 
    </header>
  )
}

export default Header