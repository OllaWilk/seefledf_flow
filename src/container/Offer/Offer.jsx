import React, { useState } from "react";
import { Headlines, ButtonWhite } from "../../components";

import { images } from "../../constants";

import "./Offer.scss";

const Offer = () => {

  const offers = [
    { 
      title: "JOGA QI GONG",
      abstract: "Unikatowy system ćwiczeń wzmacniających inspirowany buddyjskim Qi Gong i wschodnimi sztukami walk. Metoda jest syntezą tradycji Tai Chi, Kung Fu, Qi Gong, indyjskiej Jogi oraz sztuki Kaligrafii...",
      content: "Unikatowy system ćwiczeń wzmacniających inspirowany buddyjskim Qi Gong i wschodnimi sztukami walk. Metoda jest syntezą tradycji Tai Chi, Kung Fu, Qi Gong, indyjskiej Jogi oraz sztuki Kaligrafii.",
      img:  images.joga
    },
    { 
      title: "TAJSKI MASAŻ JIVAKA",
      abstract: "Klejnot wśród masaży. Najstarsza na świecie metoda masażu, wywodząca się z Indii i Tybetu od Jivaka Kumar Bhaccha nadwornego lekarza i ucznia Buddy. Najbogatszy masaż, daje najbardziej wszechstronne korzyści...",
      content: "Unikatowy system ćwiczeń wzmacniających inspirowany buddyjskim Qi Gong i wschodnimi sztukami walk. Metoda jest syntezą tradycji Tai Chi, Kung Fu, Qi Gong, indyjskiej Jogi oraz sztuki Kaligrafii.",
      img:  images.jivaka 
    },
    { 
      title: "TYBETAŃSKA  PRAKTYKA",
      abstract: "Wzmocnienie ciała i umysłu według 5 elementów. Odmładza i zapewnia długie życie w dobrym zdrowiu. Metoda pochodzi od mnichów z Tybetu, którzy w ten sposób dbali o swoją moc...",
      content: "Unikatowy system ćwiczeń wzmacniających inspirowany buddyjskim Qi Gong i wschodnimi sztukami walk. Metoda jest syntezą tradycji Tai Chi, Kung Fu, Qi Gong, indyjskiej Jogi oraz sztuki Kaligrafii.",
      img:  images.tybet
    },
    { 
      title: "RELAKSACJA I HIGIENA",
      abstract: "Unikatowy system ćwiczeń wzmacniających inspirowany buddyjskim Qi Gong i wschodnimi sztukami walk. Metoda jest syntezą tradycji Tai Chi, Kung Fu, Qi Gong, indyjskiej Jogi oraz sztuki Kaligrafii...",
      content: "Unikatowy system ćwiczeń wzmacniających inspirowany buddyjskim Qi Gong i wschodnimi sztukami walk. Metoda jest syntezą tradycji Tai Chi, Kung Fu, Qi Gong, indyjskiej Jogi oraz sztuki Kaligrafii.",
      img:  images.relaks
    }
  ]

  const [toggle, setToggle] = useState(false);

  const toggleInfo = (event) => {
    event.preventDefault(); 
    setToggle(!toggle);
  }

  return (
    <section >
      <Headlines props={"Oferta"} /> 
      <div className="section-spaceing ">
        <div className="app__offers-content">

          { offers.map((offer, index) => (
            
            <div className="app_offer-item" key={offer.title + index}>
              <div className="app__img-wrap">
                <img src={offer.img} alt={offer.title} />
                <h3 className="title" >{offer.title}</h3>
                <p className="abstract" >{offer.abstract}</p>
              </div>
              <div className="btnwhite" >
                <p onClick={toggleInfo}>Czytaj więcej</p>  
              </div>
              {/* <ButtonWhite className="btn-wite" props={"Czytaj więcej"} onClick={toggleInfo} /> */}
              {/* <div className={ 'toggle ' + (toggle ? 'open' : 'close')}>{offer.content}</div> */}
            </div>

          ))
              
          }
        </div>
      </div>
    </section>
  )
}

export default Offer