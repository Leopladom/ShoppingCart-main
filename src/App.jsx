import React from "react";
import { ItemList } from "./components/ItemList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShoppingCart } from "./components/ShoppingCart";

import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";
import Footer from "./components/Footer";
import MyAppBar from "./components/MyAppBar";

export const App = () => {
  return (
    <ShoppingCartProvider>
      
      <Router>
        <MyAppBar />
        
        <Routes>
          
          <Route path="/" element={<ItemList />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
        
        <Footer />
      </Router>
    </ShoppingCartProvider>
  );
};
