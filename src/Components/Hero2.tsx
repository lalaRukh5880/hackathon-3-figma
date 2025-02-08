import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';

const Hero2 = () => {
  return (
    <div className="w-full bg-black py-10">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center space-y-2">
        <h3 className="text-[#FF9F0D] font-poppins font-normal text-sm md:text-base">
          Chefs
        </h3>
        <h1 className="text-white font-semibold text-lg md:text-2xl">
          <span className="text-[#FF9F0D] font-semibold text-lg md:text-2xl">
            Me
          </span>
          et Our Chef
        </h1>
      </div>

      {/* Chef Cards */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <Image
          src="/ourchef/Chef card.png"
          alt="Chef"
          width={205}
          height={286}
          className="w-[120px] sm:w-[150px] md:w-[205px] h-auto"
        />
        <Image
          src="/ourchef/Card 2.png"
          alt="Chef"
          width={205}
          height={286}
          className="w-[120px] sm:w-[150px] md:w-[205px] h-auto"
        />
        <Image
          src="/ourchef/Card 3.png"
          alt="Chef"
          width={205}
          height={286}
          className="w-[120px] sm:w-[150px] md:w-[205px] h-auto"
        />
        <Image
          src="/ourchef/Card 4.png"
          alt="Chef"
          width={205}
          height={286}
          className="w-[120px] sm:w-[150px] md:w-[205px] h-auto"
        />
      </div>

      {/* See More Button */}
      <div className="flex justify-center mt-6">
        <Link
          href="/Ourchef"
          className="text-white text-sm md:text-base w-[140px] h-[40px] md:w-[160px] md:h-[50px] lg:w-[190px] lg:h-[60px] border-[1px] border-[#FF9F0D] rounded-full hover:bg-[#FF9F0D] flex items-center justify-center"
        >
          See More
        </Link>
      </div>

      {/* Testimonials Section */}
      <section className="px-4 md:px-12 mt-12 ml-10">
        <h2 className="text-orange-500 font-bold text-base md:text-lg text-center md:text-left">
          Testimonials
        </h2>
        <h3 className="text-white font-semibold text-xl md:text-3xl text-center md:text-left mt-2">
          What our clients are saying
        </h3>

        <div className="text-center">
       
      </div>

      {/* Testimonial Card */}
      <div className="relative max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        {/* Client Image */}
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
          <Image
            src="/about/client1.png" // Replace with your image path
            alt="Client Picture"
            width={100}
            height={100}
            className="rounded-full border-4 border-white shadow-md"
          />
        </div>

        {/* Testimonial Content */}
        <div className="text-center mt-10">
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla. Suspendisse
            ultricies nibh non pulvinar ultrices.
          </p>
          <div className="flex justify-center mt-4">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-orange-500" />
            ))}
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-bold">Alamin Hasan</h3>
            <p className="text-gray-500">Food Specialist</p>
          </div>
        </div>
      </div>

      {/* Carousel Dots */}
      <div className="flex justify-center items-center gap-2 mt-6">
        <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
      </div>
      </section>


      {/* Hero Section*/}

      <div className="relative w-full h-[558px] py-10">
  <Image
    src="/bg-process.png" // Replace with your image path
    alt="Food Banner"
    width={1918}
    height={650}
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-end pr-6 md:pr-12">
    {/* Text Content */}
    <p className="text-yellow-500 text-sm md:text-base font-medium text-right">
      Restaurant Elite Process
    </p>
    <h1 className="text-white font-bold text-2xl md:text-4xl leading-tight text-right">
      We Document Every Food Bean Process <br /> until it is saved
    </h1>
    <p className="text-white text-sm md:text-base mt-4 max-w-md text-right">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida non
      pharetra fermentum non eu suscipit tristique elementum. Dictum egestas
      at tempor elit donec.
    </p>
    <div className="mt-6 flex justify-end space-x-4">
      <Link
        href="/read-more"
        className="px-6 py-2 bg-yellow-500 text-black font-medium text-sm rounded-full hover:bg-yellow-600 transition"
      >
        Read More
      </Link>
      <Link
        href="/play-video"
        className="px-6 py-2 border border-yellow-500 text-yellow-500 font-medium text-sm rounded-full hover:bg-yellow-500 hover:text-black transition"
      >
        Play Video
      </Link>
    </div>
  </div>
</div>



      {/* Blog Post */}

      <div className="bg-black ">
        <div className="text-center">
          <p className="text-yellow-500 font-medium">Blog Post</p>
          <h2 className="text-white text-2xl md:text-3xl font-bold mt-2">
            Latest <span className="text-yellow-500">News & Blog</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4 lg:px-16">
          {/* Blog Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/burger.png" // Replace with your image path
              alt="Blog 1"
              width={600}
              height={400}
              className="w-full h-[200px] object-cover"
            />
            <div className="p-4">
              <p className="text-gray-500 text-sm">10 February 2022</p>
              <h3 className="text-black font-semibold text-lg mt-2">
                Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis
              </h3>
              <div className="mt-4 flex items-center justify-between">
                <Link
                  href="/blog/1"
                  className="text-yellow-500 text-sm font-medium hover:underline"
                >
                  Learn More
                </Link>
                <div className="flex space-x-3">
                  <span className="text-gray-500 text-sm">20</span>
                  <span className="text-gray-500 text-sm">30</span>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/pizza.png" // Replace with your image path
              alt="Blog 2"
              width={600}
              height={400}
              className="w-full h-[200px] object-cover"
            />
            <div className="p-4">
              <p className="text-gray-500 text-sm">10 February 2022</p>
              <h3 className="text-black font-semibold text-lg mt-2">
                Morbi Sodales Tellus Eti, In Blandit Risus Suscipit A
              </h3>
              <div className="mt-4 flex items-center justify-between">
                <Link
                  href="/blog/2"
                  className="text-yellow-500 text-sm font-medium hover:underline"
                >
                  Learn More
                </Link>
                <div className="flex space-x-3">
                  <span className="text-gray-500 text-sm">15</span>
                  <span className="text-gray-500 text-sm">25</span>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/tacos.png" // Replace with your image path
              alt="Blog 3"
              width={600}
              height={400}
              className="w-full h-[200px] object-cover"
            />
            <div className="p-4">
              <p className="text-gray-500 text-sm">10 February 2022</p>
              <h3 className="text-black font-semibold text-lg mt-2">
                Curabitur Rutrum Velit Ac Congue Malesuada
              </h3>
              <div className="mt-4 flex items-center justify-between">
                <Link
                  href="/blog/3"
                  className="text-yellow-500 text-sm font-medium hover:underline"
                >
                  Learn More
                </Link>
                <div className="flex space-x-3">
                  <span className="text-gray-500 text-sm">10</span>
                  <span className="text-gray-500 text-sm">20</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
