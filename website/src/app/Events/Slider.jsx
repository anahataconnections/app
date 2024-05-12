/* eslint-disable */

"use client"

import left from "../../../public/left.svg"
import right from "../../../public/right.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { images } from "./constants";


const headStyles = {
  position: 'absolute',
  width: '776px',
  height: '104px',
  right:'470px',
  top: '310px',
  fontFamily: 'Pattaya',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '2.8rem',
  lineHeight: '104px',
  textAlign: 'center',
  textTransform: 'capitalize',
  color: '#FFFFFF',
  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
};

const Slider = () => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    activeImage === images.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };
  const clickPrev = () => {
    activeImage === 0
      ? setActiveImage(images.length - 1)
      : setActiveImage(activeImage - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage,clickNext]);
  return (
    <main className="place-items-center flex w-full mx- px-20 py-10 relative mt-4 ">
      <div className="absolute inset-0 bg-rgba-black-33 opacity-75"></div>

      <div
        className="absolute cursor-pointer top-1/2 transform -translate-y-1/2 left-24 z-50"
        onClick={clickPrev}
      >
        <Image src={left} alt="" />
      </div>
      <div
        className={`w-full flex justify-center items-center gap-4 transition-transform ease-in-out duration-500 md:rounded-2xl p-6 md:p-0 relative`}
      >
        {images.map((elem, idx) => (
          <div
            key={idx}
            className={`${idx === activeImage
              ? "block w-full h-[65vh] object-cover object-center transition-all duration-500 ease-in-out relative"
              : "hidden"
              }`}
          >
            <div>
              <h1 style={headStyles}
                  // className=" max-[1024px]:-translate-x-10
                  // "
              >
                3 Ways For healthy relationship
              </h1>
            </div>
            <Image
              src={elem.src}
              alt=""
              width={400}
              height={400}
              className="w-full h-full object-cover md:rounded-3xl"
            />
          </div>
        ))}
      </div>
      <div
        className="absolute cursor-pointer top-1/2 transform -translate-y-1/2 right-24 z-50"
        onClick={clickNext}
      >
        <Image src={right} alt="" />
      </div>
    </main>
  );
};

export default Slider;