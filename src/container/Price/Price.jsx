import React from 'react';
import { Link } from 'react-scroll';
import { Headlines, NamePlusIkon } from '../../components';

import { images } from "../../constants";
import './Price.scss';

const Price = () => {

  const joga = { 
      name: 'Joga Qi Gong',
      oneLesson: '1 godz. konsultacji',
      oneLessonPrice: 100,
      courseDuration: "3,5",
      individualCourse: 1500,
      group: 1000,

    }


  const taj = { 
    name: 'Tajski Masaż Jivaka',
    oneLesson: '2 godz. sesja masażu',
    oneLessonPrice: 250,
    month: '2 sesje miesięcznie',
    monthPrice: 450,
    courseDuration: "3",
    individualCourse: 1500,
    group: 1000,

  }

  const tyb = { 
    name: 'Tybetańska Praktyka',
    oneLesson: '1 godz. konsultacji',
    oneLessonPrice: 50,
    courseDuration: "7",
    individualCourse: 350,
    group: 300,

  }
   

  const rel = { 
    name: 'Relaksacja i Higiena',
    oneLesson: '1 godz. konsultacji',
    oneLessonPrice: 75,
    courseDuration: "2",
    individualCourse: 1500,
    group: 1000,

  }
   

  return (
    <section id='cennik'>
      <Headlines props={"Cennik"} /> 
        <div className="section-spaceing ">
          <div className="app__prices-wrap">
            <div className="app__prices-list-wrap">
              <NamePlusIkon name={joga.name} ikon={images.jogaIkon}/> 
              <ul className="app__price">
                <li> 
                  <p className="name">{joga.oneLesson}</p>
                  <p className='price'>{joga.oneLessonPrice} zł</p>
                </li>
                <li> 
                  <p className="name">Kursy podstawowe i zaawansowane {joga.courseDuration} dniowe:</p>
                </li>
                <li> 
                  <p className="name">Indywidualnie</p>
                  <p className='price'>od {joga.individualCourse} zł</p>
                </li>
                <li> 
                  <p className="name">W grupie do 5 osób</p>
                  <p className='price'>od {joga.group} zł</p>
                </li>
              </ul>
              <NamePlusIkon name={taj.name} ikon={images.masazIkon}/>
              <ul className="app__price">
                <li> 
                  <p className="name">{taj.oneLesson}</p>
                  <p className='price'>{taj.oneLessonPrice} zł</p>
                </li>
                <li> 
                  <p className="name">{taj.month}</p>
                  <p className='price'>{taj.monthPrice} zł</p>
                </li>
                <li> 
                  <p className="name">Kursy podstawowe i zaawansowane {taj.courseDuration} dniowe:</p>
                </li>
                <li> 
                  <p className="name">Indywidualnie</p>
                  <p className='price'>od {taj.individualCourse} zł</p>
                </li>
                <li> 
                  <p className="name">W grupie do 5 osób</p>
                  <p className='price'>od {taj.group} zł</p>
                </li>
              </ul>
              <NamePlusIkon name={tyb.name} ikon={images.tybetIkon}/>
              <ul className="app__price">
                <li> 
                  <p className="name">{tyb.oneLesson}</p>
                  <p className='price'>{tyb.oneLessonPrice} zł</p>
                </li>
                <li> 
                  <p className="name">Kursy podstawowy {tyb.courseDuration} godz.:</p>
                </li>
                <li> 
                  <p className="name">Indywidualnie</p>
                  <p className='price'>{tyb.individualCourse} zł</p>
                </li>
                <li> 
                  <p className="name">W grupie do 5 osób</p>
                  <p className='price'>od {tyb.group} zł</p>
                </li>
              </ul>   
              <NamePlusIkon name={rel.name} ikon={images.relaksIkon}/>
              <ul className="app__price">
                <li> 
                  <p className="name">{rel.oneLesson}</p>
                  <p className='price'>{rel.oneLessonPrice} zł</p>
                </li>
                <li> 
                  <p className="name">Kursy podstawowy {rel.courseDuration} dniowy:</p>
                </li>
                <li> 
                  <p className="name">Indywidualnie</p>
                  <p className='price'>od {rel.individualCourse} zł</p>
                </li>
                <li> 
                  <p className="name">W grupie do 5 osób</p>
                  <p className='price'>od {rel.group} zł</p>
                </li>
              </ul>   
            </div>
            <p className='p-text'>Abonamenty miesięczne oraz stała współpraca, także z organizacjami.</p>
            <Link to='kontakt' className='btn header-btn'>Zamów</Link>
          </div>
        </div>
  </section>
  )
}

export default Price