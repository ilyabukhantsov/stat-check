import React, { useState } from 'react';
import "./Header.css"
import logo from '../assets/logo.png'; 

export default function Header() {
  // State to manage mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      
      {/* Navigation Links */}
      <nav className={`nav-links ${isOpen ? "open" : ""}`}>
        <img src={logo} alt="FGC logo" className="logo-header"/>
        <button>Forums</button>
        <button>Matches</button>
        <button>Events</button>
        <button>Stats</button>
      </nav>

      {/* Hamburger Icon for Mobile */}
      <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
}