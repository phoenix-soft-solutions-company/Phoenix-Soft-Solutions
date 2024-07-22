import React from "react";

import headimg from "../constants/images/technology-heading.jpg";
import nodejs from "../constants/images/tech/nodejs.png";
import php from "../constants/images/tech/php.png";
import python from "../constants/images/tech/python.png";
import reactImg from "../constants/images/tech/react.png";
import angular from "../constants/images/tech/angular.png";
import aws from "../constants/images/tech/AWS.png";
import android from "../constants/images/tech/Android.png";
import java from "../constants/images/tech/java.png";
import ios from "../constants/images/tech/IOS.png";
import js from "../constants/images/tech/js.png";
// ... add other images

const images = [
  nodejs,
  php,
  python,
  reactImg,
  angular,
  aws,
  android,
  java,
  ios,
  js,
  // Add other imported images here
];

const titles = [
  "Node.js",
  "PHP",
  "Python",
  "React",
  "Angular",
  "AWS",
  "Android",
  "Java",
  "iOS",
  "JavaScript",
  // Add other titles here
];

const Technology = () => {
  return (
    <div className="min-h-screen relative pb-16">
      <header className="relative">
        <img
          src={headimg}
          alt="Header Image"
          className="w-full h-80 object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
          <h1 className="text-5xl">TECHNOLOGIES</h1>
        </div>
      </header>
      <div className="container mx-auto mt-8">
        <h1 className="text-center mb-8 text-3xl font-bold">
          Explore Our Technologies
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {images.map((image, index) => (
            <div
              className="tech-box border border-gray-200 p-4 text-center shadow-lg transition-transform transform hover:scale-105"
              key={index}
            >
              <div className="flex items-center justify-center h-40 w-32 mx-auto">
                <img
                  src={image}
                  alt={titles[index]}
                  className="object-contain h-full w-full"
                />
              </div>
              <h2 className="mt-4 text-2xl font-semibold">{titles[index]}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technology;
