import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/Header'

const AppLayout = () => {
  const path = useLocation();
  return (
    <>
    {path.pathname === '/signup' || path.pathname === '/login' || path.pathname === '/logout'?null:<Header/>}
      <Outlet />
    </>
  )
}

export default AppLayout