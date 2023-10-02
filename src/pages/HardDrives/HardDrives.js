import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HardDrives_Section1 from "./HardDrives_Section1";
import HardDrives_Section2 from "./HardDrives_Section2";
import HardDrives_Section3 from "./HardDrives_Section3";
import HardDrives_Section4 from "./HardDrives_Section4";
function HardDrives() {
  return (
    <>
      <Header />
      <HardDrives_Section1 />
      <HardDrives_Section2 />
      <HardDrives_Section3 />
      <HardDrives_Section4 />
      <Footer />
    </>
  );
}

export default HardDrives;
