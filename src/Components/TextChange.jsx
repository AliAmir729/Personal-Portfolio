import React, { useState, useEffect } from "react";

const TextChange = () => {
  const prefix = "Hello, I am Ali - ";
  const roles = ["MERN Stack Developer", "NextJs Developer", "Problem Solver"];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // fade out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % roles.length);
        setFade(true); // fade in
      }, 400); // fade-out duration
    }, 3000); // 3 second per role
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
      {prefix}
      <span
        className={`inline-block transition-opacity duration-500 text-yellow-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        {roles[index]}
      </span>
    </div>
  );
};

export default TextChange;
