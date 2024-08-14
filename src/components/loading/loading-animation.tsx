'use client';
import { useEffect, useState } from 'react';

const letters = 'LOADING'.split('');

const LoadingAnimation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % letters.length);
    }, 500); // Adjust timing as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-4 text-5xl font-bold">
      {letters.map((letter, index) => (
        <span
          key={index}
          className={`transition-filter ${currentIndex === index ? 'blur-in' : 'blur-out'}`}
        >
          {letter}
        </span>
      ))}
    </div>
  );
};

export default LoadingAnimation;
