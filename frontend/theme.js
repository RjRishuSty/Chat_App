// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: "light",
        background: {
            default: "#F5F5F5",      // Body background
            main:'#F8E7F6',  //card
            primary:"#DD88CF",
        },
        primary: {
            main: "#C5BAFF",         // Accent color for buttons, links, icons
            contrastText: "#121212",
        },
        text: {
            primary: "#121212",      // Main readable text
            secondary: "#4F4F4F",    // Subtext or less emphasized text
        },
        secondary:{
            default:'#ffffff',
        },
        divider: "#D1D1D1",
    },
    typography: {
        fontFamily: "Nunito, sans-serif",
        h1: { fontWeight: 700 },
        h2: { fontWeight: 600 },
        h3: { fontWeight: 600 },
        h4: { fontWeight: 600 },
        body1: { fontSize: 16 },
        body2: { fontSize: 14 },
    },
    components: {
        MuiIconButton: {
            styleOverrides: {
                root: {
                    color: "#C5BAFF",
                },
            },
        },
    },
});

export default theme;
