import React from "react";

const Logout = () => {
  const res = localStorage.removeItem("token");
  window.location = "/";
};

export default Logout;
