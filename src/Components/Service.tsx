import React from 'react';
import Image from 'next/image';

const Service = () => {
  return (
    <div className='bg-black '>
    <div className='w-full flex justify-center items-center '>

        <div className='w-[80%] justify-between gap-[40px]  items-center text-white px-10 md:lg:px-20'>
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
      
    
    

  )
}

export default Service