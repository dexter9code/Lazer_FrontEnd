import React, { useState,useContext } from "react";
import { motion } from "framer-motion";

import { FaUserCircle } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { GiLargeDress } from "react-icons/gi";
import { AiFillHome, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import {
  LiVariant,
  LiVariantDiffColor,
  FullLiVariant,
} from "./animations/SpringHover";
import { NavContext } from "./context/NavState";

const NavBar = () => {
  const [show,setShow]=useContext(NavContext)
  const showHam = () => {
    setShow(!show);
  };
  return (
    <div id="nav-container" className="w-full h-[80px]">
      <div
        id="nav-wrapper"
        className="flex justify-between mx-auto items-center h-full bg-[#f87e9c]"
      >
        {/* left-side */}
        <div className="mx-5 p-2">
          <h1 className="text-2xl font-bold p-3">Lazer</h1>
        </div>

        {/* Right-Side */}

        <div className="p-3">
          <ul className="hidden md:flex justify-center align-middle">
            <div className="flex justify-center items-center p-3">
              <FaUserCircle size={25} className="mx-2" />
              <motion.li
                variants={FullLiVariant}
                whileHover="hover"
                className="px-2 font-bold text-lg cursor-pointer "
              >
                Login
              </motion.li>
            </div>
            <div className="flex justify-center items-center p-3">
              <AiFillHome size={20} className="mx-2" />
              <motion.li
                variants={FullLiVariant}
                whileHover="hover"
                className="px-2 font-bold text-lg"
              >
                Home
              </motion.li>
            </div>
            <div className="flex justify-center items-center p-3">
              <GiLargeDress size={20} className="mx-2" />
              <motion.li
                variants={FullLiVariant}
                whileHover="hover"
                className="px-2 font-bold text-lg"
              >
                Products
              </motion.li>
            </div>
            <div className="flex justify-center items-center p-3">
              <FcAbout size={20} className="mx-2" />
              <motion.li
                variants={FullLiVariant}
                whileHover="hover"
                className="px-2 font-bold text-lg"
              >
                About
              </motion.li>
            </div>
          </ul>
        </div>

        {/* hamberburger */}
        <div onClick={showHam} className="block mx-5 md:hidden">
          {show ? (
            <>
              <AiOutlineClose size={30} />
            </>
          ) : (
            <>
              <AiOutlineMenu size={30} />
            </>
          )}
        </div>
        <div
          className={
            show
              ? "w-full  text-white bg-black absolute top-[80px] left-0 flex justify-center text-center"
              : "absolute left-[-100%]"
          }
        >
          {show ? (
            <ul className="py-4 md:hidden">
              <div className="flex justify-evenly items-center p-3">
                <FaUserCircle size={25} className="mx-2" />
                <motion.li
                  variants={LiVariant}
                  whileHover="hover"
                  className="px-2 font-bold text-lg cursor-pointer "
                >
                  Login
                </motion.li>
              </div>
              <div className="flex justify-evenly items-center p-3">
                <AiFillHome size={20} className="mx-2" />
                <motion.li
                  variants={LiVariantDiffColor}
                  whileHover="hover"
                  className="px-2 font-bold text-lg"
                >
                  Home
                </motion.li>
              </div>
              <div className="flex justify-evenly items-center p-3 ">
                <GiLargeDress size={20} className="mx-3" />
                <motion.li
                  variants={LiVariant}
                  whileHover="hover"
                  className="px-2  font-bold text-lg"
                >
                  Products
                </motion.li>
              </div>
              <div className="flex justify-evenly items-center p-3">
                <FcAbout size={20} className="mx-2" />
                <motion.li
                  variants={LiVariantDiffColor}
                  whileHover="hover"
                  className="px-2 font-bold text-lg"
                >
                  About
                </motion.li>
              </div>
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
