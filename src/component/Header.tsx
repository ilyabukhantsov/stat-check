import React, { useState } from 'react';
import "./Header.css"

export default function Header() {
  // State to manage mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      
      {/* Navigation Links */}
      <nav className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
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