import React from 'react';

import { About, Blog, Contact, Footer, Header, Methods,Opinions, Price } from './container';
import { Navbar } from './components';

import './styles/global.scss';

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Methods />
      <About />
      <Opinions />
      <Price />
      <Contact />
      <Blog />
      <Footer />
    </>
  );
}

export default App;