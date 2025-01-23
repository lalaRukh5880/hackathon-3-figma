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
  image_url: string;
  category: string;
}

// Fetch products based on the search term (category name)
const getFood = async (searchTerm: string) => {
  const query = `
    *[_type == "food" && name match $searchTerm]{
      _id,
      name,
      price,
      category,
      "image_url": image.asset->url
    }
  `;
  const params = { searchTerm: `*${searchTerm}*` }; // Match partial names
  return await client.fetch(query, params);
};

const Shop = () => {
  const [food, setFood] = useState<IFood[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [loading, setLoading] = useState<boolean>(true);

  const categories = [
    "All",
    "Sandwitch",
    "Burger",
    "Chicken",
    "Drink",
    "Pizza",
    "Thi",
    "Non Veg",
    "Uncategorized",
  ];

  // Fetch products when the selected category changes
  useEffect(() => {
    const fetchFood = async () => {
      setLoading(true);

      // If "All" is selected, fetch all products
      const searchTerm = selectedCategory === "All" ? "" : selectedCategory;
      const data = await getFood(searchTerm);
      setFood(data);

      setLoading(false);
    };

    fetchFood();
  }, [selectedCategory]);

  return (
    <div>
      <Common title="Our Shop" subtitle="Shop" />
      <div className="container mt-32 mb-16 flex flex-col md:flex-row gap-8 mx-auto px-4">
        {/* Products Section */}
        <div className="md:w-[984px] w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-6">
            {loading ? (
              <p>Loading products...</p>
            ) : food.length === 0 ? (
              <p>No products found for &quot;{selectedCategory}&quot;.</p>
            ) : (
              food.map((item) => (
                <div
                  key={item._id}
                  className="shadow-md p-4 w-full m-4 rounded-lg"
                >
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
              ))
            )}
          </div>
        </div>

        {/* Left Sidebar */}
        <div className="w-[312px] md:h-[418px]">
          <div className="flex w-[248px] h-[46px] mt-[72px] text-center">
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
            {categories.map((category) => (
              <li key={category}>
                <button
                  onClick={() => setSelectedCategory(category)}
                  className={`text-left w-full px-2 py-1 rounded ${
                    selectedCategory === category
                      ? "bg-orange-500 text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
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
