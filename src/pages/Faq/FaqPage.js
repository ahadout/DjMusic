import React from 'react';
import FaqHeader from './FaqHeader';
import FaqSection from './FaqSection';
import ContactSection from './ContactSection';
// import ContactInfo from './ContactInfo';
// import ContactForm from './ContactForm';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
function FaqPage() {
    return (
      <>
      <Header/>
<FaqHeader/>
<FaqSection/>
<ContactSection/>
<Footer/>
</>
    );
}

export default FaqPage;
