import React from 'react'
import Common from '@/Components/Common'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa';

const page = () => {
  return (
    <div>

      <Common title="About Us" subtitle="About" />

      <div className='w-full h-[3300px] bg-white'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center mt-[70px]">

          {/* Left Side: Images */}
          <div className="grid grid-cols-2 gap-4 lg:w-1/2">
            <div className="relative h-40 sm:h-60 lg:h-80 ml-24">
              <Image
                src="/about/about-1.png"
                alt="Tacos"
                width={200}
                height={250}
                className=" object-cover"
              />
            </div>
            <div className="relative h-40 sm:h-60 lg:h-80">
              <Image
                src="/about/about-2.png"
                alt="Dipping Sauce"
                width={200}
                height={200}
                className="object-cover mt-[40px]" />

              <Image
                src="/about/about-3.png"
                alt="Salad"
                width={200}
                height={200}

                className=" object-cover mt-4" />
            </div>



          </div>

          {/* Right Side: Text Section */}
          <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0 text-center lg:text-left">
            <h3 className="text-lg font-semibold text-[#FF9F0D]">About us</h3>
            <h2 className="text-3xl font-bold text-gray-800 mt-2 leading-tight">
              Food is an important part <br /> Of a balanced Diet
            </h2>
            <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              lacus velit, pharetra blandit varius et, consequat et dolor. Ut
              imperdiet libero sed purus ultrices rhoncus.
            </p>
            <div className="flex justify-center lg:justify-start mt-6 space-x-4">
              <button className="px-6 py-2 bg-[#FF9F0D] text-white font-medium rounded-lg shadow hover:bg-green-700 transition">
                Show more
              </button>
              <button className="flex items-center px-6 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg shadow hover:bg-gray-200 transition">

                Watch video </button>
            </div>

          </div>

        </div>

        {/* Second section */}

        <div className='mt-[250px]'>
          <h1 className='  justify text-center text-[#333333] font-poppins font-semibold text-3xl '>Why Choose Us</h1>
          <p className='  justify text-center text-[#4F4F4F] font-poppins'>Lorem ipsum dolor sit amet consectetur adipisicing  <br />  ipsam nostrum alias asperiores </p>

          <div className='flex justify-center mt-[40px]'>
            <Image src="/about/why choose us.png" alt="whs" width={1000} height={300}
            />
          </div>



        </div>
        {/* Thrid section */}
        <section className="text-white body-font">
          <div className="container px-3 py-20 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/3">
                <div className="h-full  flex justify-center items-center  flex-col border-2 rounded-lg overflow-hidden">
                  <Image

                    src="/about/Student.png"
                    width={80} height={80}
                    alt="blog"
                  />
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
                      BEST CHEF
                    </h1>
                    <p className="leading-relaxed mb-3 text-center text-black">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 flex justify-center items-center  flex-col rounded-lg overflow-hidden">
                  <Image
          
                    src="/about/Coffee.png"
                    width={80} height={80}
                    alt="blog"
                  />
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
                      120 Item food
                    </h1>
                    <p className="leading-relaxed mb-3 text-center text-black">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2  flex justify-center items-center  flex-col rounded-lg overflow-hidden">
                  <Image
                    className=" flex flex-col justify-center items-center"
                    src="/about/Person.png"
                    width={80} height={80}
                    alt="blog"

                  />
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
                      Clean Environment
                    </h1>
                    <p className="leading-relaxed mb-3 text-center text-black">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="relative bg-cover bg-center h-[420px] flex items-center justify-center"
          style={{ backgroundImage: "url('/about/Bg.png')" }}>
          <div className="absolute inset-0  bg-opacity-50"></div>
          <div className="relative text-center text-white mb-10">
            <h1 className="text-4xl md:text-6xl font-bold">Team Member</h1>
            <p className="text-lg md:text-xl mt-4 font-[400px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit <br />
              dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>

        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 top-[2300px] lg:ml-52 gap-10 items-center  justify-center absolute">
          {/* Team Member 1 */}
          <div className="">
            <Image
              src="/about/team member.png"
              alt="team"
              width={200}
              height={250}
              className=""
            />
            <h2 className="text-lg font-bold mt-2">Mark Henry</h2>
            <h3 className="text-sm text-gray-500">Owner</h3>
          </div>

          {/* Team Member 2 */}
          <div className="">
            <Image
              src="/about/team member.png"
              alt="team"
              width={200}
              height={250}
              className=""
            />
            <h2 className="text-lg font-bold mt-2">Lucky Helen</h2>
            <h3 className="text-sm text-gray-500">Chef</h3>
          </div>

          {/* Team Member 3 */}
          <div className="">
            <Image
              src="/about/team member.png"
              alt="team"
              width={200}
              height={250}
              className=""
            />
            <h2 className="text-lg font-bold mt-2">Moon Henry</h2>
            <h3 className="text-sm text-gray-500">Founder</h3>
          </div>

          {/* Team Member 4 */}
          <div className=" ">
            <Image
              src="/about/team member.png"
              alt="team"
              width={200}
              height={250}
              className=""
            />
            <h2 className="text-lg font-bold mt-2">Tom Monrow</h2>
            <h3 className="text-sm text-gray-500">Specialist</h3>
          </div>
        </div>
        <div className="px-6 md:px-20 py-12 mt-56">
      {/* Testimonials Section */}
      <section className="ml-[75px] mt-[50px]">
        <h2 className="text-orange-500 font-bold text-lg ">Testimonials</h2>
        <h3 className="text-3xl md:text-4xl font-semibold mt-2">
          What our client are saying
        </h3>
        <div className="max-w-3xl mx-auto mt-20 p-6 bg-white shadow-lg rounded-lg relative ">
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
            <Image
              src="/about/client1.png"
              alt="Client Picture"
              width={100}
              height={100}
              className="rounded-full border-4 border-white shadow-md"
            />
          </div>
          <p className="mt-16 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
            pellentesque bibendum non dui volutpat fringilla. Suspendisse ultricies
            nibh non pulvinar ultrices.
          </p>
          <div className="flex justify-center  mt-4">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-orange-500" />
            ))}
          </div>
          <p className="text-xl font-bold mt-4">Alamin Hasan</p>
          <p className="text-gray-500">Food Specialist</p>
        </div>
        <div className="flex justify-center gap-2 mt-4">
          <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        </div>
      </section>

      {/* Food Menu Section */}
      <section className='mt-[70px]'>
        <h2 className="text-center text-3xl md:text-4xl font-semibold ">
          Our Food Menu
        </h2>
        <p className="text-center text-gray-600 max-w-lg mx-auto mb-8 mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id
          placerat libero, eleifend maximus augue.
        </p>
        <div className="flex justify-center gap-6 mb-8">
          {['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Drink', 'Snack'].map(
            (item) => (
              <button
                key={item}
                className="text-gray-600 font-medium hover:text-orange-500 focus:text-orange-500"
              >
                {item}
              </button>
            )
          )}
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {Array(6)
            .fill(null)
            .map((_, i) => (
              <div
                key={i}
                className="flex justify-between items-center border-b py-4"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Alder Grilled Chinook Salmon
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Toasted French bread topped with almonds, cheddar
                  </p>
                </div>
                <p className="text-orange-500 text-xl font-bold">32$</p>
              </div>
            ))}
        </div>
      </section>
    </div>





      </div>

    </div>
  )
}

export default page
