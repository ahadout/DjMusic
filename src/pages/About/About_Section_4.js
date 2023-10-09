import React from "react";
import "../../assets/css/About/About_Section_4.css";
import DjSoftwareTwo from "../../assets/images/A-Quick-Introduction-to-DJ-Software-2.jpg";
import SeratoSpotifyBanner from "../../assets/images/serato-spotify-banner.jpg";

function About_Section4() {
  return (
    <section id="About_Section4_Section">
      <div>
        <img src={DjSoftwareTwo} />
        <img src={SeratoSpotifyBanner} />
      </div>
      <div>
        <h1>Get your Dj album</h1>
        <p>
          Click below to get your TB of Djs <br /> music albums now
        </p>
        <button>Show more</button>
      </div>
    </section>
  );
}

export default About_Section4;
