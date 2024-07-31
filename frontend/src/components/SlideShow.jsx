import React, { useState, useEffect, useRef } from "react";
import "./SlideShow.css";

const SlideShow = ({ slides = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const slideshowRef = useRef();

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 1000); // Time for zoom-in effect
    }, 3000); // Total time per slide (including zoom-in and zoom-out)

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <div className="w-full overflow-hidden relative h-screen">
      <div
        ref={slideshowRef}
        className={`flex ${isTransitioning ? "transition-transform duration-10000 ease-in-out" : ""}`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.concat(slides[0]).map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className={`w-full h-auto zoom ${index === currentIndex ? "zoom-in" : ""}`}
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 p-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-8 h-1 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-400"}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default SlideShow;
