import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[558px]">
        <Image
          src="/bg-process.png" // Replace with your image path
          alt="Food Banner"
          width={1918}
          height={650}/>
        <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-start ">
          <p className="text-yellow-500 text-sm md:text-base font-medium">
            Restaurant Elite Process
          </p>
          <h1 className="text-white font-bold text-2xl md:text-4xl leading-tight">
            We Document Every Food Bean Process <br /> until it is saved
          </h1>
          <p className="text-white text-sm md:text-base mt-4 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida non
            pharetra fermentum non eu suscipit tristique elementum. Dictum
            egestas at tempor elit donec.
          </p>
          <div className="mt-6 flex space-x-4">
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

      {/* Blog Section */}
      <div className="bg-black py-10">
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

export default HomePage;
