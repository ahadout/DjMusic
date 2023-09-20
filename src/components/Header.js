import React from 'react'
import { Link } from "react-router-dom";
import '../assets/css/style.css'

function Header() {
  return (
    <header className="header-container">
        {/* Logo */}
        <div className="logo">
          LOGO
        </div>

        {/* Navigation Menu */}
        <nav className="nav-menu">
          <Link to="/">Home</Link>
          <Link to="/hard-drives">Hard drives</Link>
          <Link to="/cloud-drives">Cloud drives</Link>
          <Link to="/screenshots">Screenshots</Link>
          <Link to="/preview">Preview</Link>
          <Link to="/about">About</Link>
        </nav>

        {/* Login and Sign Up */}
        <div className="auth-links">
          <a href="/login">Login</a>
          <a href="/signup" className="signup-link">Sign Up</a>
        </div>
    </header>
  )
}

export default Header