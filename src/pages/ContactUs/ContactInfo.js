import React from 'react';
import "../../assets/css/ContactUs/ContactInfo.css";
import infoSectionImage from '../../assets/images/dj-masculin-fete-charge-animation-musicale-1.png';
import addresseIcon from '../../assets/images/icon _messages.png';
import emailAdressIcon from '../../assets/images/icon _map.png';
import phoneIcon from '../../assets/images/icon _call.png';


function ContactInfo() {
    return (
        <div className="contact-info-container">
            <img src={infoSectionImage} alt="Description of Image" className="contact-image"/>
            <div className="info-details">
            <div className="info-heading">
            <p className="info-main-heading">FEEL FREE TO CONTACT US!</p>
                <p className="info-subtext">Your thoughts, questions, and feedback are the beats to our rhythm.</p>
</div>
                <div className="info-item">
                    <img src={addresseIcon} alt="Address Icon" className="info-icon"/>
                    <div>
                        <h3>Address</h3>
                        <p>Your Address Here</p>
                    </div>
                </div>
                <div className="info-item">
                    <img src={emailAdressIcon} alt="Email Icon" className="info-icon"/>
                    <div>
                        <h3>Email</h3>
                        <p>youremail@example.com</p>
                    </div>
                </div>
                <div className="info-item">
                    <img src={phoneIcon}  alt="Phone Icon" className="info-icon"/>
                    <div>
                        <h3>Phone</h3>
                        <p>+123 456 7890</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactInfo;
