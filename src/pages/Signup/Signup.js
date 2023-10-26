import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../assets/css/Signup/Signup.css';

function Signup() {
  return (
    <>
        <Header /> 
        <div className="signup-container">
            <div className="signup-heading">SIGN UP</div>
            <div className="signup-description">
                Discover the best offers from DJ musicHD, we have multiple plans to help you <br className='break-onmobile'></br> enjoy your favorite music DJs.
            </div>
            <form className="signup-form">
                <input type="text" placeholder="Username" className="signup-input" />
                <input type="text" placeholder="Full Name" className="signup-input" />
                <input type="email" placeholder="Email" className="signup-input" />
                <input type="password" placeholder="Password" className="signup-input" />
                <button type="submit" className="signup-button">SIGN UP</button>
            </form>
            <div className="signup-login-text">
                I already have an account, <a href="/login">LOG IN</a>
            </div>
        </div>
        <Footer />
       
    </>
    
  );
}

export default Signup;
