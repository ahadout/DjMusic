import React from "react";
import "../../assets/css/Screenshots/Screenshots_Section_2.css";
import S1 from "../../assets/images/screen.png";
import S2 from "../../assets/images/s2.png";
import S3 from "../../assets/images/s3.png";
import S4 from "../../assets/images/s4.png";

function Screenshots_Section_2() {
  return (
    <div id="Screenshots_Section_2_Container">
      <div className="Screenshots_Section_2_div_1">
        <h1>Mainstream</h1>
        <p>
          These snapshots capture the essence of what's currently hot and
          trending in the DJ music world.
        </p>
        <img src={S1} />
      </div>
      <div className="Screenshots_Section_2_div_2">
        <h1>Classic Folder</h1>
        <p>
          Our 'Classic Folder' showcases visuals of timeless tracks and
          legendary artists that have left an indelible mark on the DJ scene.
        </p>
        <img src={S2} />
      </div>
      <div className="Screenshots_Section_2_div_3">
        <h1>Dancehall</h1>
        <p>
          Feel the rhythm and energy of the Caribbean with our Dancehall
          collection.
        </p>
        <img src={S3} />
      </div>
      <div className="Screenshots_Section_2_div_4">
        <h1>Latest Hip Hop</h1>
        <p>
          groundbreaking artists, and the beats that are defining the
          contemporary hip hop scene.
        </p>
        <img src={S4} />
      </div>
      <div className="Screenshots_Section_2_div_5"></div>
    </div>
  );
}

export default Screenshots_Section_2;
