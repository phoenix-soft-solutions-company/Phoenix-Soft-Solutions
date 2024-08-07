import React from "react";
import "./Styles.css";

const images = [
  "https://www.shutterstock.com/image-vector/client-loyalty-customer-satisfaction-icon-600nw-2174562919.jpg",
  "https://www.shutterstock.com/image-vector/client-loyalty-customer-satisfaction-icon-600nw-2174562919.jpg",
  "https://www.shutterstock.com/image-vector/client-loyalty-customer-satisfaction-icon-600nw-2174562919.jpg",
  "https://www.shutterstock.com/image-vector/client-loyalty-customer-satisfaction-icon-600nw-2174562919.jpg",
  "https://www.shutterstock.com/image-vector/client-loyalty-customer-satisfaction-icon-600nw-2174562919.jpg",
  "https://www.shutterstock.com/image-vector/client-loyalty-customer-satisfaction-icon-600nw-2174562919.jpg",
  "https://www.shutterstock.com/image-vector/client-loyalty-customer-satisfaction-icon-600nw-2174562919.jpg",
  "https://www.shutterstock.com/image-vector/client-loyalty-customer-satisfaction-icon-600nw-2174562919.jpg",
  "https://www.shutterstock.com/image-vector/client-loyalty-customer-satisfaction-icon-600nw-2174562919.jpg",
];

const ImageCarousel = () => {
  return (
    <div className="carousel">
      <div className="carousel-track">
        {[...images, ...images].map((src, index) => (
          <img key={index} src={src} alt={`Slide ${index}`} className="carousel-image" />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;