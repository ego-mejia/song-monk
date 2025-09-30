// src/components/ArtistCard.jsx
import React from "react";


// Style
import { MainContainer,
  ImageContainer
 } from './style'

const ArtistCard = ({ name, img, id }) => {
  return (
    <MainContainer>
      <ImageContainer>
        <img src={img} alt={name}/>
      </ImageContainer>
      
      <h3>{name}</h3>
      <p>ID: {id}</p>
    </MainContainer>
  );
};

export default ArtistCard;
