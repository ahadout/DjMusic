import React from "react";
import "../../assets/css/CloudDrives/CloudDrives_Section1.css";
import CloudPic from "../../assets/images/CloudPic.png";
import SolidDrives from "../../assets/images/SolidDrives.png";
import scrollToElement from "../../components/scrollToElement";

function CloudDrives_Section1() {

  const handleScrollClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    scrollToElement(targetId);
  };

  return (
    <>
      <section id="CloudDrives_Section1">
        <div class="CloudDrives_Section1_container">
          <h1>Get Your TB Cloud Drive Now!</h1>
          <div>
            <div id="solid_drives_sec1">
              <img src={CloudPic} alt="cloud picture" />
              <img src={SolidDrives} alt="2 solid drives" />
              <img src={CloudPic} alt="cloud picture" />
              <a href="#CloudDrives_Section2" onClick={handleScrollClick}><button>SHOW MORE</button></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CloudDrives_Section1;
