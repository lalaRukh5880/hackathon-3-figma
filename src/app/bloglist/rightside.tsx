import React from 'react';
import Image from 'next/image';
import { IoSearch, IoLogoTwitter } from 'react-icons/io5';
import { FaStar, FaFacebookF, FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa';

interface Data {
  id: number;
  img: string;
  date: string;
  des: string;
}

interface Data1 {
  id: number;
  img: string;
  title: string;
  review: number;
}

const Rightside = () => {
  const data: Data[] = [
    {
      id: 1,
      img: '/blog/f1.png',
      date: 'June 22, 2020',
      des: 'Lorem ipsum dolor sit cing elit, sed do.',
    },
    {
      id: 2,
      img: '/blog/f2.png',
      date: 'June 22, 2020',
      des: 'Lorem ipsum dolor sit cing elit, sed do.',
    },
    {
      id: 3,
      img: '/blog/f3.png',
      date: 'June 22, 2020',
      des: 'Lorem ipsum dolor sit cing elit, sed do.',
    },
    {
      id: 4,
      img: '/blog/f4.png',
      date: 'June 22, 2020',
      des: 'Lorem ipsum dolor sit cing elit, sed do.',
    },
  ];

  const data1: Data1[] = [
    {
      id: 1,
      img: '/blog/f5.png',
      title: 'Chicken Fry',
      review: 26,
    },
    {
      id: 2,
      img: '/blog/f6.png',
      title: 'Burger Food',
      review: 46,
    },
    {
      id: 3,
      img: '/blog/f7.png',
      title: 'Pizza',
      review: 16,
    },
    {
      id: 4,
      img: '/blog/f8.png',
      title: 'Fresh Fruits',
      review: 36,
    },
    {
      id: 5,
      img: '/blog/f9.png',
      title: 'Vegetables',
      review: 16,
    },
  ];

  return (
    <div className="md:max-w-[424px] h-fit px-8 my-12">
      {/* Search Input */}
      <div className="flex md:max-w-[422px] h-[71px] my-4 border border-gray-300 rounded-md">
        <input
          type="text"
          placeholder="Search Your Keyword..."
          className="flex-1 px-4 py-2 outline-none"
        />
        <button className="w-[77px] h-[71px] bg-[#FF9f0D] flex items-center justify-center text-white rounded-md">
          <IoSearch size={24} />
        </button>
      </div>

      {/* Profile Section */}
      <div className="md:max-w-[424px] w-full h-auto mb-5 p-8 border-2 border-gray-300 rounded-md">
        <div className="text-center">
          <Image
            src="/about/client1.png"
            alt="Client"
            width={148}
            height={130}
            className="rounded-full mx-auto"
          />
          <h2 className="text-[20px] font-bold mt-6">Prince Miyako</h2>
          <p className="text-[#828282]">Blogger/Photographer</p>
          <div className="flex justify-center items-center gap-2 mt-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} size={14} className="text-[#FF9f0D]" />
            ))}
            <span className="text-[#828282]">(1 Review)</span>
          </div>
          <p className="text-[#828282] mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            distinctio, odio eligendi suscipit reprehenderit atque.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <FaFacebookF size={20} />
            <IoLogoTwitter size={20} />
            <FaInstagram size={20} />
            <FaPinterest size={20} />
          </div>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="md:max-w-[423px] w-full border-2 border-gray-300 rounded-md">
        <h2 className="font-bold text-lg ml-8 mt-6">Recent Post</h2>
        {data.map((item) => (
          <div key={item.id} className="flex items-center gap-4 p-4 border-b border-gray-300">
            <Image
              src={item.img}
              alt={item.date}
              width={99}
              height={92}
              className="rounded-md"
            />
            <div>
              <p className="text-sm text-gray-500">{item.date}</p>
              <p>{item.des}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Filter By Menu */}
      <div className="md:max-w-[423px] w-full mt-5 border-2 border-gray-300 rounded-md">
        <h2 className="font-bold text-lg ml-8 mt-6">Filter By Menu</h2>
        {data1.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-4 p-4 border-b border-gray-300"
          >
            <Image
              src={item.img}
              alt={item.title}
              width={99}
              height={92}
              className="rounded-md"
            />
            <h2 className="font-bold text-sm">{item.title}</h2>
            <p className="font-semibold">{item.review}</p>
          </div>
        ))}
      </div>

      {/* Photo Gallery */}
      <div className="md:max-w-[423px] w-full mt-5 border-2 border-gray-300 rounded-md">
        <h2 className="font-bold text-lg ml-8 mt-6">Photo Gallery</h2>
        <div className="grid grid-cols-3 gap-4 p-4">
          {['/blog/g1.png', '/blog/g2.png', '/blog/g3.png', '/blog/g4.png', '/blog/g5.png', '/blog/g6.png'].map((img, i) => (
            <Image key={i} src={img} alt="Food" width={92} height={92} className="rounded-md" />
          ))}
        </div>
      </div>

      {/* Follow Us */}
      <div className="md:max-w-[423px] w-full mt-5 border-2 border-gray-300 rounded-md">
        <h2 className="font-bold text-lg ml-8 mt-6">Follow Us</h2>
        <div className="flex justify-center gap-6 mt-4">
          <IoLogoTwitter size={30} className="bg-gray-300 p-2 rounded-full" />
          <FaYoutube size={30} className="bg-gray-300 p-2 rounded-full" />
          <FaPinterest size={30} className="bg-[#FF9f0D] text-white p-2 rounded-full" />
          <FaInstagram size={30} className="bg-gray-300 p-2 rounded-full" />
          <FaFacebookF size={30} className="bg-gray-300 p-2 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Rightside;
