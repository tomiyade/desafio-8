import React from 'react'
import "./app/style.css"
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart'
import ItemDetailContainer from './components/ItemDetailContainer'
import CartProvider from './context/CartContext'



const App = () => {



  return (
    <>
      <BrowserRouter>
        <NavBar />
        <CartProvider>
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
