import React from 'react'
import Image from 'next/image'

const Food = () => {
  return (
    <div className='bg-black'>
           <div className='w-full h-[400px] bg-black '>
                <div className='justify-center text-center '>
                    <h3 className='text-[#FF9F0D] font-poppins font-normal'>Food Category</h3> 
                    <h1 className='text-white font-semibold text-2xl'>Choose Food Item</h1>
                </div>
        
                <div className='flex justify-center space-x-3 mt-[40px]'>
                    <Image src="/About/food-1.png" alt="food" width={205} height={286} />
                    <Image src="/About/food-2.png" alt="food" width={205} height={286} />
                    <Image src="/About/food-3.png" alt="food" width={205} height={286} />
                    <Image src="/About/food-4.png" alt="food" width={205} height={286} />
                </div>
        
               
        
        
            </div>
            <div className='w-full flex justify-center items-center bg-black mt-[50px]'>
              <Image src="/Why chose us (1).png "  alt='whs' width={1000} height={600} />
            </div>
             <div className='w-full flex justify-center items-center '>
            
                    <div className='w-[80%] justify-between gap-[40px]  items-center text-white px-10 md:lg:px-20 mt-[80px]'>
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

export default Food
