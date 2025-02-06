"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Common from "@/Components/Common";

interface IChef {
  _id: string;
  name: string;
  position: string;
  experience: number;
  specialty: string;
  image_url: string;
  description: string;
}

const ChefDetail = () => {
  const { id } = useParams(); // Get chef ID from URL
  const [chef, setChef] = useState<IChef | null>(null);

  useEffect(() => {
    const getChefDetail = async () => {
      const data = await client.fetch(
        `*[_type=="chef" && _id==$id][0] {
          _id,
          name,
          position,
          experience,
          specialty,
          "image_url": image.asset->url,
          description
        }`,
        { id }
      );
      setChef(data);
      console.log('data: ', data);
    };

    if (id) getChefDetail();
  }, [id]);

  if (!chef) return <div className="text-center py-10">Loading...</div>;

  return (

    
    <div className="max-w-4xl mx-auto px-6 py-12" >
      <Common title="Our Chef" subtitle="Chef" />
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="bg-white shadow-lg rounded-lg overflow-hidden p-6"
      >
        <div className="flex flex-col md:flex-row items-center">
          {/* Chef Image */}
          <div className="w-full md:w-1/3">
            <Image
              src={chef.image_url}
              alt={chef.name}
              width={300}
              height={400}
              className="w-full rounded-lg shadow-md object-cover"
            />
          </div>

          {/* Chef Details */}
          <div className="md:ml-8 flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800">{chef.name}</h2>
            <p className="text-lg text-gray-600">{chef.position}</p>
            <p className="mt-2 text-gray-700">
              <strong>Experience:</strong> {chef.experience} years
            </p>
            <p className="mt-1 text-gray-700">
              <strong>Speciality:</strong> {chef.specialty}
            </p>
            <p className="mt-4 text-gray-600">{chef.description}</p>
          </div>
        </div>
        

        {/* Back Button */}
        <div className="mt-6 flex justify-center">
          <Link href="/our-chefs">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-[#FF9F0D] text-white px-6 py-2 rounded-lg hover:bg-white hover:text-[#FF9F0D] transition"
            >
              Back to Chefs
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ChefDetail;
