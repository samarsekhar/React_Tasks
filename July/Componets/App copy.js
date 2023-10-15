import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../../src/Components/Navbar";
import Home from "../../src/Components/Home";
import Products from "../../src/Components/Products";
import Product from "../../src/Components/Product";
import Cart from "../../src/Components/Cart";
import { CartProvider } from "react-use-cart";
import Login from "../../src/Components/Login";
import Register from "../../src/Components/Register";
import About from "../../src/Components/About";

const App = () => {
  return (
    <>
      <Router>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Products" element={<Products />} />
            <Route path="products/:id" element={<Product />} />
            <Route path="Cart" element={<Cart />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="about" element={<About />} />
          </Routes>
        </CartProvider>
      </Router>
    </>
  );
};

export default App;
