import React, { useState, useEffect, useRef } from "react";

const Counter = ({ threshold = 100, increment = 1 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (counterRef.current) {
        const rect = counterRef.current.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight && rect.bottom >= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible && count < threshold) {
      const intervalId = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount >= threshold) {
            clearInterval(intervalId);
            return threshold;
          }
          return prevCount + increment;
        });
      }, 100); // Adjust the interval time as needed

      return () => clearInterval(intervalId);
    }
  }, [isVisible, count, threshold, increment]);

  return (
    <div ref={counterRef}>
      <h1>{count}</h1>
    </div>
  );
};

export default Counter;
