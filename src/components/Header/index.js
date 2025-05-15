// Crea un componente de clase que muestra un encabezado con el título de la app.
import React from "react";
import logo from "../../assets/logo-large.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="navbar">
      {/* <a className="navbar__img">
        <img src={logo} alt="" />
      </a> */}
      <Link to="/" className="navbar__img">
        <img src={logo} alt="Logo" />
      </Link>
      <div className="navbar__links">
        <Link to="/">Inicio</Link>
        <Link to="/song">Artistas</Link>
        <Link to="/song">Documentación</Link>
      </div>
    </header>
  );
};

export default Header;
