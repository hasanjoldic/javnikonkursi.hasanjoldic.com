import type { Color } from "@mui/material";
import createTheme from "@mui/material/styles/createTheme";

const bosniaBlue: Color = {
  "50": "#e0e3f1",
  "100": "#b3b9dc",
  "200": "#808ac4",
  "300": "#4d5bac",
  "400": "#26379b",
  "500": "#001489",
  "600": "#001281",
  "700": "#000e76",
  "800": "#000b6c",
  "900": "#000659",
  A100: "#8b8cff",
  A200: "#585aff",
  A400: "#2528ff",
  A700: "#0b0fff",
};

export const theme = createTheme({ palette: { primary: bosniaBlue } });

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fff",
    },
    background: {
      default: "#FCF9F6",
    },
  },
});
