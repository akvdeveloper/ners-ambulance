"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const CustomeCarousel = ({ items, settings, height, width }) => {
  const defaultSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...settings 
  };

  return (
    <Slider {...defaultSettings}>
      {items.map((item, index) => (
        <div key={index} className="carousel-item">
          <img src={item.image} alt={item.alt} className="carousel-image" />
          {item.content && <div className="carousel-content">{item.content}</div>}
        </div>
      ))}
    </Slider>
  );
};

export default CustomeCarousel;
