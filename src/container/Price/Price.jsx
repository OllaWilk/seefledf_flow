import React from 'react';
import { Link } from 'react-scroll';
import { Headlines, NamePlusIkon } from '../../components';

import { images } from '../../constants';
import './Price.scss';

const Price = () => {
  const joga = {
    name: 'Joga Qi Gong',
    oneLesson: '1 godz. konsultacji',
    oneLessonPrice: 150,
    courseDuration: ` Kursy podstawowe i zaawansowane 3,5 dniowe:`,
    individualCourse: 1600,
    group: 1200,
  };

  const taj = {
    name: 'Tajski Masaż Jivaka',
    oneLesson: '1 godz. sesja masażu',
    oneLessonPrice: 150,
    month: '2 sesje podstawowe miesięcznie',
    monthPrice: 550,
    courseDuration: `Kursy podstawowe i zaawansowane ${3} dniowe:`,
    individualCourse: 1600,
    group: 1200,
  };

  const tyb = {
    name: 'Tybetańska Praktyka',
    oneLesson: '1 godz. konsultacji',
    oneLessonPrice: 100,
    courseDuration: `Kurs podstawowy, ${5} godz.:`,
    individualCourse: `od ${450}`,
    group: 350,
  };

  const rel = {
    name: 'Relaksacja i Higiena',
    oneLesson: '1 godz. konsultacji',
    oneLessonPrice: 100,
    courseDuration: `Kurs podstawowy, ${2} dniowy:`,
    individualCourse: 1600,
    group: 1000,
  };

  return (
    <section id="cennik">
      <Headlines props={'Cennik'} />
      <div className="section-spaceing ">
        <div className="voucher-wraper">
          <img src={images.bon} alt="bon" />
          <img src={images.sesja} alt="sesj" />
          <img src={images.kursy} alt="kursy" />
          <div className="bon">
            <p> Bony podarunkowe ważne przez 3 miesiące od daty zakupu. </p>
            <Link to="kontakt" className="btn header-btn">
              Zamów
            </Link>
          </div>
        </div>

        <div className="app__prices-wrap">
          <div className="app__prices-list-wrap">
            <NamePlusIkon name={joga.name} ikon={images.jogaIkon} />
            <ul className="app__price">
              <li>
                <p className="name">{joga.oneLesson}</p>
                <p className="price">{joga.oneLessonPrice} zł</p>
              </li>
              <li>
                <p className="name">{joga.courseDuration}</p>
              </li>
              <li>
                <p className="name">Indywidualnie</p>
                <p className="price">od {joga.individualCourse} zł</p>
              </li>
              <li>
                <p className="name">W grupie do 5 osób</p>
                <p className="price">od {joga.group} zł</p>
              </li>
            </ul>
            <NamePlusIkon name={taj.name} ikon={images.masazIkon} />
            <ul className="app__price">
              <li>
                <p className="name">{taj.oneLesson}</p>
                <p className="price">{taj.oneLessonPrice} zł</p>
              </li>
              <li>
                <p className="name">{taj.month}</p>
                <p className="price">{taj.monthPrice} zł</p>
              </li>
              <li>
                <p className="name">{taj.courseDuration}</p>
              </li>
              <li>
                <p className="name">Indywidualnie</p>
                <p className="price">od {taj.individualCourse} zł</p>
              </li>
              <li>
                <p className="name">W grupie do 5 osób</p>
                <p className="price">od {taj.group} zł</p>
              </li>
            </ul>
            <NamePlusIkon name={tyb.name} ikon={images.relaksIkon} />
            <ul className="app__price">
              <li>
                <p className="name">{tyb.oneLesson}</p>
                <p className="price">{tyb.oneLessonPrice} zł</p>
              </li>
              <li>
                <p className="name">{tyb.courseDuration}</p>
              </li>
              <li>
                <p className="name">Indywidualnie</p>
                <p className="price">{tyb.individualCourse} zł</p>
              </li>
              <li>
                <p className="name">W grupie do 5 osób</p>
                <p className="price">od {tyb.group} zł</p>
              </li>
            </ul>
            <NamePlusIkon name={rel.name} ikon={images.tybetIkon} />
            <ul className="app__price">
              <li>
                <p className="name">{rel.oneLesson}</p>
                <p className="price">{rel.oneLessonPrice} zł</p>
              </li>
              <li>
                <p className="name">{rel.courseDuration}</p>
              </li>
              <li>
                <p className="name">Indywidualnie</p>
                <p className="price">od {rel.individualCourse} zł</p>
              </li>
              <li>
                {/* <p className="name">W grupie do 5 osób</p>
                <p className="price">od {rel.group} zł</p> */}
              </li>
            </ul>
          </div>
          <p className="p-text">
            Abonamenty miesięczne oraz stała współpraca, także z organizacjami.
            <br />
            Duże rabaty dla stałych klientów.
          </p>
          <Link to="kontakt" className="btn header-btn">
            Zamów
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Price;
