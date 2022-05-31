import React from 'react';
import { Headlines } from '../../components';
import { images } from '../../constants';
import './Teachers.scss'

const Teachers = () => {

  const teachers = [{
    name: "Gunther Krϋger",
    quote: "\"Jest tak wielu czarodziejów komputerów, giełdy, probówek i sportu widowiskowego, a tak niewielu sztuki życia.\"",
  },
  {
    name: "Krzysztof Szabat",
    quote: ""
  },
  {
    name: "Mantak Chia",
    quote: ""
  },
  {
    name: "Takashi Yoshizawa",
    quote: ""
  },
  {
    name: "M. Zenhua Yang",
    quote: ""
  },
]
  

    
  return (
      <section className=' container' >
        <Headlines props={"Nauczyciele"} /> 
        <div className=" section-wrapper">
          <div className="app__teacher-list">
            <div className="app__teacher-item">
              {
                teachers.map((teacher, index) => (
                  <div key={teacher + index} >
                      <ul>
                        <li>{teacher.name}</li>
                      </ul>
                  </div>
                ))
              }
            </div>
            <div className="app_about-img-wrap">
              <img src={images.joga} alt='logo' />
            </div>

          </div>
          <div className="app__quote">
            <div className="text-wrap" >
              <p>{teachers[0].name}</p>
              <p>{teachers[0].quote}</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Teachers