import React from "react";
import {Link }from 'react-router-dom'
const Hero = () => {
  return (
    <section className="h-[400px] bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justifya-around h-full">
      <div className="flex flex-col justify-center">
        <div class='font-semibold flex items-center uppercase' >
          <div className="w-10 h-[2px] bg-red-500 mr-3"></div>New trend
        </div>
        <h1 className="text-[70px] leading-[1.1] font-light mb-4">AUTUMN SALE STYLISH <br />
        <span className="font-semibold flex items-center uppercase">  WOMENS </span>
         </h1>
         <Link to={'/'} className='self-start uppercase font-semibold border-b-2 border-primary'>
         Discover More</Link>
      </div>
<div className="hidden lg:block ">

    <img src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2FsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
    </div>
    </div>
    </section>
  );
};

export default Hero;
