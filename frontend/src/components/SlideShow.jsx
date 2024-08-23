import React, { useState, useEffect } from "react";
import "./Styles.css";
import slide1 from "../constants/images/slides/slide1.jpg";
import slide2 from "../constants/images/services/backend.jpg";
import slide3 from "../constants/images/slides/slide3.jpg";
import slide4 from "../constants/images/slides/slide4.png";

const images = [
  {
    path: slide1,
    title: "PHOENIX SOFT SOLUTIONS",
  },
  {
    path: slide2,
    title: "WEB DESIGN & DEVELOPMENT",
  },
  {
    path: slide3,
    title: "MOBILE APP DESIGN & DEVELOPMENT",
  },
  {
    path: slide4,
    title: "CYBERSECURITY DEVELOPENT SERVICES",
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
