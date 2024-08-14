import React, { useState, useEffect } from "react";
import "./Styles.css";
import slide1 from "../constants/images/slides/slide1.jpg";
import slide2 from "../constants/images/services/backend.jpg";
import slide3 from "../constants/images/slides/slide3.jpg";
import slide4 from "../constants/images/slides/slide4.png";

const images = [
  {
    path: slide1,
    title: "Phoenix DIgital",
    text: "Phoenix Digital, we fuse visionary design with cutting-edge web development. Our expert team crafts immersive, high-performance websites that elevate your brand and captivate audiences. Ignite your digital transformation with us and create something truly legendary!",
  },
  {
    path: slide2,
    title: "Web Design & Development",
    text: "At xcorp we understand your need for a website that aligns perfectly with your business plan. That's why we specialize in custom web development services in World Each website we craft is meticulously tailored to your unique requirements.At xcorp we understand your need for a website that aligns perfectly with your business plan. That's why we specialize in custom web development services in World Each website we craft is meticulously tailored to your unique requirements.",
  },
  {
    path: slide3,
    title: "Mobile App Design & Development",
    text: "Are you on the lookout for top-notch mobile app developers in Sri Lanka? Well, your search stops right here. At xcorp , we're not just about crafting apps; we're about creating experiences that users love. Think of us as your partners in turning your business dreams into digital reality. Our team of talented mobile app developers brings not just skills, but passion and dedication to every project, ensuring that your app not only meets but exceeds your expectations.",
  },
  {
    path: slide4,
    title: "Cybersecurity Development Services",
    text: "At xcorp we understand your need for a website that aligns perfectly with your business plan. That's why we specialize in custom web development services in World Each website we craft is meticulously tailored to your unique requirements.",
  },
];

function SlideShow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 3 seconds
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
            className={`slide-title font-mono text-2xl sm:text-4xl font-bold top-[20px] sm:top-[60px] md:top-[100px] lg:top-[150px] w-[90%] ${
              index === currentImageIndex ? "slide-title-active" : ""
            }`}>
            {image.title}
          </div>
          <div
            className={`slide-text text-sm sm:text-xl top-[170px] sm:top-[220px] md:top-[250px] lg:top-[300px] w-[90%] lg:w-[60%] ${
              index === currentImageIndex ? "slide-text-active" : ""
            }`}>
            {image.text}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SlideShow;
