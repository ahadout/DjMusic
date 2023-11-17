import React from 'react';
import FAQItem from './FAQItem';
import "../../assets/css/Faq/FaqSection.css";

function FaqSection() {
    const questions = [
        { question: 'Refunds?', answer: 'Our refund policy is...' },
        { question: 'I just placed an order, when will it ship?', answer: 'Orders ship within...Orders ship within...Orders ship within...Orders ship within...Orders ship within...Orders ship within...Orders ship within...Orders ship within...Orders ship within...Orders ship within...Orders ship within...Orders ship within...Orders ship within...Orders ship within...Orders ship within...Orders ship within...Orders ship within...Orders ship within...Orders ship within...Orders ship within...Orders ship within...Orders ship within...Orders ship within...Orders sOrders ship within...Orders ship within...Orders ship within...hip within...Orders ship within...Orders ship within...Orders ship within...' },
    ];

    return (
        <div className="faq-container">
            <div className="faq-container-heading">
            <h1>Frequently Asked Questions</h1>
            <p>Discover the best offers from DJ MUSIC HD, we have a multitude of plans for you to enjoy with your favorite music dj</p>
            </div>
            <p id='subheading'>Find answers to commonly asked questions</p>
            <div className="faq-items">
                {questions.map((q, index) => (
                    <FAQItem key={index} question={q.question} answer={q.answer} />
                ))}
            </div>
        </div>
    );
}

export default FaqSection;
