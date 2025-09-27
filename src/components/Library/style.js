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
  background-color: red;
  width: 36px;
  height: 36px;
`;
