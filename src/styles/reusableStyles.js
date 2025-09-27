// * Componentes reutilizables como botones, tarjetas, etc.

import styled from "styled-components";
import { buttonBase, flexCenter } from "./mixins";

export const CardWrapper = styled.div`
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ActionButton = styled.button`
  ${buttonBase}
  width: 100%;
  height: 52px;
  background-color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: 20px;
`;
