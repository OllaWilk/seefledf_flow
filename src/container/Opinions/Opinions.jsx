import React, { useState, useEffect }from 'react';
import { Headlines } from '../../components';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import './Opinions.scss';

const Opinions = () => {

  const [testimonials, setTestimonials ] = useState([]);
  const [brand, setBrand ] = useState([]);
  const [curentIndex, setCurentIndex ] = useState(0);

  

  return (

    <section >
      <Headlines props={"Opinie"} /> 
        <div className="section-spaceing ">
          <div className="app__offer-content">
            <div className="ima-wraper">
              <img src="" alt="" />
            </div>
            <div>
              <p></p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Opinions