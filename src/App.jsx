import React, { useState } from 'react';
import NavBar from './components/Navbar.jsx';
import Shop from './pages/Shop.jsx';
import Cart from './pages/cart.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <Router>
      <div style={{ maxWidth: '890px', margin: '0 auto', fontFamily: "Poppins" }}>
        <NavBar cartCount={cartItems.length} />
        <Routes>
          <Route path="/" element={<Shop addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;