import styled from "styled-components";
import { buttonBase, flexCenter } from "../../styles/mixins";

export const LibraryAlbum = styled.div`
  background-color: yellow;
  ${flexCenter("column")}

  img {
    width: 100%;
    max-width: 200px;
  }
`;

export const Titles = styled.div`
  display: flex;
  gap: 20px;
`;

export const RemoveAlbumButton = styled.button`
  ${buttonBase}
  ${flexCenter("row")}
  background-color: ${(props) => props.theme.colors.secondary};
  width: 37px;
  height: 37px;

  /* Posicion en la esquina superior derecha del album */
  position: absolute;
  top: 0;
  right: 0;
`;

export const Content = styled.div`
  ${flexCenter("column")}
  align-items:start;
`;

export const ImageContainer = styled.div`
  position: relative;
`;
