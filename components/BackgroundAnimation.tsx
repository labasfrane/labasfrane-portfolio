import { motion } from "framer-motion";
import React from "react";

type Props = {};

const BackgroundAnimation = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 1],
        opacity: [0.1, 0.2, 0.1, 1],
        // borderRadius: ["20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-customGreen rounded-2xl h-[330px] w-[330px] mt-56 " />
      <div className="absolute border border-customGreen rounded-2xl h-[130px] w-[130px] mt-56 " />
    </motion.div>
  );
};

export default BackgroundAnimation;
