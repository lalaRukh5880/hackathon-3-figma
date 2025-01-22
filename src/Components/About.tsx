import React from 'react'
import Link from 'next/link'

const About = () => {
  return (
    <div>
          <section className=" bg-black text-white py-16 px-6 ">
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center ml-[40px] mr-10">
          
          {/* Left Section - Text */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className="italic text-[#FF9F0D] mb-2">About us</p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-[#FF9F0D]">We</span> Create the best foody product
            </h2>
            <p className="text-gray-400 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non
              dui volutpat fringilla. Ultrices mattis sed vitae risus.
            </p>
            <ul className="text-gray-400 list-none space-y-2 mb-6">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#FF9F0D] rounded-full mr-2"></span> Lacus nisi, et ac dapibus sit eu velit in consequat.
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#FF9F0D] rounded-full mr-2"></span> Quisque diam pellentesque bibendum non dui volutpat fringilla.
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#FF9F0D] rounded-full mr-2"></span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
            </ul>
            <Link href="Readmore" className="bg-[#FF9F0D] hover:bg-[#FF9F0D] text-white py-2 px-4 rounded transition duration-300" >
              Read More
            </Link>
          </div>
  
          {/* Right Section - Images */}
          <div className="md:w-1/2 gap-4  ">
            <div className=" mb-2">
              <img
                src="/about/main-1.png"
                alt="Food"
                width={450}
                height={330} />
            </div>
            <div className=" flex space-x-2">
              <img
                src="/about/main-2.png"
                alt="Food"
                width={222}
                height={194} />
            
              <img
                src="/about/main-3.png"
                alt="Food"
                width={222}
                height={194}
                className="mr-[200px]"/>
            </div>
          </div>
        </div>
      </section>
      
      
    </div>
  )
}

export default About
