import React, { useState } from "react";
import "../../assets/css/Screenshots/Screenshots_Section_1.css";
import image1 from "../../assets/images/stock-photo-dj-spinning-mixing-and-scratching-in-a-night-club-hands-of-dj-tweak-various-track.jpeg";
import image2 from "../../assets/images/stock-photo-music-controller-mixer-dj-board-at-an-electronic-party.jpeg";
import image3 from "../../assets/images/stock-photo-professional-sound-mixer-musical-events-hands-operator-background-colorful-light.jpeg";
import Slider from "react-slick";
import scrollToElement from "../../components/scrollToElement";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} onClick={onClick} />;
}

function Screenshots_Section_1() {
  const images = [image1, image2, image3];

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 8000,
    afterChange: (current) => setCurrentSlide(current),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const handleScrollClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    scrollToElement(targetId);
  };

  return (
    <div className="Screenshots_Section_1_Slider">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx} style={{ height: "300px", overflow: "hidden" }}>
            <img
              src={img}
              alt={`Slide ${idx + 1}`}
              style={{ width: "100%", maxHeight: "35rem" }}
            />
          </div>
        ))}
      </Slider>
      <div className="Screenshots_Section1_info">
        <h1>Discover our work from real screenshots!</h1>
        <a href="#Screenshots_Section_2_Container" onClick={handleScrollClick}><button>SHOW MORE</button></a>
      </div>
    </div>
  );
}

export default Screenshots_Section_1;
