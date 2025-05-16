import React, { useMemo } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux';

// Custom files
import AppLayout from './layout/AppLayout';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import SettingsPages from './pages/SettingsPages';
import PageNotFound from './pages/PageNotFound';
import theme from '../theme';
import useAuthCheck from './custom-hooks/useAuthCheck';

const App = () => {
  useAuthCheck();
  const appMode = useSelector((state) => state.appMode.mode);

  const isAuth = useSelector((state) => state.auth.isAuth);

  const currentTheme = useMemo(() => theme(appMode), [appMode]);

  const router = useMemo(() => {
    return createBrowserRouter([
      {
        path: '/',
        element: <AppLayout />,
        children: [
          {
            path: '/',
            element: isAuth ? <HomePage /> : <Navigate to="/login" />
          },
          {
            path: '/signup',
            element: !isAuth ? <SignupPage /> : <Navigate to='/' />
          },
          {
            path: '/login',
            element: !isAuth ? <LoginPage /> : <Navigate to='/' />
          },
          {
            path: '/settings',
            element: <SettingsPages />
          },
          {
            path: '/profile',
            element: isAuth ? <SettingsPages /> : <Navigate to='/login' />
          },
          {
            path: '*',
            element: <PageNotFound />
          },
        ]
      }
    ])
  }, [isAuth]);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App