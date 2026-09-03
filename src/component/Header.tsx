import React, { useState } from 'react';
import "./Header.css"
import logo from '../assets/logo.png';
import NavigationButton from './NavigationButton';
import Form from './Form';

export default function Header({ children }: { children: React.ReactNode }) {
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
       {children}
    </header>
  );
}
