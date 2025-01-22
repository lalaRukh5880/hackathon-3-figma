import React from 'react';
import Link from 'next/link';
import Image from 'next/image';



const Menu = () => {
  return (
    <div className='w-full  bg-black flex justify-center items-center '>
        <div className='w-[80%] flex flex-col gap-[40px] justify-center items-center text-white'>
        {/*  */}
        <div className=' flex flex-col gap-[30px]'>
         <div className='flex flex-col justify-center items-center' >
            {/* today */}
             <h1 className='text-[#FF9F0D]'>Choose & pick</h1>
            {/* flashsales line */}
            <div className='flex justify-between items-center mt-5'>
            <h2 className='font-semibold text-[20px] md:text-[36px] md:leading-[48px] '><span className='text-[#FF9F0D]'>Fr</span>om Our Menu</h2>
            </div>
            </div>
            <ul className='lg:flex hidden text-white  items-center space-x-6 xl:space-x-10'>
            <li className='navlink'>
                <Link href="#">Breakfast</Link>
            </li>
            <li className='navlink'>
                <Link href="#">Lunch</Link>
            </li>

            <li className='navlink'>
                <Link href="#">Dinner</Link>
            </li>

            <li className='navlink'>
                <Link href="#">Dessert</Link>
            </li>

            <li className='navlink'>
                <Link href="#">Drink</Link>
            </li>

            <li className='navlink'>
                <Link href="#">Snacks</Link>
            </li>
            <li className='navlink'>
                <Link href="#">Soups</Link>
            </li>
        </ul>
           </div>
           <div className='flex justify-evenly gap-[20px]   max-sm:grid max-sm:grid-col-1 md:grid-col-1 lg:grid-cols-4 '>
            {/* product1 */} 
            <div className='max-sm:w-[320px] h-[406px]  rounded border border-[#0000004D] flex justify-center items-center'>

            <Image src="/menu2/menu.png" alt='food1' width={340} height={362} className='hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105' />
            
            </div>

            {/* product2 */}
           
           <div className='max-sm:w-[320px] w-[376px]  rounded border border-[#0000004D] flex-col gap-5 flex justify-center items-center  cursor-pointer '>
            <div className='flex flex-row justify-center items-center gap-2 text-[14px] lg:text-[16px] '>
                   <Image src="/menu2/menu1.png" alt='menu1'  width={80} height={79} className='w-[80px] h-[80px]' />
                   <div className='flex flex-col gap-1'>
                      <h1 className='font-bold text-[20px] leading-[28px]'>Lettuce Leaf</h1>
                      <p className='font-normal text-[14px] leading-[22px]'>Lacus nisi, et ac dapibus velit in consequat. </p>
                      <p className='font-bold text-[18px] leading-[26px] text-[#FF9F0D]'>12.5$</p>
                   </div>
                </div>

                <div className='flex flex-row justify-center items-center gap-2 text-[14px] lg:text-[16px] '>
                   <Image src="/menu2/menu2.png" alt='menu1'width={80} height={79} className='w-[80px] h-[80px]' />
                   <div className='flex flex-col gap-1'>
                      <h1 className='font-bold text-[20px] leading-[28px]'>Fresh Breakfast</h1>
                      <p className='font-normal text-[14px] leading-[22px]'>Lacus nisi, et ac dapibus velit in consequat. </p>
                      <p className='font-bold text-[18px] leading-[26px] text-[#FF9F0D]'>9.5$</p>
                   </div>
                </div>

                <div className='flex flex-row justify-center items-center gap-2 text-[14px] lg:text-[16px] '>
                   <Image src="/menu2/menu3.png" alt='menu1' width={80} height={79} className='w-[80px] h-[80px]' />
                   <div className='flex flex-col gap-1'>
                      <h1 className='font-bold text-[20px] leading-[28px]'>Mild Butter</h1>
                      <p className='font-normal text-[14px] leading-[22px]'>Lacus nisi, et ac dapibus velit in consequat. </p>
                      <p className='font-bold text-[18px] leading-[26px] text-[#FF9F0D]'>18.5$</p>
                   </div>
                </div>

                <div className='flex flex-row justify-center items-center gap-2 text-[14px] lg:text-[16px] '>
                   <Image src="/menu2/menu4.png" alt='menu1' width={80} height={79} className='w-[80px] h-[80px]' />
                   <div className='flex flex-col gap-1'>
                      <h1 className='font-bold text-[20px] leading-[28px]'>Fresh Bread</h1>
                      <p className='font-normal text-[14px] leading-[22px]'>Lacus nisi, et ac dapibus velit in consequat. </p>
                      <p className='font-bold text-[18px] leading-[26px] text-[#FF9F0D]'>11.5$</p>
                   </div>
                </div>
            </div>

           
            
           
              
           {/* product3 */}
            
           <div className=' max-sm:w-[320px] w-[376px] rounded border border-[#0000004D] flex-col gap-5 flex justify-center items-center  cursor-pointer '>
            <div className='flex flex-row justify-center items-center gap-2 text-[14px] lg:text-[16px] '>
                   <Image src="/menu2/menu5.png" alt='menu1' width={80} height={79} className='w-[80px] h-[80px]' />
                   <div className='flex flex-col gap-1'>
                      <h1 className='font-bold text-[20px] leading-[28px]'>Lettuce Leaf</h1>
                      <p className='font-normal text-[14px] leading-[22px]'>Lacus nisi, et ac dapibus velit in consequat. </p>
                      <p className='font-bold text-[18px] leading-[26px] text-[#FF9F0D]'>12.5$</p>
                   </div>
                </div>

                <div className='flex flex-row justify-center items-center gap-2 text-[14px] lg:text-[16px] '>
                   <Image src="/menu2/menu6.png" alt='menu1' width={80} height={79} className='w-[80px] h-[80px]' />
                   <div className='flex flex-col gap-1'>
                      <h1 className='font-bold text-[20px] leading-[28px]'>Fresh Breakfast</h1>
                      <p className='font-normal text-[14px] leading-[22px]'>Lacus nisi, et ac dapibus velit in consequat. </p>
                      <p className='font-bold text-[18px] leading-[26px] text-[#FF9F0D]'>9.5$</p>
                   </div>
                </div>

                <div className='flex flex-row justify-center items-center gap-2 text-[14px] lg:text-[16px] '>
                   <Image src="/menu2/menu7.png" alt='menu1' width={80} height={79} className='w-[80px] h-[80px]' />
                   <div className='flex flex-col gap-1'>
                      <h1 className='font-bold text-[20px] leading-[28px]'>Mild Butter</h1>
                      <p className='font-normal text-[14px] leading-[22px]'>Lacus nisi, et ac dapibus velit in consequat. </p>
                      <p className='font-bold text-[18px] leading-[26px] text-[#FF9F0D]'>18.5$</p>
                   </div>
                </div>

                <div className='flex flex-row justify-center items-center gap-2 text-[14px] lg:text-[16px] '>
                   <Image src="/menu2/menu8.png" alt='menu1' width={80} height={79} className='w-[80px] h-[80px]' />
                   <div className='flex flex-col gap-1'>
                      <h1 className='font-bold text-[20px] leading-[28px]'>Fresh Bread</h1>
                      <p className='font-normal text-[14px] leading-[22px]'>Lacus nisi, et ac dapibus velit in consequat. </p>
                      <p className='font-bold text-[18px] leading-[26px] text-[#FF9F0D]'>11.5$</p>
                   </div>
                </div>
            </div>

            
          </div>



           </div>

        </div>
      
   
  )
}

export default Menu