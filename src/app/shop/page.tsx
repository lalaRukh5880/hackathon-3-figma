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
  const query = `
    *[_type == "food" && (category == $category || $category == "All")] {
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
    "All", "Sandwich", "Burger", "Chicken", "Drink", "Pizza", "Thai", "Non veg"
  ];

  useEffect(() => {
    const fetchFood = async () => {
      setLoading(true);
      const data = await getFood(selectedCategory);
      setFood(data);
      setLoading(false);
    };
    fetchFood();
  }, [selectedCategory]);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = food.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(food.length / ITEMS_PER_PAGE);

  return (
    <div>
      <Common title="Our Shop" subtitle="Shop" />
      <div className="container mt-32 mb-16 mx-auto px-4">
        {/* Top Section with Search Bar and Categories */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Search Bar */}
          <div className="flex w-full md:w-[300px] h-[46px] text-center">
            <input
              type="text"
              placeholder="Search Product"
              className="w-full bg-[#ebe2d5] pl-4 text-gray-400 rounded-l-md"
            />
            <CiSearch
              size={20}
              className="bg-[#FF9F0D] p-3 text-[#FFFFFF] w-[46px] h-[46px] rounded-r-md"
            />
          </div>

          {/* Category Section */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm ${
                  selectedCategory === category
                    ? "bg-orange-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {loading ? (
            <p>Loading products...</p>
          ) : currentItems.length === 0 ? (
            <p>No products found for &quot;{selectedCategory}&quot;.</p>
          ) : (
            currentItems.map((item) => (
              <div
                key={item._id}
                className="shadow-md p-4 rounded-lg"
                style={{ width: "312px", height: "420px" }}
              >
                <Link href={`/shop/${item._id}`}>
                  <Image
                    src={item.image_url}
                    alt={item.name}
                    width={312}
                    height={267}
                    className="w-full h-auto object-cover rounded-md"
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
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              ◀
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 rounded-md ${
                  currentPage === page
                    ? "bg-orange-500 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              ▶
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
