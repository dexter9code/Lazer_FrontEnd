import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { StateProvider } from "./components/context/NavState";
import Home from "./components/Home";
import Items from "./components/Items";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Register from "./components/Register";
import getUser from "./auth/getUser";
import Logout from "./components/Logout";
import Error from "./components/404";
import Profile from "./components/Profile";
import Test from "./components/Test";
import Order from "./components/Order";

function App() {
  const [user, setUser] = useState({});
  const location = useLocation();

  useEffect(() => {
    const userdata = getUser();
    setUser(userdata);
  }, []);

  return (
    <StateProvider>
      <NavBar user={user} />
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Home />} />
        <Route path="/lazer/login" element={user ? <Home /> : <Login />} />
        <Route path="/lazer/products" element={<Items />} />
        <Route path="/lazer/register" element={<Register />} />
        <Route path="/lazer/logout" element={<Logout />} />
        <Route path="/lazer/orders" element={user ? <Order /> : <Login />} />
        <Route
          path="/lazer/account"
          element={user ? <Profile user={user} /> : <Login />}
        />
        <Route path="/*" element={<Error />} />
      </Routes>
    </StateProvider>
  );
}

export default App;
