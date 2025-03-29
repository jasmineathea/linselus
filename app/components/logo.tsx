"use client";
import React, { useEffect, useState, useRef } from 'react';

const images = [
  '/images/logo-one.png',
  '/images/logo-two.png',
];

const Logo = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const scheduleNext = () => {
    timeoutRef.current = setTimeout(() => {
      setIndex(prev => (prev === 0 ? 1 : 0));
    }, 750);
  };

  useEffect(() => {
    scheduleNext();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [index]); // viktig: avhenger av index

  return (
    <img
      src={images[index]}
      alt="Logo-animasjon"
      className="h-56 w-auto transition-opacity duration-[700ms] ease-in-out"
    />
  );
};

export default Logo;
