"use client";

import { activities } from "@/lib/data";
import { motion } from "framer-motion";
import React from "react";
import Activity from "./Activity";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Activities = () => {
  return (
    <div className="flex flex-wrap justify-center w-full gap-10">
      {activities.map((activity, index) => (
        <React.Fragment key={index}>
          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <Activity {...activity} />
          </motion.div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Activities;
