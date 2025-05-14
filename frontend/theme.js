// theme.js
import { createTheme } from "@mui/material/styles";


const setAppMode = (mode) => ({
    palette: {
        mode,
        background: {
            default: mode === 'light' ? "#F5F5F5" : '#17153B',      // Body background
            main: mode === 'light' ? '#F8E7F6' : '#2E236C',
            primary: mode === 'light' ? "#e9afdf" : '#000',
            opitonal: '#eae6ff'  // Icon backgrond
        },
        primary: {
            main: mode === 'light' ? "#C5BAFF" : "#C8ACD6",         // Accent color for buttons, links, icons
            contrastText: "#121212",
        },
        text: {
            default: '#000',
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
                    color: "#C5BAFF",
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
                    borderColor: '#e9afdf', // Focus color
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
