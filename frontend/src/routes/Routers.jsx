/** @format */

// import React from "react";
import Home from "../pages/Home";
// import Services from "../pages/Services";
import Login from "../pages/Login";
import Signup from "../pages/SignUp";
import Contact from "../pages/Contact";
import ForgotPassword from "../pages/ForgotPassword";
import Appointment from "../pages/Appointment/Appointment";
import Review from "../pages/review";
// import DoctorDetails from "../pages/Doctors/DoctorDetails";
import { Routes, Route } from "react-router-dom";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/review" element={<Review />} />
    </Routes>
  );
};

export default Routers;
