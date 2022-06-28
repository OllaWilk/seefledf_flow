import React from 'react';

import { Headlines, OfferCart } from '../../components';

import { images } from '../../constants';

import './Offer.scss';

const Offer = () => {
  const offers = [
    {
      title: 'Joga Qi Gong',
      abstract:
        'Unikatowy system ćwiczeń wzmacniających inspirowany buddyjskim Qi Gong i wschodnimi sztukami walk. Metoda jest syntezą tradycji Tai Chi, Kung Fu, Qi Gong, indyjskiej Jogi oraz sztuki Kaligrafii.',
      content: (
        <p>
          Praktyka JOGI QI GONG uczy, jak oddechem regulować przepływ ENERGII
          życiowej w ciele. <br />
          <br />
          Zalecana jest profilaktycznie oraz w przeróżnych schorzeniach układu
          krążenia i odpornościowego, gdyż zdecydowanie zwiększa witalność i
          przedłuża życie w sprawności fizycznej i psychicznej na długie lata.{' '}
          <br />
          <br />
          Poprzez odpowiedni trening ciała, dyscyplinę duchową i przestrzeganie
          zasad etycznych JOGA QI GONG umożliwia rozpoznanie przez
          praktykującego natury rzeczywistości. W wyniku tej praktyki uzyskuje
          się absolutną wolność, stan bezwarunkowego istnienia.
          <br />
          <br />
          Synchronizacja oddechu oraz ruchu ciała w sposób płynny i łagodny,
          ciągły i niewymuszony polega na głębokiej współpracy zarówno krążenia
          w ciele fizycznym, jak i uzyskaniu tzw. harmonii ducha czy też
          głębokiej acz przyjemnej pracy z dyscypliną umysłu.
          <br />
          <br />
          JOGA QI GONG ściśle powiązana jest z akupunkturą jako naturalna
          tradycyjna metoda lecznicza. Pracuje z punktami biologicznie aktywnymi
          oraz meridianami (podobnie jak TAJSKI MASAŻ JIVAKA). Wzbogacona o
          więcej technik wyzwala siłę i stanowi fundament dalekowschodnich sztuk
          walk. <br />
          <br />
          Do rozpoczęcia nauki potrzebna jest mata do jogi oraz wygodne miękkie
          sportowe ubranie. <br />
          Zapraszamy.
          <br />
          <br />
          {/* Najbliższe terminy: */}
          <br />
          {/* Kurs podstawowy 1 we Wrocławiu 25-26 czerwca 2022. <br />
          Kurs podstawowy 2 we Wrocławiu 16-17 lipca 2022. */}
          <br />
          {/* Basic retreat w Kotlinie Kłodzkiej 25-28 sierpnia 2022.
          <br />
          Advanced retreat 2023. */}
        </p>
      ),
      img: images.joga,
      ikon: images.jogaIkon,
    },
    {
      title: 'Tajski Masaż Jivaka',
      abstract:
        'Klejnot wśród masaży. Najstarsza na świecie metoda masażu, wywodząca się z Indii i Tybetu od Jivaka Kumar Bhaccha, nadwornego lekarza i ucznia Buddy. Najbogatszy masaż, daje najbardziej wszechstronne korzyści.',
      content: (
        <p>
          Tajski Masaż Jivaka odpręża, przywraca równowagę oraz pozwala odnaleźć
          nowe pokłady ENERGII do działania.
          <br />
          <br />
          W niezwykły sposób łagodzi wszelkie przewlekłe bóle, usprawnia narządy
          ruchu, rozluźnia mięśnie, uelastycznia stawy, łagodzi stany
          depresyjne. Wyraźnie pobudza krążenie krwi i limfy, spowalniając
          procesy starzenia.
          <br />
          <br />
          Otwiera meridiany, którymi płynie życiowa ENERGIA, a więc pozytywnie
          wpływa na układ nerwowy, pokarmowy i energetyczny.
          <br />
          <br />
          Przynosi wszechogarniający relaks oraz absolutne wyciszenie umysłu.
          <br />
          <br />
          Tajski Masaż Jivaka łączy elementy akupresury, hinduskiego masażu
          ajurwedycznego oraz japońskiego masażu shiatsu. Zawiera techniki
          oddechowe i ćwiczenia rozciągające z hinduskiej jogi.
          <br />
          <br />
          Tajski Masaż Jivaka poprawia kondycję fizyczną, emocjonalną i
          intelektualną. <br />
          <br />
          Długotrwałym efektem jest głęboki relaks, harmonia i odmłodzenie.
          <br />
          Masaż odbywa się bez użycia płynów czy olejów oraz w miękkim ubraniu
          typu dres i t-shirt. <br />
          Zapraszam serdecznie.
        </p>
      ),
      img: images.jivaka,
      ikon: images.masazIkon,
    },
    {
      title: 'Tybetańska Praktyka',
      abstract:
        'Wzmocnienie ciała i umysłu według 6 elementów. Odmładza i zapewnia długie życie w dobrym zdrowiu. Metoda pochodzi od mnichów z Tybetu, którzy w ten sposób dbali o swoją moc. ',
      content: (
        <p>
          TYBETAŃSKA PRAKTYKA jest gimnastyka zapewniająca witalność i sprawność
          ruchową w każdym wieku. Jest łatwa, szybka i można ją wykonać w domu,
          na niewielkiej przestrzeni. <br />
          <br />
          Tybetańscy lamowie praktykują ten zestaw ćwiczeń i tym samym cofają
          starzenie organizmu. Są ludźmi w mocno podeszłym wieku, choć ich
          wygląd wskazuje na kilkadziesiąt lat mniej.
          <br />
          <br />
          Regularna praktyka TYBETAŃSKICH ĆWICZEŃ doskonale wpływa na kondycję i
          ruchomość wszystkich stawów. Polega jednocześnie na pracy z oddechem,
          co powoduje stan pogodnej akceptacji otaczającego nas świata. Pojawia
          się cierpliwość, mamy więcej energii, choć nie jesteśmy pobudzeni.
          Dzięki temu wszystkiemu wzrasta ochota do innych aktywności.
          <br />
          <br />
          Do rozpoczęcia nauki potrzebna jest mata do jogi oraz wygodne miękkie
          sportowe ubranie.
          <br />
          <br />
          Zapraszam serdecznie.
        </p>
      ),
      img: images.tybet,
      ikon: images.relaksIkon,
    },
    {
      title: 'Relaksacja i Higiena',
      abstract:
        "Kompleksowa regeneracja na poziomie fizycznym, mentalnym i energetycznym za pomocą '5' żywiołów, '6' zmysłów oraz '7' nawyków. Gotowy program odnowy biologicznej i duchowej dobrany specjalnie dla Ciebie i do zastosowania każdego dnia.",
      content: (
        <p>
          Program rozpoczyna się od spotkania celem szczegółowego wywiadu.
          Określamy wspólnie potencjał i ewentualne przeciwwskazania do
          zastosowania metod pracy z ciałem i umysłem. Następnie odbywa się
          2-dniowy kurs. Całościowy konsulting obejmuje 20 godz.zajęć
          praktycznych wraz z materiałami szkoleniowymi. <br />
          <br />
          Program specjalnie przeznaczony dla Ciebie sprawi, że będziesz odtąd
          mogla/mógł:
          <br />
          <br />
          budzić się wypoczęta/y z uczuciem wdzięczności,
          <br />
          <br />
          funkcjonować cały dzień radośnie i efektywnie,
          <br />
          <br />
          prawidłowo korzystać z zasobów tej planety,
          <br />
          <br />
          Twoje ciało będzie sprawniejsze, <br />
          <br />
          z lekkością i spokojem podejdziesz do życiowych wyzwań,
          <br />
          Metody pracy oparte o osiągnięcia z dziedziny biologii, neurologii,
          genetyki, bioenergetyki i psychologii. Dla zainteresowanych
          pogłębieniem wiedzy i doświadczeń, kursy zaawansowane. <br />
          Zapraszam serdecznie.
        </p>
      ),
      img: images.relaks,
      ikon: images.tybetIkon,
    },
  ];

  return (
    <section id="oferta">
      <Headlines props={'Oferta'} />
      <div className="section-spaceing ">
        <div className="app__offers-content">
          {/* {offers.map((offer, index) => (
            <OfferCart 
              title={offer.title} 
              abstract={offer.abstract}
              content={offer.content}
              img={offer.img}
              />
          ))} */}

          <OfferCart
            title={offers[0].title}
            abstract={offers[0].abstract}
            content={offers[0].content}
            img={offers[0].img}
            ikon={offers[0].ikon}
          />
          <OfferCart
            title={offers[1].title}
            abstract={offers[1].abstract}
            content={offers[1].content}
            img={offers[1].img}
            ikon={offers[1].ikon}
          />

          <OfferCart
            title={offers[2].title}
            abstract={offers[2].abstract}
            content={offers[2].content}
            img={offers[2].img}
            ikon={offers[2].ikon}
          />
          <OfferCart
            title={offers[3].title}
            abstract={offers[3].abstract}
            content={offers[3].content}
            img={offers[3].img}
            ikon={offers[3].ikon}
          />
        </div>
      </div>
    </section>
  );
};

export default Offer;
