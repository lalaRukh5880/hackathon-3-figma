import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Food = () => {
    return (
        <div className='bg-black'>
            <div className="w-full h-auto bg-black py-8">
                {/* Title Section */}
                <div className="flex flex-col items-center text-center space-y-2">
                    <h3 className="text-[#FF9F0D] font-poppins font-normal text-sm md:text-base">
                        Food Category
                    </h3>
                    <h1 className="text-white font-semibold text-lg md:text-2xl">
                        Choose Food Item
                    </h1>
                </div>

                {/* Food Items */}
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                    <Image
                        src="/about/food-1.png"
                        alt="food"
                        width={205}
                        height={286}
                        className="w-[120px] sm:w-[150px] md:w-[205px] h-auto"
                    />
                    <Image
                        src="/about/food-2.png"
                        alt="food"
                        width={205}
                        height={286}
                        className="w-[120px] sm:w-[150px] md:w-[205px] h-auto"
                    />
                    <Image
                        src="/about/food-3.png"
                        alt="food"
                        width={205}
                        height={286}
                        className="w-[120px] sm:w-[150px] md:w-[205px] h-auto"
                    />
                    <Image
                        src="/about/food-4.png"
                        alt="food"
                        width={205}
                        height={286}
                        className="w-[120px] sm:w-[150px] md:w-[205px] h-auto"
                    />
                </div>
            </div>

            <div className='w-full flex justify-center items-center bg-black mt-[50px]'>
                <Image src="/Whychoseus(1).png" alt='whs' width={1000} height={600} />
            </div>
            <div className='w-full flex justify-center items-center '>

                <div className='w-[80%] justify-between gap-[40px]  items-center text-white px-10 md:lg:px-20 mt-[80px]'>
                    {/*  */}
                    <div className='flex justify-between gap-[20px] max-sm:gap-16 max-sm:grid max-sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 '>
                        <div className='flex flex-col gap-3 items-center justify-center'>
                            <Image src="/services/Group.png" alt='group' width={100} height={100} />
                            <p className='font-bold max-sm:text-[18px] text-[18px] leading-[32px]'>Professional Chefs</p>
                            <h1 className='font-bold text-[20px]'>420</h1>

                        </div>
                        <div className='flex flex-col gap-3 items-center justify-center'>
                            <Image src="/services/Group (1).png" alt='group' width={100} height={100} />
                            <p className='font-bold max-sm:text-[18px] text-[18x] leading-[32px]'>Items Of Food</p>
                            <h1 className='font-bold text-[20px]'>320</h1>

                        </div>
                        <div className='flex flex-col gap-3 items-center justify-center'>
                            <Image src="/services/Group (2).png" alt='group' width={100} height={100} />
                            <p className='font-bold max-sm:text-[18px] text-[18px] leading-[32px]'>Years Of Experienced</p>
                            <h1 className='font-bold text-[20px]'>30+</h1>

                        </div>
                        <div className='flex flex-col gap-3 items-center justify-center'>
                            <Image src="/services/Group (3).png" alt='group' width={100} height={100} />
                            <p className='font-bold max-sm:text-[18px] text-[18px] leading-[32px]'>Happy Customers</p>
                            <h1 className='font-bold text-[20px]'>220</h1>

                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full  bg-black flex justify-center items-center mt-[50px] '>
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
                                <Image src="/menu2/menu1.png" alt='menu1' width={80} height={79} className='w-[80px] h-[80px]' />
                                <div className='flex flex-col gap-1'>
                                    <h1 className='font-bold text-[20px] leading-[28px]'>Lettuce Leaf</h1>
                                    <p className='font-normal text-[14px] leading-[22px]'>Lacus nisi, et ac dapibus velit in consequat. </p>
                                    <p className='font-bold text-[18px] leading-[26px] text-[#FF9F0D]'>12.5$</p>
                                </div>
                            </div>

                            <div className='flex flex-row justify-center items-center gap-2 text-[14px] lg:text-[16px] '>
                                <Image src="/menu2/menu2.png" alt='menu1' width={80} height={79} className='w-[80px] h-[80px]' />
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




        </div>
    )
}

export default Food
