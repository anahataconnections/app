"use client";
import React from "react";
import {motion} from "framer-motion";
import Image from "next/image";

import Motionframe from  "./motionframe";
// import lf from "../assets/left_flower.png";
// import rf from "../assets/right_flower.png";
// import logo from "../assets/logo1.png";

const Hero = () => {
  return (
    <div className="bg-home-page-back bg-cover bg-no-repeat ">
    {/* <div className="bg-gradient-radial from-yellow-300 to-teal-700 bg-opacity-70 flex item-center pl-[160px]"> */}
    <div className="bg-radial-gradient flex item-center pl-[160px] overflow-hidden h-screen">
    <Motionframe/>
   
    </div>
    <div className="h-[750px] bg-white-gradient">
      <header className="font-Pattaya flex items-center justify-center text-[#0C6242] text-[52px] pt-40">
        Why Anahata Connections?
      </header>

      <header className="font-Satisfy flex items-center justify-center text-4xl pt-10 w-[1050px] text-center mx-auto" >
        Welcome to Anahata Connections, where love intertwines with
        spirituality. Explore meaningful connections grounded in yogic science
        and the wisdom of the heart chakra. Our platform unites kindred spirits
        aligned with mindfulness and compassion. Join us on the journey to
        deeper connections and conscious relationships
      </header >
      <div className="flex justify-center mt-20"><div className="mt-2 bg-[#094C3B] text-white rounded-[32px] px-14 py-2.5 cursor-pointer hover:bg-[#286f5d] font-semibold">KNOW MORE</div>
</div>
      </div>
    </div>
  );
};

export default Hero;
