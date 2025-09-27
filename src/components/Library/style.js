import styled from "styled-components";
import { buttonBase, flexCenter } from "../../styles/mixins";

export const LibraryAlbum = styled.div`
  background-color: yellow;
  position: relative;
  img {
    width: 100%;
  }
`;

export const LibraryAlbumTitles = styled.div`
  display: flex;
  gap: 20px;
`;

export const RemoveAlbumButton = styled.button`
  ${buttonBase}
  ${flexCenter}
  background-color: ${(props) => props.theme.colors.secondary};
  width: 37px;
  height: 37px;

  /* Posicion en la esquina superior derecha del album */
  position: absolute;
  top: 0;
  right: 0;
`;
