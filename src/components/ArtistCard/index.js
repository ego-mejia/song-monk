// src/components/ArtistCard.jsx
import React from "react";


// Style
import { MainContainer,
  ImageContainer
 } from './style'

const ArtistCard = ({ name, img, id, setFormData }) => {
  const handleClick = () => {
    setFormData(id)
  }

  return (
    <MainContainer onClick={handleClick}>
      <ImageContainer>
        <img src={img} alt={name}/>
      </ImageContainer>
      
      <h3>{name}</h3>
    </MainContainer>
  );
};

export default ArtistCard;
