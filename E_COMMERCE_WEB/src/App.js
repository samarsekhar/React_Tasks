import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Products from './Components/Products';
import Product from './Components/Product';
import Cart from './Components/Cart';
import { CartProvider } from 'react-use-cart';
import Login from './Components/Login';
import Register from './Components/Register';
import About from './Components/About';

const App = () => {
  return (
    <>
      <Router>
        <CartProvider> 
          <Navbar />
          <Routes>
            <Route path='Home' element={<Home />} />
            <Route path='Products' element={<Products />} />
            <Route path='products/:id' element={<Product />} />
            <Route path='Cart' element={<Cart />} />
            <Route path='login' element={<Login/>} />
            <Route path='register' element={<Register/>} />
            <Route path='about' element={<About/>} />
          </Routes>
        </CartProvider>
      </Router>
    </>
  )
}

export default App