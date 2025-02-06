"use client";
import Common from "@/Components/Common";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Framer Motion import
import Link from "next/link";

interface IChef {
  _id: string;
  name: string;
  position: string;
  image_url: string;
}

const Ourchef = () => {
  const [chefs, setChefs] = useState<IChef[]>([]);

  useEffect(() => {
    const getChef = async () => {
      const chef = await client.fetch(
        `
        *[_type=="chef"] | order(_createdAt desc)[0...12] {
          _id,
          name,
          position,
          "image_url": image.asset->url
        }
        `
      );
      console.log(chef, " =>>. chefs");
      setChefs(chef);
    };

    getChef();
  }, []);

  return (
    <div>
      <Common title="Our Chef" subtitle="Chef" />

      {/* Centered Grid */}
      <div className="wrapper flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10 px-4 md:px-10 my-12 md:my-20 max-w-[1200px]">
          {chefs.map((chef: IChef, index) => (
            <motion.div
              key={chef._id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }} // Zoom-in effect on hover
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-[220px] h-[420px] bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="w-full h-[320px] flex justify-center items-center">
                <Image
                  src={chef.image_url}
                  alt={chef.name}
                  width={220}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col items-center w-full h-[80px] p-2">
                <h2 className="font-bold text-[18px]">{chef.name}</h2>
                <p className="text-gray-600 text-sm">{chef.position}</p>
                <Link href={`/Ourchef/${chef._id}`}>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-2 px-4 py-1 bg-[#FF9F0D] text-white text-xs rounded-lg hover:bg-black transition"
                  >
                    See More
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ourchef;
