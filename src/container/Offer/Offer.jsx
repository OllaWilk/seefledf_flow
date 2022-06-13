import React from "react";

import { Headlines, OfferCart } from "../../components";

import { images } from "../../constants";

import "./Offer.scss";

const Offer = () => {

  const offers = [
    { 
      title: "JOGA QI GONG",
      abstract: "Unikatowy system ćwiczeń wzmacniających inspirowany buddyjskim Qi Gong i wschodnimi sztukami walk. Metoda jest syntezą tradycji Tai Chi, Kung Fu, Qi Gong, indyjskiej Jogi oraz sztuki Kaligrafii...",
      content: "Praktyka JOGI QI GONG uczy, jak oddechem regulować przepływ ENERGII życiowej w ciele. Zalecana jest profilaktycznie oraz w przeróżnych schorzeniach układu krążenia i odpornościowego, gdyż zdecydowanie zwiększa witalność i przedłuża życie w sprawności fizycznej i psychicznej na długie lata. Poprzez odpowiedni trening ciała, dyscyplinę duchową i przestrzeganie zasad etycznych JOGA QI GONG umożliwia rozpoznanie przez praktykującego natury rzeczywistości. W wyniku tej praktyki uzyskuje się absolutną wolność, stan bezwarunkowego istnienia. Synchronizacja oddechu oraz ruchu ciała w sposób płynny i łagodny, ciągły i niewymuszony polega na głębokiej współpracy zarówno krążenia w ciele fizycznym, jak i uzyskaniu tzw. harmonii ducha czy też głębokiej acz przyjemnej pracy z dyscypliną umysłu. JOGA QI GONG ściśle powiązana jest z akupunkturą jako naturalna tradycyjna metoda lecznicza. Pracuje z punktami biologicznie aktywnymi oraz meridianami (podobnie jak TAJSKI MASAŻ JIVAKA). Wzbogacona o więcej technik wyzwala siłę i stanowi fundament dalekowschodnich sztuk walk. Do rozpoczęcia nauki potrzebna jest mata do jogi oraz wygodne miękkie sportowe ubranie. Zapraszamy.",
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
        </div>
      </div>
    </section>
  )
}

export default Offer 