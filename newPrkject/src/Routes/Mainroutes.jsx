import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Profile from "../components/Profile";

const Mainroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/detail/:name" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default Mainroutes;
