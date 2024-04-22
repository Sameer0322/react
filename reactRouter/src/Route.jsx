import React from 'react'
import Header from './components/Headers/Header'
import Footer from './components/Footers/Footer'
import Home from './components/Home/Home'
import { Outlet } from 'react-router-dom'
function Route() {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />

    </>
  )
}

export default Route