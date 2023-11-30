import React, {useState, useEffect, useRef} from 'react';
import "../../assets/css/Home/Home_Section1.css";
import scrollToElement from '../../components/scrollToElement';

function Home_Section1() {

  const handleScrollClick = (e) => {
    e.preventDefault();
    scrollToElement('#home_section2');
  };

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
              <a className='Home-Section1-box-btn' href='#home_section2' onClick={handleScrollClick}>Get Started</a>
              <a className='Home-Section1-box-btn' href='/about'>Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home_Section1