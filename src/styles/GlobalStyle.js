// * Estilos globales como body, html, tipos de letra, etc.
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: ${(props) => props.theme.fonts.main};

    // Si quieres quitar la decoración del texto y los bordes para los elementos específicos
    // puedes descomentar estas líneas
    // text-decoration: none;
    // outline: none;
    // border: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  //Estilos para todos los encabezados
  h1, h2, h3, h4, h5, h6{
    font-family: ${(props) => props.theme.fonts.heading};
  }

  h1 {
    font-size: clamp(24px, 5vw, 40px);
  }

  h2 {
    font-size: clamp(18px, 3vw, 30px);
  }

  p {
    font-size: clamp(14px, 2vw, 20px);
}

`;

export default GlobalStyle;
