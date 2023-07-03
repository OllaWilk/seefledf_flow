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
        26-letniej Pauliny oraz opiekunką cudownej 10-letniej goldenki Pemy.
        <br />
        <br />
        Jestem dyplomowaną instruktorką jogi i masażu. Jako jedyna na Dolnym
        Śląsku prowadzę Jogę Qi Gong opartą m.in. na programie Calligraphy
        Health. Jako jedna z niewielu w Polsce uczę sztuki Tajskiego Masażu
        Jivaka w stylu Jivaka Body&Mind.
        <br />
        <br />
        Moi Mistrzowie, to Gunther Krϋger, Krzysztof Szabat, Mantak Chia,
        Takashi Yoshizawa, M. Zenhua Yang. Spotykam ich od 2009 roku podróżując
        po Europie i Azji. Rozwijam swoją praktykę pod ich okiem podążając
        ścieżką najstarszych przekazów nauk.
        <br />
        <br />W świecie zachodnim jestem też wykształconym psychologiem. Po 19
        latach pracy w organizacjach, zostałam trenerem rozwoju osobistego przez
        pracę z ciałem i umysłem, w bezpośrednim kontakcie interpersonalnym. Od
        10 lat moim zadaniem jest wielopoziomowe wzmacnianie ludzi.
        <br />
        <br />
        Współorganizuję wiele międzynarodowych kursów pracy z ciałem i umysłem.
        Pracuję z osobami w każdym wieku, o różnej kondycji, także studentami
        szkół sztuk walk. Uczyłam w Polsce, Grecji, Hiszpanii i Szwajcarii.
        Obecnie mieszkam we Wrocławiu. Szkolenia, masaże oraz doradztwo oferuję
        głównie we Wrocławiu oraz na terenie całej Polski.
      </p>
    ),
    img: images.Anna,
  };

  return (
    <section id='o mnie'>
      <Headlines props={'O mnie'} />
      <div className='section-spaceing '>
        <div className='app__about-wrapper'>
          <div className='app_about-img-wrap'>
            <img src={about.img} alt={about.title} />
          </div>
          <p className='p-about-text'>{about.title}</p>
          <p className='p-text'>{about.content}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
