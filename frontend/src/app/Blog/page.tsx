import React from "react";
import Image from "next/image";
// import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from "next/link";

async function fetchBlog() {
  try {
    const res = await fetch(`http://localhost:1337/api/blogs/?populate=*`);
    const response = await res.json();
    return response;
  } catch (err) {
    console.error(err);
  }
}
// export default function Blog() {
  const Blog = async () =>  {

      const baseurl = "http://localhost:1337 ";
      const Blog = await fetchBlog();
      // console.log(Blog.data);
  return (
    <main className="bg-white" >
      <Navbar />
      <Image
            src="/assets/blog_bg.png"
            width={500}
            height={500}
            className="w-[100%]"
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
          <div className="bg-home-page-back bg-contain bg-no-repeat">
          <div className="font-Pattaya mt-2 flex justify-center items-center text-7xl text-[#094C3B]">Blogs</div>
          <div className="flex flex-row mx-10">
            <div className=" w-[70%]">
          <div className=" my-5 p-5" >
          <Image
            src={(baseurl+Blog.data[2].attributes.image.data.attributes.url).replace(/\s/g, "")}
            width={800}
            height={400}
            className=""
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
          <div >{Blog.data[2].attributes.published}</div>
          <div className=" fond-bold font-nota text-[35px] text-black">{Blog.data[2].attributes.tiltle}</div>
          <div className="fond-nota text-l">{Blog.data[2].attributes.content[0].children[0].text.substring(0, 400)+"...."}</div>
          <div ><Link className="underline  font-nota font-bold" href={`/Blog_main/${Blog.data[2].attributes.tiltle}`}>Read  More</Link></div>

          </div>
          <div className=" my-5 p-5" >
          <Image
            src={(baseurl+Blog.data[3].attributes.image.data.attributes.url).replace(/\s/g, "")}
            width={700}
            height={400}
            className=""
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
          <div>{Blog.data[3].attributes.published}</div>
          <div className=" fond-bold font-nota text-[35px] text-black">{Blog.data[3].attributes.tiltle}</div>
          <div className="fond-nota text-l">{Blog.data[3].attributes.content[0].children[0].text.substring(0, 400)+"...."}</div>
          <div><Link className="underline font-nota font-bold" href={`/Blog_main/${Blog.data[3].attributes.tiltle}`}>Read  More</Link></div>

          </div>
          </div>
          <div className="my-10">
          {Blog.data.map((item) => {
          
          return (  
            <div>
              <div className="flex flex-row my-4">
              <Image
            src={(baseurl+item.attributes.image.data.attributes.url).replace(/\s/g, "")}
            width={150}
            height={150}
            className=""
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
          <div className="w-[200px] ml-2">
            <h1 className="text-2xl font-nota font-bold text-black "><Link  href={`/Blog_main/${item.attributes.tiltle}`}>{item.attributes.tiltle}</Link></h1>
            <div>{item.attributes.published}</div>
            </div>
              </div>
              </div>
          )})};
          </div>

          </div>
          


          </div>
<div className='bg-flower_back bg-no-repeat bg-cover'>
      <Footer />
     
      </div>
    </main>
  );
}
export default Blog;