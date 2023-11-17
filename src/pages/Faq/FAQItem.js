import React, { useState } from 'react';
import "../../assets/css/Faq/FaqSection.css";

function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="faq-item" onClick={() => setIsOpen(!isOpen)}>
            <h2>{question} <span>{isOpen ? '▲' : '▼'}</span></h2>
            {isOpen && <p>{answer}</p>}
        </div>
    );
}

export default FAQItem;
