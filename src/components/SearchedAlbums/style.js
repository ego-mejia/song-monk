import styled  from "styled-components";

export const AlbumCard = styled.div`
    background-color: yellow;
    max-width: 350px;
    display: flex;
    flex-direction: column;
    gap: 15px;

    img{
        width: 100%;
    }
    
    h1{
        color: ${(props) => props.theme.colors.primary}; 
    }
    
    p{
        color: ${(props) => props.theme.colors.text};
        font-weight: bold;
        font-size: 18px;
    }
`;

export const AlbumCardInformation = styled.div`
    display:flex;
    flex-direction: column;
    gap: 10px;
`;
export const AlbumCardTitles = styled.div`
    display: flex;
    gap: 20px;
`;