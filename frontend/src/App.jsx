//! importing install dependencies.............
import React, { useMemo } from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

//! Importing created file.............
import AppLayout from './layout/AppLayout';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import SettingsPages from './pages/SettingsPages';
import PageNotFound from './pages/PageNotFound';
import theme from '../theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux';

const App = () => {
  const appMode = useSelector((state) => state.appMode.mode);
  const auth = useSelector((state) => state.auth.auth);
  console.log(auth);
  const currentTheme = useMemo(() => theme(appMode), [appMode]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: auth ? <HomePage /> : <Navigate to="/login" />
        },
        {
          path: '/signup',
          element: !auth ? <SignupPage /> : <Navigate to='/' />
        },
        {
          path: '/login',
          element: !auth ? <LoginPage /> : <Navigate to='/' />
        },
        {
          path: '/settings',
          element: <SettingsPages />
        },
        {
          path: '/profile',
          element: auth ? <SettingsPages /> : <Navigate to='/login' />
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