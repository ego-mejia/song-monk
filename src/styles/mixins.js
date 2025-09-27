//* Agregar caracteristicas como mixin para flexbox.

import { css } from "styled-components";

// Mixin para estilos comunes de botones
export const buttonBase = css`
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

// Mixin para centrar con flexbox
export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
