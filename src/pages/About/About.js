import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import About_Section1 from "./About_Section_1";
import About_Section2 from "./About_Section_2";
import About_Section3 from "./About_Section_3";
import About_Section4 from "./About_Section_4";
import About_Section5 from "./About_Section_5";

function About() {
  return (
    <>
      <Header />
      <About_Section1 />
      <About_Section2 />
      <About_Section3 />
      <About_Section4 />
      <About_Section5 />

      <Footer />
    </>
  );
}

export default About;
