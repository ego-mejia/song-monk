// Crea un componente de clase que muestra un encabezado con el título de la app.
import React from "react";
import logo from "../../assets/logo--large.svg";
import { Link } from "react-router-dom";

// Style
import { Navbar } from "./style"

const Header = () => {
  return (
    <Navbar>
      <Link to="/" className="navbar__img">
        <img src={logo} alt="Logo" />
      </Link>
    </Navbar>
  );
};

export default Header;
