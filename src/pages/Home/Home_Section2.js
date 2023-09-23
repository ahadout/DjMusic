import React from "react";
import "../../assets/css/Home/Home_Section2.css";
import hard_drive_blue_bg from "../../assets/images/hard_drive_blue_bg.png";
import cloud_drive_blue_bg from "../../assets/images/cloud_drive_blue_bg.jpg";

function Home_Section2() {
  return (
    <section id="home_section2">
      <h1>DJ musicHD plans</h1>
      <p>
        Discover the best offers from DJ musicHD, we have a multi plans for help
        you to <br />
        enjoy with your favourite music djs
      </p>
      <div class="plans">
        <div class="hard_drives-plan">
          <img src={hard_drive_blue_bg} />
          <div class="hard_drives-info">
            <h2>
              Hard <br />
              Drives
            </h2>
            <hr />
            <div>
              <p>
                Embrace the Beat, Hold the Rhythm — Get Our DJ Albums on Viscal
                Hard Drives!
              </p>
              <button>Learn more</button>
            </div>
          </div>
        </div>
        <div class="cloud_drives-plan">
          <img src={cloud_drive_blue_bg} />
          <div class="cloud_drives-info">
            <h2>
              Cloud <br />
              Drives
            </h2>
            <hr />
            <div>
              <p>
                Embrace the Beat, Hold the Rhythm — Get Our DJ Albums on Cloud
                Drives!
              </p>
              <button>Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home_Section2;
