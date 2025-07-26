import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import PageLayout from './Components/Layout/PageLayout'
import Home from './Components/Pages/Home'
import ShoppingCart from './Components/Pages/ShoppingCart'

function App() {
 

  return (
    <>
      <div>
        <Routes>
            <Route element={<PageLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<ShoppingCart />} />
            </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
