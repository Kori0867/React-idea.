import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Importa useLocation
import './Header.css';

function Header() {
  const location = useLocation(); // Obtiene la ubicación actual

  // Determina si se muestran los botones de registro e inicio de sesión
  const showAuthButtons = location.pathname !== '/Agendarcita';

  return (
    <header className="header">
      <h1 className="header-title">Car Diagnostic</h1>
      <div className="header-buttons">
        {showAuthButtons && (
          <>
            <Link to="/registro" className="button">Registrar</Link>
            <Link to="/iniciar-sesion" className="button">Iniciar Sesión</Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
