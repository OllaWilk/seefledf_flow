import React from 'react';
import { Headlines } from '../../components';

import { images } from '../../constants';

import './About.scss';

const About = () => {
  const about = {
    title: 'Nazywam się Anna Gidzińska',
    content: (
      <p>
        W życiu kieruję się głosem serca i siłą spokoju. Jestem mamą wspaniałej
        25-letniej Pauliny oraz opiekunką cudownej 9-letniej goldenki Pemy.
        <br />
        <br />
        Jestem jedyną na Dolnym Śląsku dyplomowaną Instruktorką Jogi Qi Gong
        opartej na programie Calligraphy Health. Ponadto wykonuję, ale również
        uczę Masażu Tajskiego w stylu Jivaka Body & Mind. <br />
        <br />
        Moi Mistrzowie, to Gunther Krϋger, Krzysztof Szabat, Takashi Yoshizawa,
        Mantak Chia, M. Zenhua Yang. Spotykam ich od 2009 roku podróżując po
        Europie i Azji. Rozwijam swoją praktykę pod ich okiem podążając ścieżką
        najstarszych przekazów nauk i medytacji.
        <br />
        <br />W świecie zachodnim jestem wykształconym psychologiem.
        Współorganizuję wiele międzynarodowych kursów pracy z ciałem i umysłem.
        Pracuję z osobami w każdym wieku, o różnej kondycji, także studentami
        szkół sztuk walk. Uczyłam w Polsce, Grecji, Hiszpanii i Szwajcarii.
        Obecnie mieszkam w Polsce i wraz z przyjaciółmi prowadzę ośrodek
        medytacyjny na Dolnym Śląsku. Szkolenia, masaże oraz doradztwo oferuję
        na terenie Polski, głównie we Wrocławiu oraz w Kotlinie Kłodzkiej.
      </p>
    ),
    img: images.Anna,
  };

  return (
    <section id="o mnie">
      <Headlines props={'O mnie'} />
      <div className="section-spaceing ">
        <div className="app__about-wrapper">
          <div className="app_about-img-wrap">
            <img src={about.img} alt={about.title} />
          </div>
          <p className="p-about-text">{about.title}</p>
          <p className="p-text">{about.content}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
