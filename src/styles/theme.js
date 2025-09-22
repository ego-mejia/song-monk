//* Base de colores para el tema claro
const lightColors = {
  primary: "#007bff",
  secondary: "#6c757d",
  text: "#333333",
  background: "#f8f9fa",
  border: "#dee2e6",
};

//* Base de colores para el tema oscuro
const darkColors = {
  primary: "#87ceeb", // Un azul más claro para el modo oscuro
  secondary: "#adb5bd",
  text: "#f8f9fa",
  background: "#212529",
  border: "#495057",
};

//* Propiedades compartidas (no cambian entre temas)
const commonProps = {
  fonts: {
    main: "Arial, sans-serif",
    heading: "Georgia, serif",
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px",
  },
  borderRadius: "4px",
};

//? Objeto del tema claro
export const lightTheme = {
  colors: lightColors,
  ...commonProps,
};

//? Objeto del tema oscuro
export const darkTheme = {
  colors: darkColors,
  ...commonProps,
};
