import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Heading';
import Landing from './components/Landing';
import Products from './components/Products';
import About from './components/About';
import Footer from './components/Footer';
import TotalPrice from './components/TotalPrice';
import './App.css';

export default function App() {
  // **State**
  const location = useLocation();            // Get the current page/route
  const [totalPrice, setTotalPrice] = useState(0);   // Initialize total price to 0
  const [showTotalPrice, setShowTotalPrice] = useState(false);  // Initially hide TotalPrice component

  // **Buy Button Handler**
  const handleBuyClick = (price) => {
    setTotalPrice(prevPrice => prevPrice + price); // Add price to total
    setShowTotalPrice(true);  // Show the TotalPrice component
  };

  return (
    <div className='App'>
      {/* Header */}
      <Header />

      {/* Content Wrapper (holds main content and TotalPrice) */}
      <div className="content-wrapper">  
        
        {/* Total Price Component (conditional rendering) */}
        {showTotalPrice && location.pathname !== '/' && ( // Show only on non-home pages after purchase
          <TotalPrice total={totalPrice} /> 
        )}

        {/* Main Content (Routes) */}
        <main className="main-content">
          <Routes>
            {/* Routes to different components */}
            <Route 
              exact path="/" 
              element={<Landing onBuy={handleBuyClick} />} 
            />
            <Route 
              path="/products" 
              element={<Products onBuy={handleBuyClick} />} 
            />
            <Route path="/about" element={<About />} />   
          </Routes>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
