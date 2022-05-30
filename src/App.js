import React from 'react';

import { About, Articles, Contact, Footer, Header, Methods,Opinions, Price, Teachers } from './container';
import { Navbar } from './components';

import './styles/global.scss';

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Methods />
      <About />
      <Teachers />
      <Opinions />
      <Price />
      <Contact />
      <Articles />
      <Footer />
    </>
  );
}

export default App;