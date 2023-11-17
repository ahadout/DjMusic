import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../assets/css/Signup/Signup.css';
import PopupModal from '../../components/PopupModal';

function Signup() {
  const apiUrl = process.env.REACT_APP_BACKEND_URL;
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emailInUse, setEmailInUse] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    fullName: '',
    email: '',
    password: ''
  });


  const validate = () => {
    let tempErrors = {};
    tempErrors.username = formData.username ? "" : "Username is required.";
    tempErrors.fullName = formData.fullName ? "" : "Full name is required.";
    tempErrors.email = formData.email ? (/\S+@\S+\.\S+/.test(formData.email) ? "" : "Email is not valid.") : "Email is required.";
    tempErrors.password = formData.password ? (formData.password.length >= 6 ? "" : "Password must be at least 6 characters.") : "Password is required.";
    
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setEmailInUse(false);
  };
  const handleCloseModal = () => {
    setEmailInUse(false); // Set emailInUse to false to close the modal
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
  
    if (formData.password !== formData.confirmPassword) {
      setErrors({ ...errors, confirmPassword: 'Passwords do not match' });
      return;
    }
  
    try {
      const response = await axios.post(`${apiUrl}/api/auth/signup`, formData);
      // Display success message (you can use a state for this)
      setIsModalOpen(true);

    } catch (error) {
      console.error('Signup error:', error.response);
      if (error.response && error.response.status === 409) { // Check if email is already in use
        setEmailInUse(true);
      } 
    }
  };
  const closeModal = () => {
    setIsModalOpen(false);
    navigate('/login'); // Redirect to login after closing the modal
  };
  
  

  return (
    <>
      <Header />
      <div className="signup-container">
        <div className="signup-heading">SIGN UP</div>
        <div className="signup-description">
          Discover the best offers from DJ musicHD, we have multiple plans to help you enjoy your favorite music DJs.
        </div>
        <form className="signup-form" onSubmit={handleSubmit}>
          {message && <div className="success-message">{message}</div>}
          <input type="text" name="username" placeholder="Username" onChange={handleChange} className="signup-input" />
          {errors.username && <div className="error-message">{errors.username}</div>}
          <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} className="signup-input" />
          {errors.fullName && <div className="error-message">{errors.fullName}</div>}
          <input type="email" name="email" placeholder="Email" onChange={handleChange} className="signup-input" />
          {errors.email && <div className="error-message">{errors.email}</div>}
          <input type="password" name="password" placeholder="Password" onChange={handleChange} className="signup-input" />
          {errors.password && <div className="error-message">{errors.password}</div>}
          <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} className="signup-input" />
                    {errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}
          <button type="submit" className="signup-button">SIGN UP</button>
        </form>
        <div className="signup-login-text">
          I already have an account, <a href="/login">LOG IN</a>
        </div>
        {emailInUse && (
          <PopupModal isOpen={emailInUse} title="Email Already in Use" onClose={handleCloseModal} >
            <p>The email address you entered is already associated with an account. Please try logging in or use a different email address.</p>
          </PopupModal>
        )}
      </div>
      <PopupModal
  isOpen={isModalOpen}
  onClose={closeModal}
  title="Welcome to the Beat!"
>
  <div style={{ textAlign: 'center' }}>
  <svg className='SuccessSvg' viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C7.85113 3 4 5.73396 4 10C4 11.5704 4.38842 12.7289 5.08252 13.6554C5.79003 14.5998 6.87746 15.3863 8.41627 16.0908L9.2326 16.4645L8.94868 17.3162C8.54129 18.5384 7.84997 19.6611 7.15156 20.5844C9.56467 19.8263 12.7167 18.6537 14.9453 17.1679C17.1551 15.6948 18.3969 14.5353 19.0991 13.455C19.7758 12.4139 20 11.371 20 10C20 5.73396 16.1489 3 12 3ZM2 10C2 4.26604 7.14887 1 12 1C16.8511 1 22 4.26604 22 10C22 11.629 21.7242 13.0861 20.7759 14.545C19.8531 15.9647 18.3449 17.3052 16.0547 18.8321C13.0781 20.8164 8.76589 22.2232 6.29772 22.9281C5.48665 23.1597 4.84055 22.6838 4.56243 22.1881C4.28848 21.6998 4.22087 20.9454 4.74413 20.3614C5.44439 19.5798 6.21203 18.5732 6.72616 17.4871C5.40034 16.7841 4.29326 15.9376 3.48189 14.8545C2.48785 13.5277 2 11.9296 2 10Z" fill="#ffffff"></path> <path d="M16.463 8.73408C16.8535 8.34356 16.8535 7.71039 16.463 7.31987C16.0725 6.92935 15.4393 6.92935 15.0488 7.31987L10.7625 11.6062L8.97804 9.82176C8.58752 9.43124 7.95435 9.43124 7.56383 9.82176C7.1733 10.2123 7.1733 10.8455 7.56383 11.236L10.0345 13.7067C10.3629 14.035 10.8628 14.0873 11.2457 13.8635C11.3507 13.8153 11.4491 13.748 11.5356 13.6615L16.463 8.73408Z" fill="#ffffff"></path> </g></svg>
    <p className='signupSuccessMessage'>You're all set to explore an ocean of tunes! Head over to the <a href="/login" style={{ textDecoration: 'underline' }}>Login page</a> to dive in.</p>
  </div>
</PopupModal>


      <Footer />
    </>
  );
}

export default Signup;
