import React from "react";
import { motion } from "framer-motion";
import { LiVariant } from "../animations/SpringHover";

const ProfileCard = ({ image, title }) => {
  return (
    <section className="flex justify-center px-5 py-3  ">
      <img className="w-[45px]" src={image} alt={title} />
      <motion.h1
        variants={LiVariant}
        whileHover="hover"
        className="px-3 py-2 text-xl font-bold capitalize cursor-pointer text-center"
      >
        {title}
      </motion.h1>
    </section>
  );
};

export default ProfileCard;
