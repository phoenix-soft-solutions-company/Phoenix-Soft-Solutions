import React, { useEffect } from "react";
import "../../pages/Styles.css"; // Import the CSS for background animation

const LkDomain = () => {
  useEffect(() => {
    const container = document.querySelector(".balls-container");
    const numberOfBalls = 10; // Increase the number of balls

    for (let i = 0; i < numberOfBalls; i++) {
      const ball = document.createElement("div");
      ball.className = "ball";
      ball.style.width = `${Math.random() * 30 + 20}px`; // Random width between 20px and 50px
      ball.style.height = ball.style.width; // Ensure it's a circle
      ball.style.backgroundColor = "rgb(156, 150, 150)"; // Set all balls to the specified color
      ball.style.left = `${Math.random() * 100}%`; // Random horizontal position
      ball.style.bottom = `-${ball.style.height}`; // Start just below the viewport
      ball.style.animationDelay = `${Math.random() * 4}s`; // Staggered start
      container.appendChild(ball);
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-red-600 relative overflow-hidden">
      <div className="relative z-10 text-center text-black">
        <h1 className="text-5xl font-bold">Coming Soon</h1>
        <p className="mt-4 text-lg">
          We are working on something amazing. Stay tuned!
        </p>
        <br />
        <p className="mt-4 text-lg font-bold">-Phoenix Soft Solutions-</p>
      </div>

      {/* Animated Balls */}
      <div className="balls-container"></div>
    </div>
  );
};

export default LkDomain;
