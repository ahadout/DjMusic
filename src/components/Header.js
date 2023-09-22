import React, {useState, useEffect, useRef} from 'react';
import { Link } from "react-router-dom";
import "../assets/css/Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark} from '@fortawesome/free-solid-svg-icons';
import logo from "../assets/images/djmusic_logo.png";

function Header() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive-nav");
  }
  
  return (
    <header className="header-container">
        {/* Logo */}
        <div className="logo">
        <Link to="/"><img src={logo} alt="DjMusic Logo" /></Link>
        </div>

        {/* Navigation Menu */}
        <nav ref={navRef} className="nav-menu">
          <Link className='nav-link' to="/">Home</Link>
          <Link className='nav-link' to="/hard-drives">Hard drives</Link>
          <Link className='nav-link' to="/cloud-drives">Cloud drives</Link>
          <Link className='nav-link' to="/screenshots">Screenshots</Link>
          <Link className='nav-link' to="/preview">Preview</Link>
          <Link className='nav-link' to="/about">About</Link>
          <span className='nav-btn divider'></span>
          <Link className='nav-link nav-btn' to="/login">Login</Link>
          <Link className='nav-link nav-btn signup-link' to="/signup">Sign Up</Link>
          <button className="nav-btn nav-close-btn" onClick={showNavBar}><FontAwesomeIcon icon={faXmark} /></button>
        </nav>

        <button className="nav-btn" onClick={showNavBar}><FontAwesomeIcon icon={faBars} /></button>

        {/* Login and Sign Up */}
        <div className="auth-links">
          <Link className='nav-link' to="/login">Login</Link>
          <Link className="signup-link nav-link" to="/signup">Sign Up</Link>
        </div>
    </header>
  )
}

export default Header