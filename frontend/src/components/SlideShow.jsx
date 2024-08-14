import React, { useState, useEffect } from "react";
import "./Styles.css";
import leftImage from "../constants/images/projects/project-header.jpg";

const images = [
  {
    path: leftImage,
    title: "AI Development Services — Gain a Competitive Edge",
    text: "Empower business growth with Toptal’s AI Development services to harness valuable insights and automate operations. Partner with Toptal AI developers to expand your development capabilities and construct advanced algorithms, AI applications, and software solutions tailored to your specific business objectives.",
  },
  {
    path: "https://media.istockphoto.com/id/1481823327/photo/businessman-hand-and-finger-touching-screen-and-ui-hud-blue-unlock-security-sign-in-vintage.jpg?s=2048x2048&w=is&k=20&c=w1pTxztzZc0NaeEcU08tWtTU4VYcHUBHhQNt6jAELf4=",
    title: "Cybersecurity Development Services",
    text: "World offers cybersecurity services for  from different industries. We help our clients effectively protect their systems from data leakage, find security gaps, ensure compliance with security standards for various types of solutions and minimize the risk of potential external attacks.",
  },
  {
    path: "https://media.istockphoto.com/id/1253430957/photo/professional-developer-programmer-cooperation-meeting-and-brainstorming-and-programming-in.jpg?s=2048x2048&w=is&k=20&c=aieOSrNdkfo5Z4ZdiwlyaUyGaJKkyU1tNdg5-E66Wr0=",
    title: "Mobile App Design & Development",
    text: "Are you on the lookout for top-notch mobile app developers in Sri Lanka? Well, your search stops right here. At xcorp , we're not just about crafting apps; we're about creating experiences that users love. Think of us as your partners in turning your business dreams into digital reality. Our team of talented mobile app developers brings not just skills, but passion and dedication to every project, ensuring that your app not only meets but exceeds your expectations.",
  },
  {
    path: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Web Design & Development",
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
