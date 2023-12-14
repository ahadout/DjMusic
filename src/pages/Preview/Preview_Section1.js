import React from 'react';
import CloudPic from "../../assets/images/CloudPic.png";
import solid_and_cloud_drives from "../../assets/images/solid_and_cloud_drives.png";
import "../../assets/css/Preview/Preview_Section1.css";
import scrollToElement from "../../components/scrollToElement";

function Preview_Section1() {

    const handleScrollClick = (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href');
        scrollToElement(targetId);
      };

    return (
        <>
      <section id="Preview_Section1">
        <div class="Preview_Section1_container">
          <h1>Preview</h1>
          <a href="#Preview_Section2" onClick={handleScrollClick}><button>SHOW MORE</button></a>
        </div>
      </section>
    </>
    )
}

export default Preview_Section1
