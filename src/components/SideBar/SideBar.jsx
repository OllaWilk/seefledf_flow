import React from 'react';

import { Link } from 'react-scroll';

import './SideBar.scss';

const SideBar = ({ openSidebar, animate }) => {
  const links = [
    'home',
    'oferta',
    'kursy',
    'opinie',
    'cennik',
    'o mnie',
    'news',
    'kontakt',
  ];

  return (
    <>
      <ul
        className={
          'toggle ' +
          (animate ? 'app__menu-sidebar open ' : 'app__menu-sidebar')
        }
      >
        {links.map((item) => (
          <li key={item}>
            <Link to={item} spy={true} offset={-140} onClick={openSidebar}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SideBar;
