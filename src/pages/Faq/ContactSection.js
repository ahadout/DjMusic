import React from 'react';
import "../../assets/css/Faq/faqForm.css";

function faqForm() {
    return (
        <div className="faq-form-container">
            <div className="faq-form-heading">
            <h1>Any Specific Questions?</h1>
            <p className='subheading'>Find answers to commonly asked questions contact us now!</p>
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
            
            <p id='notice-after-button'>Please allow a window of 24 to 48 hours for a response. We appreciate your patience and understanding.</p>
        </div>
    );
}

export default faqForm;
