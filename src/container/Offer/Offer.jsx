import React, { useState } from 'react';
import { Headlines, ButtonWhite } from '../../components';

import { images } from '../../constants';

import './Offer.scss';

const Offer = () => {

  const aboutMethods = "Krótko o metodach.  Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ea quisquam doloremque officia voluptatum facere. Dolore perspiciatis cum quia commodi incidunt placeat aut repellendus pariatur rerum. Quae, cum tenetur. Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ea quisquam doloremque officia voluptatum facere. Dolore perspiciatis cum quia commodi incidunt placeat aut repellendus pariatur rerum. Quae, cum tenetur."

  const methods =[
    
    {
      title: 'Joga Qi Gong', 
      abstract: 'Unikatowy system ćwiczeń wzmacniających inspirowany buddyjskim Qi Gong i wschodnimi sztukami walk. Metoda jest syntezą tradycji Tai Chi, Kung Fu, Qi Gong, indyjskiej Jogi oraz sztuki Kaligrafii.',
      content: 'Podstawowym celem Jogi Qi Gong jest przedłużenie życia poprzez ZWIĘKSZANIE wewnętrznej ENERGII (QI), a nie poprzez ekstremalne rozciąganie. Elastyczność przyjdzie z czasem, zwłaszcza gdy ciało się rozluźnia, w rzeczywistości będzie to automatyczne. Nie będzie potrzeby naciągania ścięgien ani więzadeł. Joga Qi Gong dotyczy przede wszystkim WYTWARZANIA ENERGII.',
      imgUrl: images.joga,
    },
    {
      title: 'Tajski masaż Jivaka', 
      abstract: 'Klejnot wśród masaży. Najstarsza na świecie metoda masażu, wywodząca się z Indii i Tybetu od Jivaka Kumar Bhaccha nadwornego lekarza i ucznia Buddy. Najbogatszy masaż, daje najbardziej wszechstronne korzyści. ',
      imgUrl: images.jivaka,
    },
    {
      title: 'Tybetańska praktyka', 
      abstract: 'Wzmocnienie ciała i umysłu według 5 elementów. Odmładza i zapewnia długie życie w dobrym zdrowiu. Metoda pochodzi od mnichów z Tybetu, którzy w ten sposób dbali o swoją moc. ',
      content: 'W niezwykły sposób łagodzi wszelkie przewlekłe bóle, usprawnia narządy ruchu, likwiduje sztywność stawów, przykurcze i napięcie mięśniowe oraz stany depresyjne. Pobudza krążenie krwi i limfy, dzięki czemu spowalnia procesy starzenia. Nuad Boran poprawia kondycję fizyczną, emocjonalną i intelektualną. Przynosi kompleksowy relaks. Osoby korzystające z masażu tajskiego doświadczają absolutnego spokoju. Niektórzy klienci, nawet podczas dłuższych sesji, zapadają w cichą drzemkę, aby obudzić się wypoczęty i pełen ENERGII. TM Nuad Boran opiera się na wiedzy o przepływie ENERGII w ludzkim ciele. Łączy w sobie elementy akupresury i refleksologii, w czym okazuje się być podobny do chińskiego masażu tui na, hinduskiego masażu ajurwedyjskiego i japońskiego masażu shiatsu. Wyraźnie łączy ją też z jogą hinduską – charakterystycznym dla niej zastosowaniem technik oddechowych i ćwiczeń rozciągających. Masaż odbywa się bez użycia balsamów i olejków oraz w miękkich ubraniach takich jak dres i koszulka. Powitanie.',
      imgUrl:  images.tybet,
    },
    {
      title: 'Relaksacja', 
      abstract: 'Ciało jest odzwierciedleniem naszego stanu umysłu. Są nierozłącznymi częściami tej samej całości. Holistyczne podejście pozwala na uwolnienie napięć na poziomie fizycznym i psychicznym...  ',
      content: 'W niezwykły sposób łagodzi wszelkie przewlekłe bóle, usprawnia narządy ruchu, likwiduje sztywność stawów, przykurcze i napięcie mięśniowe oraz stany depresyjne. Pobudza krążenie krwi i limfy, dzięki czemu spowalnia procesy starzenia. Nuad Boran poprawia kondycję fizyczną, emocjonalną i intelektualną. Przynosi kompleksowy relaks. Osoby korzystające z masażu tajskiego doświadczają absolutnego spokoju. Niektórzy klienci, nawet podczas dłuższych sesji, zapadają w cichą drzemkę, aby obudzić się wypoczęty i pełen ENERGII. TM Nuad Boran opiera się na wiedzy o przepływie ENERGII w ludzkim ciele. Łączy w sobie elementy akupresury i refleksologii, w czym okazuje się być podobny do chińskiego masażu tui na, hinduskiego masażu ajurwedyjskiego i japońskiego masażu shiatsu. Wyraźnie łączy ją też z jogą hinduską – charakterystycznym dla niej zastosowaniem technik oddechowych i ćwiczeń rozciągających. Masaż odbywa się bez użycia balsamów i olejków oraz w miękkich ubraniach takich jak dres i koszulka. Powitanie.',
      imgUrl: images.relaks,
    }
  ]
  
  const [toggle, setToggle] = useState(false);

  const toggleText = (event) => {
    event.preventDefault(); 
    setToggle(!toggle);
  }

  return (
    <section >
      <Headlines props={"Oferta"} /> 
      <div className="section-spaceing ">
        <div className="app__offer-content">
          <div className="ima-wraper">
            <img src="" alt="" />
          </div>
          <div>
            <p></p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Offer