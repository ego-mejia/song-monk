// Crea un componente de clase que muestra un encabezado con el título de la app.
import React from "react";
import logo from "../../assets/logo-large.svg";

const Header = () => {
  return (
    <header className="navbar">
      <a className="navbar__img">
        <img src={logo} alt="" />
      </a>
      <div className="navbar__links">
        <a href="">Inicio</a>
        <a href="">Nuevo</a>
        <a href="">Newsletter</a>
      </div>
    </header>
  );
};

export default Header;
