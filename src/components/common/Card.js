import React from "react";
import { motion } from "framer-motion";
import { cardVariant } from "./../animations/CardVariant";

const Card = ({ icon, title, subtile }) => {
  return (
    <motion.div
      variants={cardVariant}
      whileHover="hover"
      className="flex flex-col border text-left rounded-2xl py-10 px-5 ml-5 mr-5"
    >
      <div>
        <div className="bg-[#00d8ff] inline-flex p-2 rounded-full">{icon}</div>
        <h2 className="text-2xl py-4 font-bold ">{title}</h2>
        <p>{subtile}</p>
      </div>
    </motion.div>
  );
};

export default Card;
