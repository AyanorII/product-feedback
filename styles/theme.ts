import { createTheme, responsiveFontSizes } from "@mui/material";
import {
  BACKGROUND_COLOR,
  DANGER_LIGHT_COLOR,
  DANGER_MAIN_COLOR,
  INFO_DARK_COLOR,
  INFO_LIGHT_COLOR,
  LIGHT_COLOR,
  PRIMARY_LIGHT_COLOR,
  PRIMARY_MAIN_COLOR,
  SECONDARY_LIGHT_COLOR,
  SECONDARY_MAIN_COLOR,
} from "../lib/constants";

let theme = createTheme({
  palette: {
    primary: {
      main: PRIMARY_MAIN_COLOR,
      light: PRIMARY_LIGHT_COLOR,
    },
    secondary: {
      main: SECONDARY_MAIN_COLOR,
      light: SECONDARY_LIGHT_COLOR,
    },
    info: {
      main: INFO_DARK_COLOR,
      dark: INFO_DARK_COLOR,
      light: INFO_LIGHT_COLOR,
    },
    error: {
      main: DANGER_MAIN_COLOR,
      light: DANGER_LIGHT_COLOR,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          borderRadius: "10px",
          color: LIGHT_COLOR,
          fontWeight: "bold",
        },
        containedPrimary: {
          backgroundColor: PRIMARY_MAIN_COLOR,
          "&:hover": {
            backgroundColor: PRIMARY_LIGHT_COLOR,
          },
        },
        containedSecondary: {
          backgroundColor: SECONDARY_MAIN_COLOR,
          "&:hover": {
            backgroundColor: SECONDARY_LIGHT_COLOR,
          },
        },
        containedInfo: {
          backgroundColor: INFO_DARK_COLOR,
          "&:hover": {
            backgroundColor: INFO_LIGHT_COLOR,
          },
        },
        containedError: {
          backgroundColor: DANGER_MAIN_COLOR,
          "&:hover": {
            backgroundColor: DANGER_LIGHT_COLOR,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: BACKGROUND_COLOR,
          color: SECONDARY_MAIN_COLOR,
          fontWeight: "bold",
          padding: "0.5rem 1rem",
          borderRadius: "10px",
          "&.active": {
            backgroundColor: SECONDARY_MAIN_COLOR,
            color: LIGHT_COLOR,
          }
        },
      },
    },
  },
  typography: {
    fontFamily: "Jost, sans-serif",
  },
});

theme = responsiveFontSizes(theme);
export default theme;
