import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#000000"

        },
        background: {
            default: "#FFFFFF",
            paper: "#F9F9F9"
        },
        info: {
            main:"#FBC02D"
        }
    },

    typography: {
        fontFamily: "Inter, Arial, sans-serif",

         h4: {
      fontFamily: "Source Serif 4, Georgia, serif",
      fontSize: "1.5rem",
      fontWeight: 600,
    },

    body1: {
      fontSize: "1.125rem",
      lineHeight: 1.7,
    },
    }

})