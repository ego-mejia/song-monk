//* Agregar caracteristicas como mixin para flexbox.

import { css } from "styled-components";

// Mixin para estilos comunes de botones
export const buttonBase = css`
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  font-size: 20px;
`;

// Mixin para centrar con flex y permitir dirección dinámica
// Ej.   ${flexCenter("row")}
export const flexCenter = (direction = "row") => css`
  /* Por default se selecciona "row",
  para seleccionar columna debe de escribirse "column".
  
  Ej.;
  export const CenteredRow = styled.div
  flexCenter("row")

  export const CenteredColumn = styled.div
  flexCenter("column")

  */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: ${direction};
`;
