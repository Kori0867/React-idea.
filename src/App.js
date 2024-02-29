import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Carousel from './Carousel';
import Footer from './Footer';
import Registro from './Registro';
import Iniciarsesion from './Iniciarsesion';
import Agendarcita from './Agendarcita';
import Maps from './Maps';


function App() {
  return (
    <Router>
      <div style={{ marginBottom: '50px' }}>
        <Header />
        <Carousel />
        <Maps />
        <Routes>
          <Route path="/registro" element={<Registro />} />
          <Route path="/iniciar-sesion" element={<Iniciarsesion />} />
          <Route path="/Agendarcita" element={<Agendarcita />} />

        </Routes>
      </div>
       <Footer />
    </Router>
  );
}

export default App;
