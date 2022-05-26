import React from 'react';


import './SideBar.scss';

const SideBar = ({openSidebar, animate}) => {

  return (
        <ul className={'toggle ' + (animate ? 'app__menu-sidebar open ' : 'app__menu-sidebar')} >

          {[ 'home', 'metody', 'o mnie', 'opinie', 'cennik', 'blog'].map((item) => (
          <li key={item}>
            <a href={`#${item}`} onClick={openSidebar}>
              {item}
            </a>
          </li>
        ))} 
        
        </ul>
  )
}

export default SideBar;

