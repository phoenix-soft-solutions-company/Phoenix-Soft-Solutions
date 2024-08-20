import React from "react";
import "./Styles.css";

// Import images from the local file system
import wp from "../constants/images/tech/wp.png";
import reactImg from "../constants/images/tech/react.png";
import pr from "../constants/images/tech/pr.png";
import aws from "../constants/images/tech/AWS.png";
import ps from "../constants/images/tech/ps.png";
import js from "../constants/images/tech/js.png";
import java from "../constants/images/tech/java.png";
import python from "../constants/images/tech/python.png";
import angular from "../constants/images/tech/angular.png";
import ld from "../constants/images/tech/ld.png";
import lr from "../constants/images/tech/lr.png";
// Use the imported images in the array
const images = [java,angular,reactImg, pr, aws, ps,python, lr,js, wp,ld];

const ImageCarousel = () => {
  return (
    <div className="carousel">
      <div className="carousel-track">
        {[...images, ...images].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className="carousel-image"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
