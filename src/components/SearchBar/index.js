// TODO: Crea un componente SearchBar que incluya:
// Un input para ingresar el nombre de un artista.
// Un botón o funcionalidad que dispare la búsqueda al hacer clic o presionar Enter.
// 1.- Conecta este componente al estado principal en App utilizando useState para guardar el término de búsqueda ingresado por el usuario.
// 2.- Cada vez que se envíe una búsqueda, realiza una petición al endpoint de búsqueda de álbumes en la API utilizando el término ingresado.
// 3.- Asegurate de que el formulario sea controlado por React
import React, { useState } from "react";
const SearchBar = ({ formData, setFormData }) => {
  // const [formData, setFormData] = useState({
  //   search: "",
  // });

  // Agregar un usestate para guardar la busqueda del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el envío tradicional del formulario
    console.log("Datos enviados:", formData);
    // Aquí puedes hacer algo con los datos, como enviarlos a una API
  };

  return (
    <form onSubmit={handleSubmit} className="searchbar">
      <div className="searchbar__container">
        <label className="block">Buscar canción:</label>
        <input
          type="text"
          name="search"
          value={formData.name}
          onChange={handleChange}
        />
        <button type="submit">Buscar</button>
      </div>
    </form>
  );
};

export default SearchBar;
