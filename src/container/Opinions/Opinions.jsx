import React, { useState, useEffect }from 'react';
import { Headlines } from '../../components';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import './Opinions.scss';

const Opinions = () => {

  const [testimonials, setTestimonials ] = useState([]);
  const [brand, setBrand ] = useState([]);
  const [curentIndex, setCurentIndex ] = useState(0);

  

  return (


    <section className=' container' >
        <Headlines props={"Opinie"} /> 
        <div className=" section-wrapper">
         
         
        </div>
      </section>
  )
}

export default Opinions