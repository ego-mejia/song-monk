import styled from "styled-components"
import { debugBackground } from "../../styles/mixins"

export const MainContainer = styled.div`
    ${debugBackground("yellow")}


`;
export const ImageContainer = styled.div`
    ${debugBackground("blue")}
    
    height: 250px;
    width: 170px;
    overflow: hidden;
    
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        border: 1px solid ${(props) => props.theme.colors.secondary};
        box-shadow: 0 0 10px ${(props) => props.theme.colors.secondary}; 
    }

    img{
          width: 100%;
            height: 100%;
            object-fit: cover; /* recorta, no deforma */
    }

`;