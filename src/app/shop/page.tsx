import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import Common from "@/Components/Common";
import { client } from '@/sanity/lib/client';

interface IFood {
    _id: string,
    name: string,
    price: number,
    image_url: 'url'
}

const getFood = async () => {
    const food = await client.fetch(
        `
    *[_type=="food"]{
     _id,
      name,
      price,
      "image_url":image.asset->url, 
   }[]
    `
    )
    return food;
}


const shop = async () => {
    const food = await getFood();
    console.log(food)
    return (
        <div>

            <Common title="Our Shop" subtitle="Shop" />
            <div className="container mt-32 mb-16 flex flex-col md:flex-row gap-8  mx-auto px-4">
                <div className="md:w-[984px] w-full h-[1500px]">
                    <div className="flex flex-col md:flex-row gap-3 ml-4 w-[317]px">
                        <div className="flex w-[332px] ">
                            <label htmlFor="Sort By" className="mt-2 text-[20px] w-[81px]">
                                Sort By
                            </label>
                            <select className="opacity-30 rounded border border-gray-400 w-[236px] text-[18px] h-12">
                                <option value="Newest">Newest</option>
                            </select>
                        </div>

                        <div className="flex md:w-[236px] gap-2">
                            <label htmlFor="Show" className="mt-2 text-[20px] w-[64px]">
                                Show
                            </label>
                            <select className="opacity-30 rounded border border-gray-400 md:w-[236px] text-[18px] h-12">
                                <option value="Default">Default</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-6">
                        {food.map((item: IFood) => (
                            <div key={item._id} className="shadow-md p-4 w-full m-4 rounded-lg">
                                <Link href={`/shop/${item._id}`}>
                                    <Image
                                        src={item.image_url}
                                        alt={item.name}
                                        width={312}
                                        height={267}
                                        className="w-full"
                                    />
                                </Link>
                                <h2 className="text-xl font-bold p-2">{item.name}</h2>
                                <div className="text-gray-600 pl-2">${item.price}</div>
                                <Link href={`/shop/${item._id}`}>
                                    <button className="mt-2 w-full bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                                        Show Details
                                    </button>
                                </Link>

                            </div>
                        ))}
                    </div>
                    <Image
                        src="/pagination.png"
                        alt="bar"
                        width={306}
                        height={51}
                        className="md:ml-[32%] ml-[10%] mt-10"
                    />
                </div>
                {/* right side */}
                <div className="w-[312px] md:h-[418px]">
                    <div className="flex w-[248px] h-[46px] mt-[72px] text-center ">
                        <input
                            type="text"
                            placeholder="Search Product"
                            className="w-[202px] bg-[#ebe2d5] pl-4 text-gray-400"
                        />
                        <CiSearch
                            size={20}
                            className="bg-[#FF9F0D] p-3 text-[#FFFFFF] w-[46px] h-[46px]"
                        />
                    </div>
                    <ul className="space-y-2">
                        <h2 className="font-helvetica text-[20px] font-bold mt-2">
                            Category
                        </h2>
                        <li>
                            <input type="checkbox" className="font-helvetica text-[18px]" />{" "}
                            Sandwitch
                        </li>
                        <li>
                            <input type="checkbox" className="font-helvetica text-[18px]" />{" "}
                            Burger
                        </li>
                        <li>
                            <input type="checkbox" className="font-helvetica text-[18px]" />{" "}
                            Chicken Chup
                        </li>
                        <li>
                            <input type="checkbox" className="font-helvetica text-[18px]" />{" "}
                            Drink
                        </li>
                        <li>
                            <input type="checkbox" className="font-helvetica text-[18px]" />{" "}
                            Pizza
                        </li>
                        <li>
                            <input type="checkbox" className="font-helvetica text-[18px]" />{" "}
                            Thi
                        </li>
                        <li>
                            <input type="checkbox" className="font-helvetica text-[18px]" />{" "}
                            Non Veg
                        </li>
                        <li>
                            <input type="checkbox" className="font-helvetica text-[18px]" />{" "}
                            Uncategorized
                        </li>
                    </ul>
                    <div className="bg-[url(/bg-banner.png)] p-4 mt-4 bg-cover w-[248px] h-[286px] ">
                        <div className="font-inter font-bold text-[16px] w-[105px] text-[#FFFFFF]">
                            {" "}
                            Perfect Taste
                        </div>
                        <h2 className="font-helvetica font-bold text-[20px] w-[181px] text-[#FFFFFF]">
                            Classic Restaurant
                        </h2>
                        <div className="font-helvetica font-bold text-[16px] w-[58px] text-[#FF9F0D]"
                        >
                            $45.00
                        </div>
                        <div className="flex gap-2 w-full h-[24px] mt-32">
                            <button className="font-inter text-[16px]  text-[#FFFFFF]">
                                Shop Now
                            </button>
                            <IoArrowForwardCircleOutline
                                size={20}
                                className="text-[#FFFFFF] mt-1"
                            />
                            <button />
                        </div>
                    </div>
                    <h2 className="font-helvetica text-[20px] font-bold mt-2 mb-2">
                        Filter By Price
                    </h2>
                    <input type='range' className="bg-yellow-300 w-[200px]" />
                    <div className="font-inter text-[17px] text-gray-400 w-[200px] flex justify-between mb-2">
                        {" "}
                        <div>From $0 to $8000</div>
                        <div>Filter</div>
                    </div>
                    <h2 className="font-helvetica text-[20px] font-bold mt-2 mb-2">
                        Latest Products
                    </h2>
                    <div className=" w-[252px] mb-2 space-y-2">
                        <div className="flex items-center gap-4">
                            <div className="object-cover w-[72px] h-16 relative">
                                <Image
                                    src="/breakfast.png"
                                    alt="Fresh Breakfast"
                                    width={100}
                                    height={100}
                                    className=" w-[72px] h-[65px]"
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-[#333333] ">
                                    Fresh Breakfast
                                </h3>
                                <div className="flex w-[63px] gap-1 mb-1 h-[9px]">
                                    <FaStar size={10} className="text-[#FF9F0D] " />
                                    <FaStar size={10} className="text-[#FF9F0D] " />
                                    <CiStar size={10} />
                                    <CiStar size={10} />
                                    <CiStar size={10} />
                                </div>
                                <div className="text-orange-500">14.5$</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="object-cover w-[72px] h-16 relative">
                                <Image
                                    src="/breakfast.png"
                                    alt="Fresh Breakfast"
                                    width={100}
                                    height={100}
                                    className=" w-[72px] h-[65px]"
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-[#333333] ">
                                    Fresh Breakfast
                                </h3>
                                <div className="flex w-[63px] gap-1 mb-1 h-[9px]">
                                    <FaStar size={10} className="text-[#FF9F0D] " />
                                    <FaStar size={10} className="text-[#FF9F0D] " />
                                    <CiStar size={10} />
                                    <CiStar size={10} />
                                    <CiStar size={10} />
                                </div>
                                <div className="text-orange-500">14.5$</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="object-cover w-[72px] h-16 relative">
                                <Image
                                    src="/breakfast.png"
                                    alt="Fresh Breakfast"
                                    width={100}
                                    height={100}
                                    className=" w-[72px] h-[65px]"
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-[#333333] ">
                                    Fresh Breakfast
                                </h3>
                                <div className="flex w-[63px] gap-1 mb-1 h-[9px]">
                                    <FaStar size={10} className="text-[#FF9F0D] " />
                                    <FaStar size={10} className="text-[#FF9F0D] " />
                                    <CiStar size={10} />
                                    <CiStar size={10} />
                                    <CiStar size={10} />
                                </div>
                                <div className="text-orange-500">14.5$</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="object-cover w-[72px] h-16 relative">
                                <Image
                                    src="/breakfast.png"
                                    alt="Fresh Breakfast"
                                    width={100}
                                    height={100}
                                    className=" w-[72px] h-[65px]"
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-[#333333] ">
                                    Fresh Breakfast
                                </h3>
                                <div className="flex w-[63px] gap-1 mb-1 h-[9px]">
                                    <FaStar size={10} className="text-[#FF9F0D] " />
                                    <FaStar size={10} className="text-[#FF9F0D] " />
                                    <CiStar size={10} />
                                    <CiStar size={10} />
                                    <CiStar size={10} />
                                </div>
                                <div className="text-orange-500">14.5$</div>
                            </div>
                        </div>
                        <h2 className="font-helvetica text-[20px] font-bold mt-4 mb-2">
                            Product Tags
                        </h2>
                        <div className="w-[225px] h-[24px] gap-2 flex">
                            <div className="font-inter font-bold border-b border-gray-300 text-[16px]  hover:text-[#FF9F0D] hover:underline  text-[#333333]">
                                Services
                            </div>
                            <div className="font-inter font-bold text-[16px] border-b border-gray-300 hover:text-[#FF9F0D] hover:underline text-[#333333]">
                                Our Menu
                            </div>
                        </div>
                        <div className="w-[225px] h-[24px] gap-2 flex">
                            <div className="font-inter font-bold text-[16px] border-b border-gray-300  hover:text-[#FF9F0D] hover:underline text-[#333333]">
                                Cupcake
                            </div>
                            <div className="font-inter font-bold text-[16px] border-b border-gray-300 hover:underline hover:text-[#333333] text-[#FF9F0D]">
                                Burger
                            </div>
                            <div className="font-inter font-bold text-[16px] border-b border-gray-300  hover:text-[#FF9F0D] hover:border-b hover:border-[#333333]">
                                Cookies
                            </div>
                        </div>
                        <div className="w-[225px] h-[24px] gap-2 flex">
                            <div className="font-inter font-bold text-[16px] border-b border-gray-300 hover:text-[#FF9F0D] hover:underline text-[#333333]">
                                Our Shop
                            </div>
                            <div className="font-inter font-bold text-[16px] border-b border-gray-300 hover:text-[#FF9F0D] hover:underline text-[#333333]">
                                Tandoori Chicken
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default shop;























