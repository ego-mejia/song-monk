// src/components/ArtistCard.jsx
import React from "react";

// Style
import { MainContainer,
  ImageContainer
 } from './style'


// Redux
import { useDispatch } from "react-redux";

const ArtistCard = ({ name, img, id /*,setFormData*/ }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    // setFormData(id) Se remplaza por el dispatch
    
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
