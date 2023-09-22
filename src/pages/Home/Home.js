import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Home_Section1 from "./Home_Section1";
import Home_Section2 from "./Home_Section2";
import Home_Section3 from "./Home_Section3";
import Home_Section4 from "./Home_Section4";
import Home_Section5 from "./Home_Section5";

function Home() {
  return (
    <>
      <Header />
        <Home_Section1 />
        <Home_Section2 />
        <Home_Section3 />
        <Home_Section4 />
        <Home_Section5 />
      <Footer />
    </>
  );
}

export default Home;
