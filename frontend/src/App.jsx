//! importing install dependencies.............
import React, { useMemo, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//! Importing created file.............
import AppLayout from './layout/AppLayout';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import SettingsPages from './pages/SettingsPages';
import PageNotFound from './pages/PageNotFound';
import theme from '../theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

const App = () => {

  const [appMode, setAppMode] = useState("light");
  const currentTheme = useMemo(() => theme(appMode), [appMode]);

  const toggleAppMode = () => {
    setAppMode((prev) => (prev === "light" ? "dark" : "light"));
  };
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout toggleAppMode={toggleAppMode} />,
      children: [
        {
          path: '/',
          element: <HomePage />
        },
        {
          path: '/signup',
          element: <SignupPage />
        },
        {
          path: '/login',
          element: <LoginPage />
        },
        {
          path: '/settings',
          element: <SettingsPages />
        },
        {
          path: '*',
          element: <PageNotFound />
        },
      ]
    }
  ])
  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App