import React from "react";

const Artists = ({ artistList }) => {
  return artistList.map(({ name, id }, index) => (
    <div className="artists__card" key={index}>
      <p>{name}</p>
      <p>{id}</p>
    </div>
  ));
};

export default Artists;
