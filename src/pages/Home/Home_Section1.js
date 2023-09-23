import React, {useState, useEffect, useRef} from 'react';
import "../../assets/css/Home/Home_Section1.css";

function Home_Section1() {
  return (
    <>
      <div className='Home-Section1-container'>
        <div className='Home-Section1-second-container'>
          <div className='box'>
            <div>
              <h1>MUSIC<br className='br-desktop'></br> 4 DJS<br className='br-mobile'></br> MADE<br className='br-desktop'></br> BY DJS</h1>
            </div>
            <div>
              <p>Discover, Preview, and<br></br>Own Your Favourite Beats!</p>
            </div>
            <div className='Home-Section1-box-btn-container'>
              <button className='Home-Section1-box-btn'>Get Started</button>
              <button className='Home-Section1-box-btn'>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home_Section1