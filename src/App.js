import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componentes/Header';
import Screen from './componentes/Screen';
import Home from './componentes/Home';
import Features from './componentes/Features';
import Pricing from './componentes/Pricing';
import Cart from './componentes/Cart';

function App() {
  const [cart, setCart] = useState({});


  useEffect(() => {
    setCart(JSON.parse(window.localStorage.getItem("cart")));
  }, []);

  useEffect(() => {
    if(Object.keys(cart).length){
      window.localStorage.setItem("cart", JSON.stringify(cart));
    } 
    
  }, [cart]);


  return (
    <Router>
    <div className="App">
      <Header/>
      <Screen cart={cart} setCart={setCart}>
      <Routes>
      <Route path="/home" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>
      </Screen>
    </div>
    </Router>
  );
}

export default App;
