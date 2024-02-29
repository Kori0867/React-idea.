// Homepage.js
import React from 'react';
import Header from './Header';
import Carousel from './Carousel';
import Maps from './Maps';
import Footer from './Footer';
import Agendarcita from './Agendarcita'; 

function Homepage() {
  return (
    <div>
      <Header />
      <Carousel />
      <Maps />
      <Agendarcita />
      <Footer />
    </div>
  );
}

export default Homepage;
