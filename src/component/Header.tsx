import React, { useState } from 'react';
import "./Header.css"
import logo from '../assets/logo.png'; 
import NavigationButton from './NavigationButton';
import Form from './Form';

export default function Header() {
  // State to manage mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  function goHome(): void {
    console.log("Main");
  }

  function goProfile(): void {
    console.log("Profile");
  }

  return (
    <header className="header">
      
      {/* Navigation Links */}
      <nav className={`nav-links ${isOpen ? "open" : ""}`}>
      <img src={logo} alt="FGC logo" className="logo-header"/>
      <Form />
      <NavigationButton onClick={goHome}>
        Main
      </NavigationButton>

      <NavigationButton onClick={goProfile}>
        Profile
      </NavigationButton>
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