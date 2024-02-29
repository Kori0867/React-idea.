// Agendarcita.js
import React from 'react';

function Agendarcita() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // envío del formulario de agendar cita

    //  mensaje de confirmación para el usuario
    window.alert('Se ha registrado su cita.');

    // Recarga la página
    window.location.reload();
  };

  return (
    <div className="form-container">
      <h2>Agendarcita</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fecha" className="form-label">Fecha:</label>
          <input type="date" id="fecha" name="fecha" required className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="hora" className="form-label">Hora:</label>
          <input type="time" id="hora" name="hora" required className="form-control"/>
        </div>
        
        <button type="submit" className="btn">Agendar</button>
      </form>
    </div>
  );
}

export default Agendarcita;
