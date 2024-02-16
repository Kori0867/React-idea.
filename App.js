import React from 'react';
import './App.css';
import Header from './Header';
import Formulario from './Formulario';
import Footer from './Footer';
//importamos lo necesario para que funcione.

function App() {
  const handleFormSubmit = () => {
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <div className="App">
      <Header />
      <Formulario onSubmit={handleFormSubmit} />
      <Footer />
    </div>
  );
}

export default App;

