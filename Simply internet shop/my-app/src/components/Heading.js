import React from 'react';
import logo from '../logo.png';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header-container">
      <div className="logo-title"> 
        <img src={logo} alt="Dirty Socks Shop Logo" className="logo" />
        <h1>Dirty Socks Shop</h1>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
      </nav>

    </div>
  );
}
