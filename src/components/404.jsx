import React from "react";
import Lottie from "react-lottie";

import lost from "../assets/lottie/lost.json";

const Error = () => {
  const animationOpitons = {
    loop: true,
    autoPlay: true,
    animationData: lost,
    renderSettings: {
      preserveAspectRatio: "XMidYMid Slice",
    },
  };

  return (
    <div>
      <div className=" lg:w-full h-[700px]">
        <Lottie options={animationOpitons} />
      </div>
      <div className="text-center">
        <h1 className="text-xl font-bold capitalize">take me back ?</h1>
      </div>
    </div>
  );
};

export default Error;
