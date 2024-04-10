import React from 'react';
import { Outlet } from "react-router-dom";
import Home from '../pages/home/Home';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
const Root = () => {
    return (
        <div className="max-w-6xl  md:mx-auto mx-6 my-10">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;