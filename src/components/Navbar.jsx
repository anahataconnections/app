import React from "react";
import logo from "../assets/logo1.png";
const Navbar = () => {
  return (
    <header className=" bg-[#094C3B] shadow-md h-[100px] flex items-center px-8">
      <div className="flex justify-between items-center w-full max-w-screen-xl">
        
        <div className="flex items-center justify-center">
          <img src={logo} alt="" className="mr-8 w-14" />
          {/* <div className="font-semibold satisfy-regular text-4xl">Anahata Connection</div> */}
       

        <div className="flex items-center gap-x-10 font-semibold text-xl ">
          <div className="cursor-pointer hover:font-bold hover:transition duration-300 ease-in-out text-white">Home</div>
          <div className="cursor-pointer hover:font-bold hover:transition duration-300 ease-in-out text-white">Our Story</div>
          <div className="cursor-pointer hover:font-bold hover:transition duration-300 ease-in-out text-white">Blog</div>
          <div className="cursor-pointer hover:font-bold hover:transition duration-300 ease-in-out text-white">FAQs</div>
        </div>
        </div>
        <div className="border-solid border-2 border-white bg-[#094C3B] text-white rounded-[32px] px-10 py-2 cursor-pointer hover:bg-[#286f5d]">Sign Up</div>
      </div>
    </header>
  );
};

export default Navbar;
