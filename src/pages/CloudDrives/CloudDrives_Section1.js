import React from "react";
import "../../assets/css/CloudDrives/CloudDrives_Section1.css";
import CloudPic from "../../assets/images/CloudPic.png";
import SolidDrives from "../../assets/images/SolidDrives.png";

function CloudDrives_Section1() {
  return (
    <>
      <section id="CloudDrives_Section1">
        <div class="CloudDrives_Section1_container">
          <h1>
            GET YOUR <br />
            TB CLOUD DRIVE <br />
            NOW!
          </h1>
          <div>
            <div id="solid_drives_sec1">
              <img src={CloudPic} alt="cloud picture" />
              <img src={SolidDrives} alt="2 solid drives" />
              <img src={CloudPic} alt="cloud picture" />
              <button>SHOW MORE</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CloudDrives_Section1;
