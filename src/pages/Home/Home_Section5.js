import React from "react";
import "../../assets/css/Home/Home_Section5.css";
function Home_Section5() {
  return (
    <section id="Home_section5">
      <h1>Preview Tracks Easily</h1>
      <p>
        We offer a special way to preview the songs befor buying, Try it NOW!
      </p>
      <hr />
      <div id="Home_section5_main">
        <div id="Home_section5_main_categories">
          <h2>CATEGORIES</h2>
          <hr />
          <p>AFROBEAT</p>
          <hr />
          <p>DANCE HALL-SOCA</p>
          <hr />
          <p>HIPHOP & R&B</p>
          <hr />
          <p>LATIN</p>
          <hr />
          <p>MAINSTREAM</p>
          <hr />
          <p>RETRO INSTRUMENTAL</p>
        </div>
        <div>
          <h2>AFROBEAT</h2>
          <hr />
          <div>
            <p>Sample one</p>
            <span>Dj Simple1</span>
            <audio controls>
              <source src="https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/backsound.mp3" />
            </audio>
          </div>
          <div>
            <p>Sample two</p>
            <span>Dj Simple2</span>
            <audio controls>
              <source src="https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/backsound.mp3" />
            </audio>
          </div>
        </div>
      </div>
      <hr />
      <p>You can buy our music plans from here &rarr;</p>
    </section>
  );
}

export default Home_Section5;
