import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/Header'

const AppLayout = () => {
  const path = useLocation();
  console.log(path.pathname);
  return (
    <>
    {path.pathname === '/signup' || path.pathname === '/login'?null:<Header/>}
      <Outlet />
    </>
  )
}

export default AppLayout