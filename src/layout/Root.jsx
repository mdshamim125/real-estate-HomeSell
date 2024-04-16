import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Home from "../pages/home/Home";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
const Root = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing options
      once: true, // Whether animation should only happen once
    });
  }, []);
  return (
    <div>
      <div className="max-w-6xl  md:mx-auto mx-6">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
