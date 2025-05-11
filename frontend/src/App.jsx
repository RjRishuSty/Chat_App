//! importing install dependencies.............
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//! Importing created file.............
import AppLayout from './layout/AppLayout';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import SettingsPages from './pages/SettingsPages';
import PageNotFound from './pages/PageNotFound';

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
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
  return <RouterProvider router={router} />
}

export default App