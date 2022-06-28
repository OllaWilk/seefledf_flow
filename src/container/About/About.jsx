import React from 'react';
import { Headlines } from '../../components';

import { images } from '../../constants';

import './About.scss';

const About = () => {
  const about = {
    title: 'Nazywam się Anna Gidzińska',
    content:
      'W życiu kieruję się głosem serca i siłą spokoju. Jestem dyplomowanym Instruktorem Jogi Qi Gong oraz Specjalistą Masażu Tajskiego Jivaka Body & Mind. Moi Mistrzowie, to Gunther Krϋger, Krzysztof Szabat, Mantak Chia, Takashi Yoshizawa, M. Zenhua Yang. Spotykam ich od 2009 roku podróżując po Europie i Azji. Podążam ścieżką najstarszych przekazów nauk i medytacji, rozwijam swoją praktykę pod okiem Mistrzów. W świecie zachodnim jestem wykształconym psychologiem. Współorganizuje wiele międzynarodowych kursów pracy z ciałem i umysłem. Dotychczas uczyłam osoby w kazdym wieku, o roznej kondycji, takze studentow szkoly sztuk walk. Pracowalam w Polsce, Grecji, Hiszpanii i Szwajcarii. Obecnie mieszkam w Polsce, wraz z przyjaciolmi prowadze osrodek medytacyjny na Dolnym Slasku. Oferuję masaże i kursy ćwiczeń na terenie Polski.',
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
