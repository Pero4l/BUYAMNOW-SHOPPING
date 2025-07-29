import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import PageLayout from './Components/Layout/PageLayout'
import Home from './Components/Pages/Home'
import ShoppingCart from './Components/Pages/ShoppingCart'
import { Server } from './LocalServer'
import CartView from './Components/cart'
import ProductDetails from './Components/Pages/ProductDetails'

function App() {
 

  return (
    <>
      <div>
        <Routes>
            <Route element={<PageLayout />}>
            <Route path="/" element={<Home  Server={Server}/>} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path='/product/:id' element={<ProductDetails Server={Server}/> } />
            <Route path="/cartview" element={<CartView />} />
            </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
