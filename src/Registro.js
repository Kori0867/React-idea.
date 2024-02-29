import React, { useState } from 'react';
import './Estiloformulario.css';

// Registro.js

function Registro() {
  const [usuarios, setUsuarios] = useState({});
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [registroExitoso, setRegistroExitoso] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Almacena los datos del usuario registrado
    setUsuarios({
      ...usuarios,
      [correo]: contrasena
    });

    // Indica que el registro fue exitoso
    setRegistroExitoso(true);
  };

  return (
    <div className="form-container">
      <h2>Página de Registro</h2>
      {registroExitoso && <p>¡Registro exitoso!</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre" className="form-label">Nombre:</label>
          <input type="text" id="nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="apellido" className="form-label">Apellido:</label>
          <input type="text" id="apellido" name="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} required className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="correo" className="form-label">Correo:</label>
          <input type="email" id="correo" name="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} required className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="telefono" className="form-label">Teléfono:</label>
          <input type="tel" id="telefono" name="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} required className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="contrasena" className="form-label">Contraseña:</label>
          <input type="password" id="contrasena" name="contrasena" value={contrasena} onChange={(e) => setContrasena(e.target.value)} required className="form-control"/>
        </div>
        <button type="submit" className="btn">Continuar</button>
      </form>
    </div>
  );
}

export default Registro;
