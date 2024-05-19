/* eslint-disable */

"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";


const Navbar = () => {
  return (
    <header className="bg-[#094C3B] h-[90px] customPhone:h-[75px] custom:h-[90px] flex px-16">
      <div className="flex flex-col md:flex-row  justify-between items-center w-full ">

        <div className="flex items-center justify-center md:justify-start">
          <Image
            src="/assets/logo1.png"
            width={80}
            height={80}
            className="hidden md:block"
            alt="Anahata Connections Logo"
          />
          <div className="mt-2 md:mt-2 ml-[-14px] font-EvaMayasari font-semibold text-xl md:text-3xl sm:text-2xl text-white">Anahata Connections</div>
        </div>

        <div className="flex items-center gap-x-8 font-semibold lg:text-[16px] md:text-xs sm:text-sm  text-[9px] font-sarabun ">
          <div className="cursor-pointer hover:text-[#808080] hover:transition duration-300 ease-in-out text-white"><Link href="/Home">Home</Link></div>
          <div className="cursor-pointer hover:text-[#808080] hover:transition duration-300 ease-in-out text-white text-nowrap"><Link href="/Our_story">Our Story</Link></div>
          <div className="cursor-pointer hover:text-[#808080] hover:transition duration-300 ease-in-out text-white"><Link href="/Blog">Blog</Link></div>
          <div className="cursor-pointer hover:text-[#808080] hover:transition duration-300 ease-in-out text-white"><Link href="/Home/#faq">FAQs</Link></div>
          <div className="border-solid border-2 border-white bg-[#094C3B] text-white rounded-[32px] w-20 lg:w-24 text-center customPhone:p-1  customPhone:my-2 px-2 py-2 cursor-pointer hover:bg-[#286f5d]"><Link href="/Signin">Sign In</Link></div>
        </div>

      </div>
    </header>
  );
};

export default Navbar;