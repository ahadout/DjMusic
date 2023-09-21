import React from 'react'
import '../../assets/css/style.css'

function Home_SectionOne() {
  return (
    <>
        <div className="container">
            {/* Background Image */}
            <div className="background-slide"></div>

            {/* Content Box on the Right */}
            <div className="content-box">
                <h1 className="heading">Your Heading Here</h1>
                <p className="description">Your short description goes here.</p>
                <div className="buttons">
                    <button className="black-button">Black Button</button>
                    <button className="blue-button">Blue Button</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home_SectionOne