import React from 'react';

import {
  About,
  News,
  Contact,
  Footer,
  Header,
  Offer,
  Opinions,
  Price,
} from './container';
import { Navbar, PopUp } from './components';

import './styles/global.scss';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Header />
        <Offer />
        <Opinions />
        <Price />
        <About />
        <News />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default App;
