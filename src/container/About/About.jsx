import React from 'react';
import { Headlines } from '../../components';
import { images } from '../../constants';
import './About.scss'

const About = () => {

  const about = 

  {
    title: "Nazywam się Anna Gidzińska",
    content: "W życiu kieruję się głosem serca i siłą spokoju. Jestem dyplomowanym Instruktorem Jogi Qi Gong oraz Specjalistą Masażu Tajskiego Jivaka Body & Mind. Swoją edukację czerpię bezpośrednio od Gunthera Krϋgera, Krzysztofa Szabata, Mantak Chia, Takashi Yoshizawy, M. Zenhua Yang. Z moimi nauczycielami spotykam się od 2009 roku podróżując po Europie i Azji. Do dziś wiernie podążam ścieżką najstarszych przekazów nauk i medytacji, rozwijam swoją praktykę pod okiem moich Mistrzów. W świecie zachodnim jestem wykształconym psychologiem. Jestem współorganizatorem wielu międzynarodowych kursów pracy z ciałem i umysłem. Dotychczas uczyłem w Polsce, Grecji, Hiszpanii i Szwajcarii. Teraz oferuję masaże i kursy ćwiczeń w Polsce.",
    img: images.Anna 
  }
  
  return (
    <section>
      <Headlines props={"O mnie"} />
      <div className="section-spaceing ">
        
        <div className="app__about-wrapper">
          <div className="app_about-img-wrap">
            <img src='{about.img}' alt={about.title} />
          </div>
          <p className='p-about-text'>{about.title}</p>
          <p className="p-text">{about.content}</p>
        </div>
        
      </div>
    </section>
  )
}

export default About