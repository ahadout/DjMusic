import React from 'react';
import "../../assets/css/ContactUs/ContactForm.css";

function ContactForm() {
    return (
        <div className="contact-form-container">
            <div className="contact-form-heading">
            <h1>TEXT US FOR FREE!</h1>
            <p className='subheading'>Got something on your mind? We're all ears! Simply fill out the form below and shoot us a message.</p>
            </div>
            <form>
                <div className="input-group">
                    <label for="name">NAME</label>
                    <input type="text" id="name" placeholder="name"/>
                </div>

                <div className="input-group">
                    <label for="email">EMAIL</label>
                    <input type="email" id="email" placeholder="email"/>
                </div>

                <div className="input-group">
                    <label for="message">MESSAGE</label>
                    <textarea id="message" placeholder="message"></textarea>
                </div>

                <button type="submit">SEND</button>
            </form>
            
            <p id='notice-after-button'>Please allow a window of a to two hours for a response. We appreciate your patience and understanding.</p>
        </div>
    );
}

export default ContactForm;
