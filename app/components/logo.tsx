"use client";
import React, { useEffect, useState, useRef } from 'react';

const images = [
  '/images/1.png',
  '/images/2.png',
  '/images/3.png',
];

const Logo = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const scheduleNext = () => {
    timeoutRef.current = setTimeout(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 1000);
  };

  useEffect(() => {
    scheduleNext();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [index]);

  return (
    <img
      src={images[index]}
      alt="Logo-animasjon"
      className="h-28 md:h-36 lg:h-48 w-auto transition-opacity duration-[500ms] ease-in-out"
    />
  );
};

export default Logo;
