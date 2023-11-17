import React, { useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../assets/css/Login/Login.css'; 

function Login() {
  const apiUrl = process.env.REACT_APP_BACKEND_URL;
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear error for the current field
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiUrl}/api/auth/login`, formData);
      // Handle login success
    } catch (error) {
      console.error('Login error:', error.response);
      if (error.response && error.response.data) {
        // Assume backend sends specific messages
        const message = error.response.data.message;
        if (message.includes("Email")) {
          setErrors({ ...errors, email: message });
        } else if (message.includes("password")) {
          setErrors({ ...errors, password: message });
        }
      }
    }
  };

  return (
    <>
      <Header />
      <div className="login-container">
        <div className="login-heading">LOG IN</div>
        <div className="login-description">
          Discover the best offers from DJ musicHD, we have multiple plans to help you enjoy your favorite music DJs.
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" onChange={handleChange} className="login-input" />
          {errors.email && <div className="error-message">{errors.email}</div>}
          <input type="password" name="password" placeholder="Password" onChange={handleChange} className="login-input" />
          {errors.password && <div className="error-message">{errors.password}</div>}
          <button type="submit" className="login-button">LOG IN</button>
        </form>
        <div className="login-signup-text">
          YOU DON’T have account, <a href="/signup">SIGN UP</a> FREE NOW
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
