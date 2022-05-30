import React from 'react';

import { ButtonBlack } from '../../components';
import "./Header.scss";



const Header = () => {

  return (
    <header class="app__header">
      <div className="app__header-wrap ">
        <h1 >
          Każda chwila 
          jest okazją do bycia miłym dla siebie 
          i swojego ciała. 
        </h1>
        <span>Joga, masaż, ciało, umysł.</span>
        <ButtonBlack props={"skontaktuj się"}/>
      </div> 
    </header>
  )
}

export default Header