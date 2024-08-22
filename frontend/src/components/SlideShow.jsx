import React, { useState, useEffect } from "react";
import "./Styles.css";
import slide1 from "../constants/images/slides/slide1.jpg";
import slide2 from "../constants/images/services/backend.jpg";
import slide3 from "../constants/images/slides/slide3.jpg";
import slide4 from "../constants/images/slides/slide4.png";

const images = [
  {
    path: slide1,
    title: "Phoenix Soft Solutions",
  },
  {
    path: slide2,
    title: "Web Design & Development",
  },
  {
    path: slide3,
    title: "Mobile App Design & Development",
  },
  {
    path: slide4,
    title: "Cybersecurity Development Services",
  },
];

function SlideShow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slide-container">
      {images.map((image, index) => (
        <div key={index} className={`slide ${index === currentImageIndex ? "slide-active" : ""}`}>
          <img
            src={image.path}
            alt={`Slide ${index}`}
            className={`slide-image ${index === currentImageIndex ? "slide-image-active" : ""}`}
          />
          <div
            className={`slide-title font-mono text-2xl sm:text-4xl lg:text-6xl font-bold top-[40%] w-[80%] sm:w-[60%] lg:w-[40%] ${
              index === currentImageIndex ? "slide-title-active" : ""
            }`}>
            {image.title}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SlideShow;
