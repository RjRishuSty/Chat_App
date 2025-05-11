//! importing install dependencies.............
import { SnackbarProvider } from 'notistack';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/nunito';

//! Importing created file.............
import './index.css'
import App from './App.jsx'
import '@fontsource/nunito';
import { ThemeProvider } from '@emotion/react';
import theme from '../theme.js';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SnackbarProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </SnackbarProvider>
  </StrictMode>,
)
