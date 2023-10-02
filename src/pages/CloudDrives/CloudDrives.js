import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CloudDrive_Section1 from "../../pages/CloudDrives/CloudDrives_Section1";
import CloudDrive_Section2 from "../../pages/CloudDrives/CloudDrives_Section2";
import CloudDrive_Section3 from "../../pages/CloudDrives/CloudDrives_Section3";
import CloudDrive_Section4 from "../../pages/CloudDrives/CloudDrives_Section4";

function CloudDrives() {
  return (
    <>
      <Header />
      <CloudDrive_Section1 />
      <CloudDrive_Section2 />
      <CloudDrive_Section3 />
      <CloudDrive_Section4 />
      <Footer />
    </>
  );
}

export default CloudDrives;
