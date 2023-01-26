import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { images } from '../../constants';

import './PopUp.scss';

const PopUp = () => {
  const [showPopUp, setShowPopUp] = useState(true);

  const closePopup = () => {
    setShowPopUp(!showPopUp);
  };

  return (
    <>
      {showPopUp && (
        <div className="popup " id="kursy">
          <div className="header-popup-wrap">
            <img src={images.logo} alt="logo" />
            <h2>Nowe terminy kursów</h2>
          </div>
          <div className="dates">
            <div className="one-cours">
              <div className="cours-name">
                {/* <img src={images.masazIkon} alt="tajski masaż" /> */}
                <h3>Tajski Masaż Jivaka - Podstawy 1</h3>
              </div>
              <p>Wrocław 11-12.02.2023</p>
            </div>
            <div className="one-cours">
              <div className="cours-name">
                {/* <img src={images.jogaIkon} alt="tajski masaż" /> */}
                <h3>Joga Qi Gong - Podstawy 1</h3>
              </div>
              <p>Gdańsk 01-02.04.2023</p>
            </div>
            <div className="one-cours">
              <div className="cours-name">
                {/* <img src={images.jogaIkon} alt="tajski masaż" /> */}
                <h3>Tybetańska Praktyka</h3>
              </div>
              <p> Wrocław: 04.03.2023</p>
            </div>
            <div className="one-cours">
              <div className="cours-name">
                {/* <img src={images.jogaIkon} alt="tajski masaż" /> */}
                <h3>Tybetańska Praktyka</h3>
              </div>
              <p> Wrocław: 04.06.2023</p>
            </div>

            <div className="one-cours">
              <div className="cours-name">
                {/* <img src={images.jogaIkon} alt="tajski masaż" /> */}
                <h3>Higiena i Relaksacja - Odnowa</h3>
              </div>
              <p> Izery: 01-03.05.2023</p>
            </div>
          </div>
          <Link
            to="oferta"
            className="btn header-btn btn-popup"
            onClick={closePopup}
          >
            <p to="oferta">Więcej w zakładce oferta</p>
          </Link>
        </div>
      )}
    </>
  );
};

export default PopUp;
