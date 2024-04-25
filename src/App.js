import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componentes/Header';
import Screen from './componentes/Screen';
import Home from './componentes/Home';
import Features from './componentes/Features';
import Pricing from './componentes/Pricing';
import Cart from './componentes/Cart';

function App() {
  const [cart, addToCart] = useState([]);

  return (
    <Router>
    <div className="App">
      <Header/>
      <Screen cart={cart} addToCart={addToCart}>
      <Routes>
      <Route path="/home" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </Screen>
    </div>
    </Router>
  );
}

export default App;
