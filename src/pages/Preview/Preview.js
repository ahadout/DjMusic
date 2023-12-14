import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Preview_Section1 from './Preview_Section1';
import Preview_Section2 from './Preview_Section2';

function Preview() {
  return (
    <>
        <Header />
        <Preview_Section1 />
        <Preview_Section2 />
        <Footer />
    </>
  )
}

export default Preview
