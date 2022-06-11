import React, {useState}  from "react";

import { Headlines, Modal, OfferCart } from "../../components";
import { HiX } from "react-icons/hi";

import { images } from "../../constants";

import "./Offer.scss";

const Offer = () => {

  const offers = [
    { 
      title: "JOGA QI GONG",
      abstract: "Unikatowy system ćwiczeń wzmacniających inspirowany buddyjskim Qi Gong i wschodnimi sztukami walk. Metoda jest syntezą tradycji Tai Chi, Kung Fu, Qi Gong, indyjskiej Jogi oraz sztuki Kaligrafii...",
      content: "1 content ćwiczeń wzmacniających inspirowany buddyjskim Qi Gong i wschodnimi sztukami walk. Metoda jest syntezą tradycji Tai Chi, Kung Fu, Qi Gong, indyjskiej Jogi oraz sztuki Kaligrafii.",
      img:  images.joga,

    },
    { 
      title: "TAJSKI MASAŻ JIVAKA",
      abstract: "Klejnot wśród masaży. Najstarsza na świecie metoda masażu, wywodząca się z Indii i Tybetu od Jivaka Kumar Bhaccha nadwornego lekarza i ucznia Buddy. Najbogatszy masaż, daje najbardziej wszechstronne korzyści...",
      content: "2 content Unikatowy systuddyjskim Qi Gong i wschodnimi sztukami walk. Metoda jest syntezą tradycji Tai Chi, Kung Fu, Qi Gong, indyjskiej Jogi oraz sztuki Kaligrafii.",
      img:  images.jivaka ,
   
    },
    { 
      title: "TYBETAŃSKA  PRAKTYKA",
      abstract: "Wzmocnienie ciała i umysłu według 5 elementów. Odmładza i zapewnia długie życie w dobrym zdrowiu. Metoda pochodzi od mnichów z Tybetu, którzy w ten sposób dbali o swoją moc...",
      content: "3 content system ćwiczeń wzmacniających inspirowany buddyjskim Qi Gong i wschodnimi sztukami walk. Metoda jest syntezą tradycji Tai Chi, Kung Fu, Qi Gong, indyjskiej Jogi oraz sztuki Kaligrafii.",
      img:  images.tybet,
     
    },
    { 
      title: "RELAKSACJA I HIGIENA",
      abstract: "Unikatowy system ćwiczeń wzmacniających inspirowany buddyjskim Qi Gong i wschodnimi sztukami walk. Metoda jest syntezą tradycji Tai Chi, Kung Fu, Qi Gong, indyjskiej Jogi oraz sztuki Kaligrafii...",
      content: "4 content Uni ćwiczeń wzmacniających inspirowany buddyjskim Qi Gong i wschodnimi sztukami walk. Metoda jest syntezą tradycji Tai Chi, Kung Fu, Qi Gong, indyjskiej Jogi oraz sztuki Kaligrafii.",
      img:  images.relaks,
   
    }
  ]

  return (
    <section id="oferta">
      <Headlines props={"Oferta"} /> 
      <div className="section-spaceing ">
        <div className="app__offers-content">

          <OfferCart 
            title={offers[0].title} 
            abstract={offers[0].abstract} 
            content={offers[0].content}
            img={offers[0].img}
            />
          <OfferCart 
           title={offers[1].title} 
           abstract={offers[1].abstract} 
           content={offers[1].content}
           img={offers[1].img}/>
          <OfferCart 
           title={offers[2].title} 
           abstract={offers[2].abstract} 
           content={offers[2].content}
           img={offers[2].img}/>
          <OfferCart 
           title={offers[3].title} 
           abstract={offers[3].abstract} 
           content={offers[3].content}
           img={offers[3].img}
           />

          {/* { offers.map((offer, index) => (
            <div className="app_offer-item" key={offer.title + index}>
              <div className="app__img-wrap">
                <img src={offer.img} alt={offer.title} />
                <p className="abstract" >{offer.abstract}</p>
              </div>
              <h3 className="title" >{offer.title}</h3>
              <p className="abstract-sm"  >{offer.abstract}</p>

              <div className="btnwhite" >
                <p 
                  onClick={toggleModal.bind(this, offer)}
                  id={offer.title}
                  >Czytaj więcej</p>  
              </div> 
            </div>
          ))
          } */}
         
        </div>
      </div>
    </section>
  )
}

export default Offer 