//! importing install dependencies.............
import { SnackbarProvider } from 'notistack';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/nunito';

//! Importing created file.............
import './index.css'
import App from './App.jsx'
import '@fontsource/nunito';
import { Provider } from 'react-redux';
import store from './store/store.js';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SnackbarProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </SnackbarProvider>
  </StrictMode>,
)
