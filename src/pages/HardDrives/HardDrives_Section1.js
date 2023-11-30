import React from "react";
import CloudPic from "../../assets/images/CloudPic.png";
import solid_and_cloud_drives from "../../assets/images/solid_and_cloud_drives.png";
import "../../assets/css/HardDrives/HardDrives_Section1.css";
import scrollToElement from "../../components/scrollToElement";

function HardDrives_Section1() {

  const handleScrollClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    scrollToElement(targetId);
  };

  return (
    <>
      <section id="HardDrives_Section1">
        <div class="HardDrives_Section1_container">
          <h1>Get your Original Hard drive now!</h1>
          <div>
            <div id="solid_drives_sec1">
              <img src={CloudPic} alt="cloud picture" />
              <img src={solid_and_cloud_drives} alt="Solid and Cloud drives" />
              <img src={CloudPic} alt="cloud picture" />
              <a href="#HardDrives_Section2" onClick={handleScrollClick}><button>SHOW MORE</button></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HardDrives_Section1;
