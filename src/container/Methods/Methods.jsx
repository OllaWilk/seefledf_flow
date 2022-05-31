import React from 'react';
import { Headlines, ButtonWhite } from '../../components';

import { images } from '../../constants';

import './Methods.scss';

const Methods = () => {

  const aboutMethods = "Krótko o metodach.  Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ea quisquam doloremque officia voluptatum facere. Dolore perspiciatis cum quia commodi incidunt placeat aut repellendus pariatur rerum. Quae, cum tenetur. Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ea quisquam doloremque officia voluptatum facere. Dolore perspiciatis cum quia commodi incidunt placeat aut repellendus pariatur rerum. Quae, cum tenetur."

  const methods =[
    
    {
      title: 'Joga Qi Gong', 
      abstract: 'Joga Qi Gong buduje naturalne ciało, w którym ruch staje się swobodny, lekki, łatwy i intuicyjny. Joga Qi Gong ma duży wpływ na zdrowie organizmu, ponieważ pomaga przywrócić naturalną równowagę...',
      content: 'Podstawowym celem Jogi Qi Gong jest przedłużenie życia poprzez ZWIĘKSZANIE wewnętrznej ENERGII (QI), a nie poprzez ekstremalne rozciąganie. Elastyczność przyjdzie z czasem, zwłaszcza gdy ciało się rozluźnia, w rzeczywistości będzie to automatyczne. Nie będzie potrzeby naciągania ścięgien ani więzadeł. Joga Qi Gong dotyczy przede wszystkim WYTWARZANIA ENERGII.',
      imgUrl: images.joga,
    },
    {
      title: 'Tajski masaż Jivaka', 
      abstract: 'Ciało jest odzwierciedleniem naszego stanu umysłu. Są nierozłącznymi częściami tej samej całości. Holistyczne podejście pozwala na uwolnienie napięć na poziomie fizycznym i psychicznym...  ',
      content: 'W niezwykły sposób łagodzi wszelkie przewlekłe bóle, usprawnia narządy ruchu, likwiduje sztywność stawów, przykurcze i napięcie mięśniowe oraz stany depresyjne. Pobudza krążenie krwi i limfy, dzięki czemu spowalnia procesy starzenia. Nuad Boran poprawia kondycję fizyczną, emocjonalną i intelektualną. Przynosi kompleksowy relaks. Osoby korzystające z masażu tajskiego doświadczają absolutnego spokoju. Niektórzy klienci, nawet podczas dłuższych sesji, zapadają w cichą drzemkę, aby obudzić się wypoczęty i pełen ENERGII. TM Nuad Boran opiera się na wiedzy o przepływie ENERGII w ludzkim ciele. Łączy w sobie elementy akupresury i refleksologii, w czym okazuje się być podobny do chińskiego masażu tui na, hinduskiego masażu ajurwedyjskiego i japońskiego masażu shiatsu. Wyraźnie łączy ją też z jogą hinduską – charakterystycznym dla niej zastosowaniem technik oddechowych i ćwiczeń rozciągających. Masaż odbywa się bez użycia balsamów i olejków oraz w miękkich ubraniach takich jak dres i koszulka. Powitanie.',
      imgUrl: images.masaz,
    },
    {
      title: 'Tybetańska praktyka', 
      abstract: 'Ciało jest odzwierciedleniem naszego stanu umysłu. Są nierozłącznymi częściami tej samej całości...  ',
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
  
  

  return (
    <section className=' container' >
      <Headlines props={"Metody"} /> 
      <div className="section-wrapper">
        <p className='p-method-text'>{aboutMethods}</p>
        <div className="app__method-wrapper">
          
          { methods.map((method, index) => (

            <div className="app_method-item" key={method.title + index} >
              <h3 className='article-headline'>{method.title}</h3>
              <div className="app_content-wrap ">
                <p className="abstract ">{method.abstract}</p>
                <ButtonWhite  props={"Czytaj więcej"} />
              </div>
              <div className="app_method-img-wrapper">
                <img src={method.imgUrl} alt={method.title} />
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Methods