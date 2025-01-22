import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaStar } from 'react-icons/fa'

const Hero3 = () => {
  return (
    
        <div className='w-full h-[1300px] bg-black py-10'>
                <div className='justify-center text-center '>
                    <h3 className='text-[#FF9F0D] font-poppins font-normal'>Chefs</h3> 
                    <h1 className='text-white font-semibold text-2xl'><span className='text-[#FF9F0D] font-semibold text-2xl'>Me
                      </span>et Our Chef</h1>
                </div>
        
                <div className='flex justify-center space-x-3 mt-[40px]'>
                    <Image src="/ourchef/Chef card.png" alt="food" width={205} height={286} />
                    <Image src="/ourchef/Card 2.png" alt="food" width={205} height={286} />
                    <Image src="/ourchef/Card 3.png" alt="food" width={205} height={286} />
                    <Image src="/ourchef/Card 4.png" alt="food" width={205} height={286} />

                
                </div>
                <div className='flex justify-center mt-[50px]'>
                <Link
               href="/Ourchef"
               className="text-white w-[200px] h-[80px] md:w-[160px] md:h-[50px] lg:w-[190px] lg:h-[60px] border-[1px] border-[#FF9F0D] rounded-[50px] hover:bg-[#FF9F0D] flex items-center justify-center px-2">
               See More
              </Link>
                </div>

                 <section className="ml-52 mt-[50px]">
                        <h2 className="text-orange-500 font-bold text-lg ">Testimonials</h2>
                        <h3 className="text-3xl md:text-4xl font-semibold mt-2 text-white">
                          What our client are saying
                        </h3>
                        <div className="max-w-3xl mx-auto mt-20 p-6 bg-white shadow-lg rounded-lg relative ml-20 ">
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
                          </div >
                          <div className='ml-72'>
                          <h3 className="text-xl font-bold mt-4">Alamin Hasan</h3>
                          <p className="text-gray-500">Food Specialist</p>
                          </div>
                        </div>
                        <div className="flex justify-center items-center gap-2 mt-4  mr-48">
                          <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
                          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
                        </div>
                      </section>
             

                
                </div>

  )
}

export default Hero3
