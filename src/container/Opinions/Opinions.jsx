import React, { useState, useEffect }from 'react';
import { Headlines } from '../../components';

import { images } from '../../constants';

import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { RiDoubleQuotesL  } from 'react-icons/ri';
import './Opinions.scss';

const Opinions = () => {

  const testimonialsArr = [ 
    {
      name: "Katarzyna Kowalska",
      feedback: "As I embark on the seemingly impossible task of trying to replace Olivia Marley, I realise just how lucky I was to find such a grounding, compassionate and inspiring yoga teacher in London. I’ve just relocated to Beijing and my Yoga with Olivia classes are one of the first things I’m missing (after my mum and M&S). Olivia teaches in a way that makes it accessible for everyone - when I joined her class I knew absolutely nothing about yoga - but I now have a solid understanding of physical alignment and generally the way my own body moves!"
    },
    {
      name: "Aleksandra Wilk",
      feedback: " I just wanted to say a huge thank you for the retreat! After a really busy period it was just the ticket and perfectly balanced in terms of yoga sessions, things to do and time to ourselves. You were also an incredible host and the sunset yoga was amazing!! I felt like I got a lot out of the sessions, all of which I’m hoping to remember in classes (although I’ll put my hands up to possibly being lazy and forgetting at times! ). FYI, also going to be booking in for me and a friend for the January London retreat day :)"
    },
    {
      name: "Wiktoria Raczyńska",
      feedback: "I thought the yoga was great, the food was delicious, my room and the villa was absolutely delightful, and the company was lovely. Thank you for organising such a lovely week! It was much needed, massively relaxing, and I learnt loads too, as well as it being tons of fun."
    },
    {
      name: "Jakub Królikiewicz",
      feedback: " I just wanted to say a huge thank you for the retreat! After a really busy period it was just the ticket and perfectly balanced in terms of yoga sessions, things to do and time to ourselves. You were also an incredible host and the sunset yoga was amazing!! I felt like I got a lot out of the sessions, all of which I’m hoping to remember in classes (although I’ll put my hands up to possibly being lazy and forgetting at times! ). FYI, also going to be booking in for me and a friend for the January London retreat day :)"
    }
  ]

  const handleClick = (index) => {
    console.log(index);
    setCurentIndex(index);
  }

  const [currentIndex, setCurentIndex ] = useState(0);

  const test = testimonialsArr[currentIndex];

  return (

    <section >
      <Headlines props={"Opinie"} /> 
        <div className="section-spaceing ">
          <div className="app__opinions-content">
            
            { testimonialsArr.length && (
                <div  className="app__testimonial-item ">
                  <div className="app__next" onClick={() => handleClick(currentIndex === 0 ? testimonialsArr.length - 1 : currentIndex - 1)}>
                      <HiChevronLeft />
                  </div>
                  <div className="app__testimonial-content">
                    <div className="app__testimonial-quote">
                      {/* <img src={images.quote} alt="quote" /> */}
                      <p>" {test.feedback} "</p>
                      {/* <img src={images.quote} alt="quote" /> */}
                    </div>
                    <p className="app__name">{test.name}</p>
                  </div>
                  <div className="app__next" onClick={() => handleClick(currentIndex === testimonialsArr.length - 1 ? 0 : currentIndex + 1)}>
                      <HiChevronRight />
                  </div>
                </div>
            ) }
            
          </div>
        </div>
    </section>
  )
}

export default Opinions