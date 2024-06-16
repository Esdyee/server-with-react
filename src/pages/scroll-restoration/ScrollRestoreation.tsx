import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollRestoration = () => {
  const location = useLocation();
  const scrollPositions = useRef(new Map());

  useEffect(() => {
    const handleScroll = () => {
      scrollPositions.current.set(location.key, window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  useEffect(() => {
    const scrollPosition = scrollPositions.current.get(location.key);
    if (scrollPosition !== undefined) {
      window.scrollTo(0, scrollPosition);
    }
  }, [location]);

  return null;
};

export default ScrollRestoration;