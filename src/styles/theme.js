//* Base de colores para el tema claro
const lightColors = {
  primary: "#FFB623",
  secondary: "#E55117",
  title: "#000000",
  text: "#909090",
  background: "#f8f9fa",
  // border: "#dee2e6",
};


//* Propiedades compartidas (no cambian entre temas)
const commonProps = {
  fonts: {
    main: "'Roboto', sans-serif",
    heading: "'Bangers', system-ui",
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px",
  },
  borderRadius: "10px",
};

//? Objeto del tema claro
export const theme = {
  colors: lightColors,
  ...commonProps,
};
