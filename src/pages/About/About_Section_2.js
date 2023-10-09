import React from "react";
import "../../assets/css/About/About_Section_2.css";
import Section_2_Pic from "../../assets/images/dj8.png";

function About_Section2() {
  return (
    <div id="About_Section_2_container">
      <img src={Section_2_Pic} />
      <div>
        <h1>Music for DJs Made by DJs</h1>
        <p>
          Dive deep into a curated collection where every beat, mix, and track
          resonates with the authentic touch of seasoned DJs.
        </p>
      </div>
    </div>
  );
}

export default About_Section2;
