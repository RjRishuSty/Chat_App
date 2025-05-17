// theme.js
import { createTheme } from "@mui/material/styles";


const setAppMode = (mode) => ({
    palette: {
        mode,
        background: {
            default: mode === 'light' ? "#ffff" : '#17153B',      // Body background
            main: mode === 'light' ? '#FFFDF6' : '#2E236C',
            primary: mode === 'light' ? "#f1e6c1" : '#000',
            opitonal: '#f2f8ed'  // Icon backgrond
        },
        primary: {
            main: mode === 'light' ? "#A0C878" : "#C8ACD6",         // Accent color for buttons, links, icons
            contrastText: mode === 'light'?"#121212" :'#fff',
        },
        text: {
            default: '#fff',
            primary: mode === 'light' ? "#121212" : '#ffff',
            secondary: mode === 'light' ?"#4F4F4F":'#fff',
        },
        links: {
            main: mode === 'light' ? "#6a4dff" : '#C8ACD6'  // For links
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
                    color: "#A0C878",
                },
            },
        },
    },
    MuiOutlinedInput: {
        styleOverrides: {
            root: {
                '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'black', // Default
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#FFFDF6', // Focus color
                },
            },
        },
    },
    MuiLink: {
        styleOverrides: {
            root: {
                color: 'links.main',
                textDecoration: 'underline', // Optional: remove underline
                '&:hover': {
                    textDecoration: 'underline', // Optional: add underline on hover
                },
            },
        },
    }
});

const theme = (mode = "light") => createTheme(setAppMode(mode));

export default theme;
