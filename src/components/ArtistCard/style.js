import styled from "styled-components"


export const MainContainer = styled.div`
    background-color: yellow;

`;
export const ImageContainer = styled.div`
    background-color: blue;
    height: 250px;
    width: 170px;
    overflow: hidden;
    
    border-radius: 10px;
    cursor: pointer;

    img{
          width: 100%;
            height: 100%;
            object-fit: cover; /* recorta, no deforma */
    }

`;