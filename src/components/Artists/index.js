import React from "react";

// Componente para mostar todos los Artistas disponibles
const Artists = ({ artistList }) => {
  return artistList.map(({ name, id }, index) => (
    <div key={index}>
      <p>
        {name}: {id}
      </p>
    </div>
  ));
};

export default Artists;
