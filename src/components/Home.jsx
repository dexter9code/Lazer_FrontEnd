import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Autoplay,Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { AiTwotoneCrown } from "react-icons/ai";
import { RiSecurePaymentFill } from "react-icons/ri";
import { SiAuth0 } from "react-icons/si";

import { HomeSvgVariant } from "./animations/HomeSvg";
import homevideo from "../assets/video/homevideo.mp4";
import Card from "./common/Card";
import { NavContext } from "./context/NavState";

const Home = () => {
  const [show] = useContext(NavContext);
  return (
    <div className="">
      <div className="invisible md:visible  w-full  flex ">
        <div className="absolute p-5 flex justify-between">
          <img
            src="https://cdn-icons-png.flaticon.com/512/7331/7331179.png"
            className="w-20"
            alt="loyalLogo"
          />
          <h1 className="text-4xl font-bold text-white capitalize">
            India's{" "}
            <motion.span
              initial={{ x: "-100vh", opacity: 0 }}
              animate={{ x: 0, opacity: 1, scale: 2 }}
              transition={{
                duration: 10,
                ease: "easeInOut",
                type: "spring",
                stiffness: 130,
              }}
              className="px-1 mr-2"
            >
              First
            </motion.span>
            and only DeBrand Store
          </h1>
        </div>
        <span className="absolute top-36 left-[105px] italic text-white font-semibold text-lg">
          Awesome Discount every Hour Shop Now
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="-z-10 w-full"
          viewBox="0 0 1440 320"
        >
          <motion.path
            fill="#0099ff"
            fill-opacity="1"
            d="M0,160L48,144C96,128,192,96,288,90.7C384,85,480,107,576,96C672,85,768,43,864,21.3C960,0,1056,0,1152,16C1248,32,1344,64,1392,80L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></motion.path>
        </svg>
        <video
          src={homevideo}
          loop
          autoPlay
          muted
          className="-z-20 w-full h-[700px] object-cover absolute"
        />
      </div>

      {/* mobile and tablet */}

      <div className=" md:hidden">
        <div className={show ? "absolute top-[320px] mt-3" : "absolute top-24"}>
          <h1 className="text-lg px-3 py-1 font-bold ml-10 ">
            India's First and only DeBrand Store
          </h1>
          <p className="text-base italic ml-[55px]">
            Amazing discount every hour Shop now
          </p>
        </div>
        <div className={show ? "absolute top-[400px]" : "absolute top-44"}>
          <video
            src={homevideo}
            loop
            autoPlay
            muted
            className="w-[900px] h-[400px]"
          />
        </div>
      </div>

      {/* photo gallery */}

    
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mt-[320px] "
      >
        <SwiperSlide className="flex justify-evenly overflow-hidden">
            <img className="self-center" src="https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMxfHxmYXNoaW9ufGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <h1 className="text-center self-center text-lg capitalize py-5 font-bold" >Brands from all around the world <br/>with latest style and best quality</h1>
            <img src="https://images.unsplash.com/photo-1507553532144-b9df5e38c8d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM4fHxmYXNoaW9ufGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-evenly overflow-hidden">
            <img src="https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNsb3RoaW5nfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <h1 className="text-center self-center text-lg capitalize py-5 font-bold" >top style and quality shoes from top brands</h1>
            <img src="https://images.unsplash.com/photo-1597477509708-191aae9cdef0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fG5pa2V8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-evenly overflow-hidden">
            <img src="https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGlzY291bnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <h1 className="text-center self-center text-lg capitalize py-5 font-bold" >different discount on various brand in every 3 hours<br/> shop without thinking about the price </h1>
            <img src="https://images.unsplash.com/photo-1650737736263-67daef292284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fGRpc2NvdW50fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-evenly overflow-hidden">
            <img src="https://images.unsplash.com/photo-1565128260358-318e131efbb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YnJhbmQlMjBtb2RlbHN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <h1 className="text-center self-center text-lg uppercase py-5 font-bold" >For him </h1>
            <img src="https://images.unsplash.com/photo-1587928002153-8ff446d44a22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQwfHxjbG90aGluZ3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-evenly overflow-hidden">
            <img src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGNsb3RoaW5nfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <h1 className="text-center self-center text-lg uppercase py-5 font-bold" >For her </h1>
            <img src="https://images.unsplash.com/photo-1587416212504-66fbb4a553de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzc1fHxjbG90aGluZ3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
        </SwiperSlide>
      </Swiper>
     

      {/* card */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1 mt-24 mx-9">
        <Card
          icon={<AiTwotoneCrown size={40} />}
          title={"Shopping on the Go"}
          subtile={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit Reprehenderit, aliquid. Laboriosam porro laudantium illo rem,possimus, exercitationem, nesciunt numquam magnam quis sint velit tempora commodi? Aspernatur odit alias ex iusto."
          }
        />
        <Card
          icon={<RiSecurePaymentFill size={40} />}
          title={"Secure Payment "}
          subtile={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit Reprehenderit, aliquid. Laboriosam porro laudantium illo rem,possimus, exercitationem, nesciunt numquam magnam quis sint velit tempora commodi? Aspernatur odit alias ex iusto."
          }
        />
        <Card
          icon={<SiAuth0 size={40} />}
          title={"Authentic and Quality"}
          subtile={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit Reprehenderit, aliquid. Laboriosam porro laudantium illo rem,possimus, exercitationem, nesciunt numquam magnam quis sint velit tempora commodi? Aspernatur odit alias ex iusto."
          }
        />
      </div>
      <div></div>
    </div>
  );
};

export default Home;
