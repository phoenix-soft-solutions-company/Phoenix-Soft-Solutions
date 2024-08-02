import React, { useState, useEffect } from "react";
import "./Styles.css";

const images = [
  {
    url: "https://img.freepik.com/free-photo/autumn-leaf-falling-revealing-intricate-leaf-vein-generated-by-ai_188544-9869.jpg",
    text: "This is the first slide text.",
  },
  {
    url: "https://img.freepik.com/free-photo/vibrant-autumn-maple-leaves-nature-beauty-showcased-generated-by-ai_188544-15039.jpg",
    text: "This is the second slide text.",
  },
  {
    url: "https://img.freepik.com/free-photo/autumn-tree-forest-leaves-bright-yellow-generative-ai_188544-12668.jpg",
    text: "This is the third slide text.",
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
            src={image.url}
            alt={`Slide ${index}`}
            className={`slide-image ${index === currentImageIndex ? "slide-image-active" : ""}`}
          />
          <div className={`slide-text ${index === currentImageIndex ? "slide-text-active" : ""}`}>
            {image.text}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SlideShow;
