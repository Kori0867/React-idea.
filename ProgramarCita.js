import React from 'react';

function ProgramarCita() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // FORMULARIO CITAS
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Programar Cita</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required className="form-control"/>
        </div>
      
        <button type="submit" className="btn btn-primary">Programar Cita</button>
      </form>
    </div>
  );
}

export default ProgramarCita;
