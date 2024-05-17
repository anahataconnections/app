/* eslint-disable */
"use-client"

import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js
import Motionframe from "./Motionframe";
import "@/app/Style/hero.css";

const Hero = () => {

  const handleClick = () => {
    router.push('/Whyanahata');
  };

  return (
    <div className="bg-home-page-back bg-cover bg-no-repeat">
      <div className="bg-radial-gradient flex justify-center overflow-hidden frame">
        <Motionframe />
      </div>
      <div className="h-[680px] bg-white-gradient flex flex-col items-center justify-center ">
        <header className="font-Pattaya text-[#0C6242] text-[45px] max-sm:text-[29px] sm:max-md:text-[42px] custom:translate-y-[-50px] custom2:translate-y-[-55px]">
          Why Anahata Connections?
        </header>
        <header className="text-black font-Satisfy text-[27px]  max-sm:text-[20px] sm:max-md:text-[25px] w-[90%] sm:w-[80%] md:w-[70%] custom2:w-[70%] text-center ">
          Welcome to Anahata Connections, where love intertwines with
          spirituality. Explore meaningful connections grounded in yogic
          science and the wisdom of the heart chakra. Our platform unites
          kindred spirits aligned with mindfulness and compassion. Join us on
          the journey to deeper connections and conscious relationships
        </header>
        {/* Use Link component to navigate to WhyAnahita page */}
        <div className="flex justify-center">
          <Link
            href="../../Whyanahata" // Corrected the typo here
            className="mt-2 bg-[#094C3B] text-white rounded-[32px] px-5 py-3 cursor-pointer hover:bg-[#286f5d] font-semibold custom:my-8 custom2:my-8"
          >
            KNOW MORE
          </Link>
        </div>

      </div>
    </div>
  );

};

export default Hero;
