import styled from "styled-components";

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
  background-color: red;
  width: 36px;
  height: 36px;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;
`;
