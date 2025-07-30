import React from "react";
import Slider from "react-slick";
import { StyledGallery } from "./Gallery.styles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import your images
import img1 from "../imgs/IMG_6510.JPG";
import img2 from "../imgs/IMG_6511.JPG";
import img3 from "../imgs/IMG_6512.JPG";
import img4 from "../imgs/IMG_6513.JPG";
import img5 from "../imgs/IMG_6514.JPG";
import img6 from "../imgs/IMG_6515.JPG";

const images = [img1, img2, img3, img4, img5, img6];

export default function Gallery() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <StyledGallery>
      <h3>Our Work</h3>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Project ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </StyledGallery>
  );
}