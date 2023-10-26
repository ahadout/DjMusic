import React from 'react';
import ContactHeader from './ContactHeader';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
function ContactPage() {
    return (
      <>
      <Header/>
<ContactHeader/>
<ContactInfo/>
<ContactForm/>
<Footer/>
</>
    );
}

export default ContactPage;
