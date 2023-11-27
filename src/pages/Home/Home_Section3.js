import React, {useState, useEffect} from 'react'
import "../../assets/css/Home/Home_Section3.css";
import Djection3 from '../../assets/images/DjSection3.png'
import Djection3_mobile from '../../assets/images/DjSection3-mobile.jpg'

function Home_Section3() {
  return (
    <>
    <div className='Home-Section3-container'>
      <div className='Home-Section3-second-container'>
        <div className='section3-left'>
          <h1>The Basics</h1>
          <img className='mobile-image' src={Djection3_mobile} alt="Dj Music Dj" />
          <div className='section3-left-paragraph'>
            <p>
            Whether you’re new to DJing or a veteran looking to update your library, DJ MUSIC HD is your music source. We provide the best quality music to ensure that your sets are always on point. We are passionate about music, and we believe that it is an essential element in any event. So, let us help you take your DJing to the next level with our digital crated collections.
            </p>
            <p>
            Our collections are organized, high quality, updated frequently, and loaded with crates for DJ software. We take pride in our music selection, and our team works hard to ensure that our collections have the latest and greatest tracks that DJs need to keep the party going.
            </p>
          </div>
          <div className='order-button'>
            <a href='/hard-drives'><button className='order-here'>ORDER HERE</button></a>
          </div>
        </div>
        <div className='section3-right'>
          <img src={Djection3} alt="Dj Music Dj" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Home_Section3