// Page.tsx

"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";
import Blogs from "../components/Blogs";

interface BannerImage {
  data: any;
  id: string;
  formats: {
    thumbnail: {
      url: string;
    };
  };
}

interface Data {
  attributes: {
    banner_Image: { id: string; bannerImage: BannerImage };
    what_is_anahata_chakra: {
      image: any;
      Heading_title: string;
      date: string;
      content: { type: string; children: { text: string }[] }[];
    };
  };
}

async function fetchWhy(): Promise<Data | null> {
  try {
    const res = await fetch(
      `https://cms.anahataaconnections.com/api/about-anahata?populate=banner_Image.bannerImage,what_is_anahata_chakra,what_is_anahata_chakra.image`
    );
    const response = await res.json();
    return response.data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export default function WhyAnahata() {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchWhy();
        setData(result);
        setLoading(false); 
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setLoading(false); 
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  if (!data) return <div>No data found.</div>; 

  const { banner_Image, what_is_anahata_chakra } = data.attributes;

  console.log(what_is_anahata_chakra);
  console.log(banner_Image);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays > 30) {
      const months = Math.floor(diffDays / 30);
      return `${months} months ago`;
    } else {
      return `${diffDays} days ago`;
    }
  };

  const bannerImageUrl =
    data.attributes.banner_Image.bannerImage;

  return (
    <div className="bg-transparent w-full h-full top-0 overflow-x-hidden z-20 relative">
      <Image
        src={bannerImageUrl.data.attributes.url}
        alt="Hero Image"
        width={1920}
        height={400}
        className="w-full object-cover h-[60vh] custom1:h-[70vh] custom:h-[68vh]"
      />

      <div className="flex justify-center items-center "></div>
      <div className="text-center mt-16 custom1:mt-24 customMax:mt-28">
        <h1 className="text-5xl my-4 text-[#166534] font-Pattaya">
          {what_is_anahata_chakra.Heading_title}
        </h1>
        <p className="text-gray-500">
          {formatDate(what_is_anahata_chakra.date)} • 5 min read
        </p>
      </div>
      <div className="flex justify-center my-4">
        <div>
          <Image
            src={what_is_anahata_chakra.image.data.attributes.url}
            alt="Additional Image"
            width={500}
            height={100}
            className="object-fit bg-cover custom:mt-12 custom1:mx-20 custom1:mt-12 custom1:w-[835px] customMax:w-[1700px] customMax:max-h-[570px] rounded-md"
          />
        </div>
      </div>
      <div className="mx-20  custom1:mx-20 customMax:mx-[14.7rem] mt-8 text-justify">
        {what_is_anahata_chakra.content.map((item, index) => (
          <p key={index} className="my-2 text-black text-[1.3rem] ">
            {item.children.map((child, idx) => (
              <span key={idx}>
                {child.text}
                {"\n"}
              </span>
            ))}
          </p>
        ))}
      </div>

      <div className="mb-10 z-[11]">
        <h1 className="my-20 text-[#166534] font-Pattaya text-center text-[2.5rem] xl:text-[3rem] ">
          More from us
        </h1>
        <Blogs />
      </div>
    </div>
  );
}
