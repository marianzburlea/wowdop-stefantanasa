import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import images from "../data/images";
import { Card } from "./Card";
import data from "../data/data.json";
import { useNavigate } from "react-router-dom";

export const Carousel = ({ setProfile }) => {
  let [width, setWidth] = useState(0);
  let carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  let navigate = useNavigate();

  return (
    <motion.div ref={carousel} className="carousel">
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width + 40 }}
        className="inner-carousel"
      >
        {data.map((profile, i) => {
          return (
            <motion.div
              className="item"
              key={i}
              onClick={() => {
                setProfile(profile);
              }}
            >
              <Card profile={profile} />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};
