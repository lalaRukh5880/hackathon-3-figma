'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import Common from "@/Components/Common";
import { client } from "@/sanity/lib/client";

interface IFood {
  _id: string;
  name: string;
  price: number;
  originalPrice: number;
  image_url: string;
  category: string;
}

const ITEMS_PER_PAGE = 9;

const getFood = async (category: string) => {
  // If category is "All", fetch all items. Otherwise, filter by category
  const query = `
    *[_type == "food" && (category == $category || $category == "All")]{
      _id,
      name,
      price,
      originalPrice,
      category,
      "image_url": image.asset->url
    }
  `;
  const params = { category };
  return await client.fetch(query, params);
};

const Shop = () => {
  const [food, setFood] = useState<IFood[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const categories = [
    "All", "Sandwich", "Burger", "Chicken", "Drink", "Pizza", "Thai", "Non Veg", "Uncategorized"
  ];

  // Fetch food based on selected category
  useEffect(() => {
    const fetchFood = async () => {
      setLoading(true);
      const data = await getFood(selectedCategory);
      setFood(data);
      setLoading(false);
    };
    fetchFood();
  }, [selectedCategory]);  // Re-fetch data when category changes

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = food.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(food.length / ITEMS_PER_PAGE);

  return (
    <div>
      <Common title="Our Shop" subtitle="Shop" />
      <div className="container mt-32 mb-16 flex flex-col md:flex-row gap-8 mx-auto px-4">
        <div className="md:w-[984px] w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-6">
            {loading ? (
              <p>Loading products...</p>
            ) : currentItems.length === 0 ? (
              <p>No products found for &quot;{selectedCategory}&quot;.</p>
            ) : (
              currentItems.map((item) => (
                <div
                  key={item._id}
                  className="shadow-md p-4 m-4 rounded-lg"
                  style={{ width: '312px', height: '420px' }} // Fixed width and height for the card
                >
                  <Link href={`/shop/${item._id}`}>
                    <Image
                      src={item.image_url}
                      alt={item.name}
                      width={312}
                      height={267}
                      className="w-full h-auto object-cover" // Ensures image doesn't stretch
                    />
                  </Link>
                  <h2 className="text-xl font-bold p-2">{item.name}</h2>
                  <div className="text-gray-600 pl-2">
                    ${item.price}{" "}
                    {item.originalPrice && (
                      <span className="text-sm line-through text-gray-500 ml-2">
                        ${item.originalPrice}
                      </span>
                    )}
                  </div>
                  <Link href={`/shop/${item._id}`}>
                    <button className="mt-2 w-full bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                      See Details
                    </button>
                  </Link>
                </div>
              ))
            )}
          </div>
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-6 space-x-2">
              <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1} className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300">
                ◀
              </button>
              {[...Array(totalPages)].slice(Math.max(0, currentPage - 3), currentPage + 1).map((_, i) => (
                <button key={i} onClick={() => setCurrentPage(i + 1)} className={`px-3 py-1 rounded-md ${currentPage === i + 1 ? 'bg-orange-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}>
                  {i + 1}
                </button>
              ))}
              <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300">
                ▶
              </button>
            </div>
          )}
        </div>
        {/* Sidebar */}
        <div className="w-[312px] md:h-[418px]">
          <div className="flex w-[248px] h-[46px] mt-[72px] text-center">
            <input type="text" placeholder="Search Product" className="w-[202px] bg-[#ebe2d5] pl-4 text-gray-400" />
            <CiSearch size={20} className="bg-[#FF9F0D] p-3 text-[#FFFFFF] w-[46px] h-[46px]" />
          </div>
          <ul className="space-y-2">
            <h2 className="font-helvetica text-[20px] font-bold mt-2">Category</h2>
            {categories.map((category) => (
              <li key={category}>
                <button onClick={() => setSelectedCategory(category)} className={`text-left w-full px-2 py-1 rounded ${selectedCategory === category ? "bg-orange-500 text-white" : "hover:bg-gray-100"}`}>
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Shop;
