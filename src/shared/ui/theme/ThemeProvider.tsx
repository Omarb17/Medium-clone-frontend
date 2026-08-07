"use client";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import CssBaseline from "@mui/material/CssBaseline";


export function ThemeProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
         <MuiThemeProvider theme={theme}>
     <CssBaseline />
      {children}
    </MuiThemeProvider>
    )
}