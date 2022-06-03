import React from 'react';

import { About, Contact, Footer, Header, Offer ,Opinions, Price } from './container';
import { Navbar } from './components';

import './styles/global.scss';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Header />
        <Offer />
        <Price />
        <Opinions />
        <About />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;