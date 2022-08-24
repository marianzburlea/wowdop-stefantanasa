import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import images from "../data/images";
import { Card } from "./Card";

export const Carousel = () => {
  let [width, setWidth] = useState(0);
  let carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <motion.div ref={carousel} className="carousel">
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width + 40 }}
        className="inner-carousel"
      >
        {images.map((image, i) => {
          return (
            <motion.div className="item" key={i}>
              <Card image={image} />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};
