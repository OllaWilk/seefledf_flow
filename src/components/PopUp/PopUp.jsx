import React, { useState } from 'react';
import { Link } from 'react-scroll';

import './PopUp.scss';

const PopUp = () => {
  const [show, setShowPopUp] = useState(true);

  const closePopup = () => {
    setShowPopUp(!show);
  };

  return (
    <>
      {show && (
        <section className='popup ' id='kursy'>
          <div className='dates'>
            <div className='one-cours'>
              <div className='cours-name'>
                <h3>Tajski Masaż Jivaka - Podstawy 1</h3>
              </div>
              <p>Wrocław: 12-13.08.2023</p>
              <p>Sulistrowice: 25-27.08.2023</p>
            </div>
            <div className='one-cours'>
              <div className='cours-name'>
                <h3>Tajski Masaż Jivaka - Podstawy 2</h3>
              </div>
              <p>Wrocław: 08-09.07.2023</p>
            </div>
            <div className='one-cours'>
              <div className='cours-name'>
                <h3>Joga Qi Gong - Podstawy 1</h3>
              </div>
              <p>Sulistrowice: 18-20.08.2023</p>
            </div>
            <div className='one-cours'>
              <div className='cours-name'>
                <h3>Joga Qi Gong - Podstawy 2</h3>
              </div>
              <p>Sulistrowice: 14-16.07.2023</p>
            </div>

            <div className='one-cours'>
              <div className='cours-name'>
                <h3>Tybetańska Praktyka</h3>
              </div>
              <p> Termin spotkania ustalamy indywidualnie</p>
            </div>

            <div className='one-cours'>
              <div className='cours-name'>
                <h3>PO - WOLNOŚĆ Program Odnowy</h3>
              </div>
              <p> Termin spotkania ustalamy indywidualnie</p>
            </div>
            <div className='one-cours'>
              <div className='cours-name'>
                <h3>JOGA&MASAŻ dla innych grup </h3>
              </div>
              <p> Łódź: październik 2023</p>
            </div>
          </div>
          <p className='info-kursy'>
            Szczegóły mailowo oraz w wydarzeniach na fb, zapraszam do
            obserwowania.
          </p>
          <Link
            to='kontakt'
            spy={true}
            offset={-140}
            className='btn header-btn btn-popup'
            onClick={closePopup}
          >
            Zamów
          </Link>
        </section>
      )}
    </>
  );
};

export default PopUp;
