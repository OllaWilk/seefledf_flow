import React, { useState } from 'react';
import { Link } from 'react-scroll';

import { AiOutlineMenu } from 'react-icons/ai';
import { HiX } from 'react-icons/hi';

import { images } from '../../constants';
import SideBar from '../SideBar/SideBar';

import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleSidebar = (event) => {
    event.preventDefault();
    setToggle(!toggle);
  };

  return (
    <nav>
      <div className="navbar-menu">
        <Link to="home" className="app__navbar-logo">
          <img src={images.logo} alt="logo" />
          <br />
          <div className="app__navbar-logo-text">
            <p><span>JOGA & MASAŻ</span></p>
            <p>ciała i umysłu</p>
            <p>Anna Gidzińska</p>
          </div>
        </Link>
        <div onClick={toggleSidebar}>
          {toggle ? <HiX /> : <AiOutlineMenu />}
        </div>
      </div>
      <SideBar openSidebar={toggleSidebar} animate={toggle} />
    </nav>
  );
};

export default Navbar;
