import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { StateProvider } from "./components/context/NavState";
import Home from "./components/Home";
import Items from "./components/Items";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Register from "./components/Register";
import getUser from "./auth/getUser";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const userdata = getUser();
    setUser(userdata);
  });

  return (
    <StateProvider>
      <NavBar user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lazer/login" element={<Login />} />
        <Route path="/lazer/products" element={<Items />} />
        <Route path="/lazer/register" element={<Register />} />
        <Route path="/lazer/logout" />
      </Routes>
    </StateProvider>
  );
}

export default App;
