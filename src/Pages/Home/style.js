import styled from "styled-components";
import { flexCenter } from "../../styles/mixins";

export const HomePage = styled.section`
  background-color: magenta;

  display: flex;
  flex-direction: row;

  /* align-items: center; */
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;
export const ArtistSection = styled.section`
  background-color: red;

  ${flexCenter("column")}
  justify-content: start;

  width: 100%;
  max-width: 350px;
  gap: 20px;

  height: 89.5vh; /* ocupa exactamente el alto de la pantalla */
  overflow-y: auto; /* permite scroll interno si el contenido se desborda */
`;

export const SearchedAlbumSection = styled.section`
  background-color: cyan;

  ${flexCenter("column")}
  justify-content: start;
`;

export const LibrarySection = styled.section`
  background-color: green;
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 350px;
  gap: 20px;

  height: 89.5vh; /* ocupa exactamente el alto de la pantalla */
  overflow-y: auto; /* permite scroll interno si el contenido se desborda */
`;
