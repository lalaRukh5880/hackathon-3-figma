import React from 'react'
import Image from 'next/image'
import Common from '@/Components/Common'

const page = () => {
  return (
    <div className='h-[3600px]'>
      <Common title="Our Menu" subtitle="Menu" />

      {/* left section of starter menu */}

      <div className='mt-[60px] flex'>
        <Image src="/menu/starter.png" alt="starter menu" width="348" height="520" 
        className='ml-52'/>

         {/* Content */}
         <div className="w-1/2 p-8">
            <h1 className="text-3xl font-bold h-[56px]">Starter Menu</h1>
            
            <div className="border-b border-gray-300 pb-4 mb-4">
              <h2 className="h-[32px] font-bold">Alder Grilled Chinook Salmon
                <span className="text-[#FF9F0D] font-bold text-1xl float-right">32$</span>
              </h2>
              <p className="font-normal h-[24px] text-[#4F4F4F]">Toasted French bread topped with romano, cheddar</p>
              <p className="text-[#828282] font-normal">560 CAL</p>
            </div>

            <div className="border-b border-gray-300 pb-4 mb-4">
              <h2 className="h-[32px] font-bold text-[#FF9F0D]">Berries and creme tart
                <span className="text-[#FF9F0D] font-bold text-1xl float-right">43$</span>
              </h2>
              <p className="font-normal h-[24px] text-[#4F4F4F]">Gorgonzola, ricotta, mozzarella, taleggio</p>
              <p className="text-[#828282] font-normal">700 CAL</p>
            </div>

            <div className="border-b border-gray-300 pb-4 mb-4">
              <h2 className="h-[32px] font-bold">Tormentoso Bush Pizza Pintoage
                <span className="text-[#FF9F0D] font-bold text-1xl float-right">14$</span>
              </h2>
              <p className="font-normal h-[24px] text-[#4F4F4F]">Ground cumin, avocados, peeled and cubed</p>
              <p className="text-[#828282] font-normal">1000 CAL</p>
            </div>

            <div className="">
              <h2 className="h-[32px] font-bold">Spicy Vegan Potato Curry
                <span className="text-[#FF9F0D] font-bold text-1xl float-right">35$</span>
              </h2>
              <p className="font-normal h-[24px] text-[#4F4F4F]">Spreadable cream cheese, crumbled blue cheese</p>
              <p className="text-[#828282] font-normal">560 CAL</p>
            </div>
          </div>

       </div>
        

       <main className="max-w-6xl mx-auto py-12 space-y-12 ">
        {/* Starter Menu Section */}
        <section className="flex ">
          {/* Content */}
          <div className="w-1/2 p-8 ml-20">
            <h1 className="text-3xl font-bold h-[56px]">Main Course</h1>
            
            <div className="border-b border-gray-300 pb-4 mb-4">
              <h2 className="h-[32px] font-bold">Optic Big Breakfast Combo Menu
                <span className="text-[#FF9F0D] font-bold text-1xl float-right">32$</span>
              </h2>
              <p className="font-normal h-[24px] text-[#4F4F4F]">Toasted French bread topped with romano, cheddar</p>
              <p className="text-[#828282] font-normal">560 CAL</p>
            </div>

            <div className="border-b border-gray-300 pb-4 mb-4">
              <h2 className="h-[32px] font-bold ">Cashew Chicken With Stir-Fry
                <span className="text-[#FF9F0D] font-bold text-1xl float-right">43$</span>
              </h2>
              <p className="font-normal h-[24px] text-[#4F4F4F]">Gorgonzola, ricotta, mozzarella, taleggio</p>
              <p className="text-[#828282] font-normal">700 CAL</p>
            </div>

            <div className="border-b border-gray-300 pb-4 mb-4">
              <h2 className="h-[32px] font-bold"> Vegetables & Green Salad
                <span className="text-[#FF9F0D] font-bold text-1xl float-right">14$</span>
              </h2>
              <p className="font-normal h-[24px] text-[#4F4F4F]">Ground cumin, avocados, peeled and cubed</p>
              <p className="text-[#828282] font-normal">1000 CAL</p>
            </div>

            <div className="">
              <h2 className="h-[32px] font-bold">Spicy Vegan Potato Curry
                <span className="text-[#FF9F0D] font-bold text-1xl float-right">35$</span>
              </h2>
              <p className="font-normal h-[24px] text-[#4F4F4F]">Spreadable cream cheese, crumbled blue cheese</p>
              <p className="text-[#828282] font-normal">560 CAL</p>
            </div>
          </div>

          {/* Image */}
          <div className="w-1/2 flex justify-end items-center pr-8">
            <Image 
              src="/menu/maincourse.png" 
              alt="starter menu" 
              width="348" 
              height="526" 
              className=""
            />
          </div>
        </section>
      </main>

       <div className='bg-black-2 '>
          <div className='w-full h-[250px]  flex justify-center items-center '>
      
              <div className='w-[80%] justify-between gap-[40px] items-center text-white px-10 md:lg:px-20'>
                  {/*  */}
                  <div className='flex justify-between gap-[20px] max-sm:gap-16 max-sm:grid max-sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 '>
                  <div className='flex flex-col gap-3 items-center justify-center'>
                      <Image src="/services/Group.png" alt='group' width={100} height={100}/>
                      <p className='font-bold max-sm:text-[18px] text-[18px] leading-[32px]'>Professional Chefs</p>
                      <h1 className='font-bold text-[20px]'>420</h1>
      
                  </div>
                  <div className='flex flex-col gap-3 items-center justify-center'>
                      <Image src="/services/Group (1).png" alt='group'  width={100} height={100}/>
                      <p className='font-bold max-sm:text-[18px] text-[18x] leading-[32px]'>Items Of Food</p>
                      <h1 className='font-bold text-[20px]'>320</h1>
      
                  </div>
                  <div className='flex flex-col gap-3 items-center justify-center'>
                      <Image src="/services/Group (2).png" alt='group' width={100} height={100}/>
                      <p className='font-bold max-sm:text-[18px] text-[18px] leading-[32px]'>Years Of Experienced</p>
                      <h1 className='font-bold text-[20px]'>30+</h1>
      
                  </div>
                  <div className='flex flex-col gap-3 items-center justify-center'>
                      <Image src="/services/Group (3).png" alt='group' width={100} height={100}/>
                      <p className='font-bold max-sm:text-[18px] text-[18px] leading-[32px]'>Happy Customers</p>
                      <h1 className='font-bold text-[20px]'>220</h1>
      
                  </div>
                  </div>
              </div>
              </div>
              </div>

      <div className='mt-[60px] flex'>
        <Image src="/menu/dessert.png" alt="dessert" width="348" height="520" 
        className='ml-52'/>

         {/* Content */}
         <div className="w-1/2 p-8">
            <h1 className="text-3xl font-bold h-[56px]">Dessert</h1>
            
            <div className="border-b border-gray-300 pb-4 mb-4">
              <h2 className="h-[32px] font-bold">Fig and lemon cake
                <span className="text-[#FF9F0D] font-bold text-1xl float-right">32$</span>
              </h2>
              <p className="font-normal h-[24px] text-[#4F4F4F]">Toasted French bread topped with romano, cheddar</p>
              <p className="text-[#828282] font-normal">560 CAL</p>
            </div>

            <div className="border-b border-gray-300 pb-4 mb-4">
              <h2 className="h-[32px] font-bold ">Creamy mascarpone cake
                <span className="text-[#FF9F0D] font-bold text-1xl float-right">43$</span>
              </h2>
              <p className="font-normal h-[24px] text-[#4F4F4F]">Gorgonzola, ricotta, mozzarella, taleggio</p>
              <p className="text-[#828282] font-normal">700 CAL</p>
            </div>

            <div className="border-b border-gray-300 pb-4 mb-4">
              <h2 className="h-[32px] font-bold">Pastry, blueberries, lemon juice
                <span className="text-[#FF9F0D] font-bold text-1xl float-right">14$</span>
              </h2>
              <p className="font-normal h-[24px] text-[#4F4F4F]">Ground cumin, avocados, peeled and cubed</p>
              <p className="text-[#828282] font-normal">1000 CAL</p>
            </div>

            <div className="">
              <h2 className="h-[32px] font-bold">Pain au chocolat
                <span className="text-[#FF9F0D] font-bold text-1xl float-right">35$</span>
              </h2>
              <p className="font-normal h-[24px] text-[#4F4F4F]">Spreadable cream cheese, crumbled blue cheese</p>
              <p className="text-[#828282] font-normal">560 CAL</p>
            </div>
          </div>

       </div>

       <main className="max-w-6xl mx-auto py-12 space-y-12 ">
        {/* Starter Menu Section */}
        <section className="flex ">
          {/* Content */}
          <div className="w-1/2 p-8 ml-20">
            <h1 className="text-3xl font-bold h-[56px]">Drinks</h1>
            
            <div className="border-b border-gray-300 pb-4 mb-4">
              <h2 className="h-[32px] font-bold">Caffè macchiato
                <span className="text-[#FF9F0D] font-bold text-1xl float-right">32$</span>
              </h2>
              <p className="font-normal h-[24px] text-[#4F4F4F]">Toasted French bread topped with romano, cheddar</p>
              <p className="text-[#828282] font-normal">560 CAL</p>
            </div>

            <div className="border-b border-gray-300 pb-4 mb-4">
              <h2 className="h-[32px] font-bold ">Aperol Spritz Capacianno
                <span className="text-[#FF9F0D] font-bold text-1xl float-right">43$</span>
              </h2>
              <p className="font-normal h-[24px] text-[#4F4F4F]">Gorgonzola, ricotta, mozzarella, taleggio</p>
              <p className="text-[#828282] font-normal">700 CAL</p>
            </div>

            <div className="border-b border-gray-300 pb-4 mb-4">
              <h2 className="h-[32px] font-bold"> Caffe Latte Campuri
                <span className="text-[#FF9F0D] font-bold text-1xl float-right">14$</span>
              </h2>
              <p className="font-normal h-[24px] text-[#4F4F4F]">Ground cumin, avocados, peeled and cubed</p>
              <p className="text-[#828282] font-normal">1000 CAL</p>
            </div>

            <div className="">
              <h2 className="h-[32px] font-bold">Tormentoso BushTea Pintoage
                <span className="text-[#FF9F0D] font-bold text-1xl float-right">35$</span>
              </h2>
              <p className="font-normal h-[24px] text-[#4F4F4F]">Spreadable cream cheese, crumbled blue cheese</p>
              <p className="text-[#828282] font-normal">560 CAL</p>
            </div>
          </div>

          {/* Image */}
          <div className="w-1/2 flex justify-end items-center pr-8">
            <Image 
              src="/menu/drink.png" 
              alt="starter menu" 
              width="348" 
              height="526" 
              className=""
            />
          </div>
        </section>
      </main>

      <div className='text-center mt-10'>
        <h6 className='text-[#333333]'>Partners and Clients</h6>
        <h1  className='text-[#333333] font-bold text-3xl'>We work with the best people</h1>
        <div className=' flex justify-center space-x-4 mt-10'>
        <Image src="/menu/people1.png" alt="client" width={240.96} height={129.23} />
        <Image src="/menu/people2.png" alt="client" width={166.04} height={128.68} />
        <Image src="/menu/people3.png" alt="client" width={143.98} height={127.01} />
        <Image src="/menu/people4.png" alt="client" width={130.98} height={129.37} />
        <Image src="/menu/people5.png" alt="client" width={169.97} height={129.17} />
        <Image src="/menu/people6.png" alt="client" width={113.98} height={129.08} />
        </div>

      </div>
       

        
        
      

      

    </div>
  )
}

export default page
