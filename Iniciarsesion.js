// IniciarSesion.js
import React from 'react';

function IniciarSesion() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para manejar el inicio de sesión
    window.location.reload(); // Recargar la página
    window.location.href = '/Agendarcita'; // Redirigir a la nueva página
  };

  return (
    <div className="form-container">
      <h2>Página de Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="correo" className="form-label">Correo:</label>
          <input type="email" id="correo" name="correo" required className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="contrasena" className="form-label">Contraseña:</label>
          <input type="password" id="contrasena" name="contrasena" required className="form-control"/>
        </div>
        <button type="submit" className="btn">Continuar</button>
      </form>
    </div>
  );
}

export default IniciarSesion;
