import React, { useState } from 'react';
import { Link } from 'react-scroll';
 

import { AiOutlineMenu } from "react-icons/ai";
import { HiX } from "react-icons/hi";

import { images } from "../../constants";
import SideBar from '../SideBar/SideBar';


import './Navbar.scss';

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  const toggleSidebar = (event) => {
    event.preventDefault(); 
    setToggle(!toggle);
  }

  return (
  
    <nav >
      <div className='navbar-menu' >
        <Link to='home' className='app__navbar-logo'>
        <img src={images.logo} alt="logo" />
          Anna Gidzińska
        </Link>
        <div onClick={toggleSidebar} >
          {toggle ? <HiX /> : <AiOutlineMenu/> }
        </div>
      </div>
      <SideBar openSidebar={toggleSidebar} animate={toggle} />
      {/* <ul  className={'toggle ' + (toggle ? 'app__header' : 'app__slider-header')}>
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li key={item}>
            <a href={`#${item}`} onClick={toggleSidebar}>
              {item}
            </a>
          </li>
        ))}
      </ul> */}
    </nav>
  )
}

export default Navbar;

