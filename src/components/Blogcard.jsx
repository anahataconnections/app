import React from "react";

const Blogcard = ({ imageUrl, heading, data, details }) => {
  return (
    <div className="flex flex-col -space-y-2">
      <div>
        <img src={imageUrl} alt="" className="w-[300px]" />
      </div>

      <div className="bg-[#094C3B] text-center text-white py-5 rounded-b-2xl">
        <div className=" text-lg font-bold">
          {heading}
        </div>
        <div className="font-thin text-[#9CA3AF] py-2">{details}</div>
        <div className="py-2  w-[300px] px-5 h-[100px]">{data}</div>
      </div>
    </div>
  );
};

export default Blogcard;
