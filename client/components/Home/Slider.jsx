import React, { useRef, useEffect } from "react";
import Flickity from "flickity";
import "flickity/css/flickity.css";

const Slider = ({ children }) => {
  const flickityRef = useRef(null);

  useEffect(() => {
    flickityRef.current = new Flickity(".slider", {
      // Настройки Flickity
      // Подробнее: https://flickity.metafizzy.co/options.html
      freeScroll: true,
      wrapAround: true,
      
    });

    return () => flickityRef.current.destroy();
  }, []);

  return <div className="slider">{children}</div>;
};

export default Slider;
