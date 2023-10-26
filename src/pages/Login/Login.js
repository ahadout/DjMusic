import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../assets/css/Login/Login.css'; 
function Login() {
  return (
    <>
        <Header />
        
        <div className="login-container">
            <div className="login-heading">LOG IN</div>
            <div className="login-description">
            Discover the best offers from DJ musicHD, we have multiple plans to help you <br className='break-onmobile'></br> enjoy your favorite music DJs.            </div>
            <form className="login-form">
                <input type="email" placeholder="Email" className="login-input" />
                <input type="password" placeholder="Password" className="login-input" />
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
