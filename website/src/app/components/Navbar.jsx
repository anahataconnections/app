import React from "react";
import Image from "next/image";
import Link from "next/link";
// import our from "../Our_story/Our_story"
const Navbar = () => {
  return (
    <header className=" bg-[#094C3B] shadow-md h-[100px] flex items-center px-4">
      <div className="flex justify-between items-center w-full max-w-screen-xl">
        
        <div className="flex items-center justify-center">
        
          <Image
            src="/assets/logo1.png"
            width={100}
            height={100}
            className="hidden md:block "
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
          <div className="mt-3 font-EvaMayasari font-semibold text-5xl text-white">Anahata Connections</div>
          {/* <div className="font-semibold satisfy-regular text-4xl">Anahata Connection</div> */}
          </div>

        <div className="flex items-center gap-x-10 font-semibold text-xl ">
          <div className="cursor-pointer hover:text-[#808080] hover:transition duration-300 ease-in-out text-white"><Link href="/Home">Home</Link></div>
          <div className="cursor-pointer hover:text-[#808080] hover:transition duration-300 ease-in-out text-white"><Link href="/Our_story">Our Story</Link></div>
          <div className="cursor-pointer hover:text-[#808080] hover:transition duration-300 ease-in-out text-white"><Link href="/Blog">Blog</Link></div>
          <div className="cursor-pointer hover:text-[#808080] hover:transition duration-300 ease-in-out text-white"><Link href="/Home/#faq">FAQs</Link></div>
          <div className="border-solid border-2 border-white bg-[#094C3B] text-white rounded-[32px] px-10 py-2 cursor-pointer hover:bg-[#286f5d]"><Link href="/Signin">Sign In</Link></div>
        </div>
      
        
      </div>
    </header>
  );
};

export default Navbar;
