import React from "react";
import headimg from "../constants/images/tech/technology-heading.jpg";
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

const images = [nodejs, php, python, reactImg, angular, aws, android, java, ios, js];

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
];

const Technology = () => {
  return (
    <div className="min-h-screen relative">
      <header className="relative">
        <img src={headimg} alt="header" className="w-full h-80 object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
          <h1 className="text-2xl lg:text-5xl font-serif font-bold tracking-widest">TECHNOLOGIES</h1>
        </div>
      </header>
      <div className="container mx-auto mt-8">
        <h1 className="text-center text-3xl font-bold  tracking-wider font-mono uppercase px-4">
          Explore Our Technologies
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center p-10">
          {images.map((image, index) => (
            <div
              className="border border-gray-200 p-4 text-center shadow-lg transition-transform transform hover:scale-105"
              key={index}>
              <div className="flex items-center justify-center mx-auto h-40 w-60">
                <img src={image} alt={titles[index]} className="object-contain h-full w-full" />
              </div>
              <h2 className="mt-4 text-lg lg:text-2xl font-semibold font-mono">{titles[index]}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technology;
