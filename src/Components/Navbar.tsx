"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FaSearch, FaShoppingBag, FaUser } from 'react-icons/fa';

const Navbar: React.FC = () => {
    return (
        <nav className="flex items-center justify-between p-4 bg-black">
            {/* Logo on the Left */}
            <div className="text-[#FF9F0D] font-bold text-lg">
                Food<span className="text-white">tuck</span>
            </div>

            {/* Center Navigation Links */}
            <div className="hidden md:flex space-x-6">
                <Link href="/" className="hover:text-white text-[#FF9F0D]">
                    Home
                </Link>
                <Link href="/menu" className="hover:text-[#FF9F0D] text-white">
                    Menu
                </Link>
                <Link href="/bloglist" className="hover:text-[#FF9F0D] text-white">
                    Blog
                </Link>
                <Link href="/pages" className="hover:text-[#FF9F0D] text-white">
                    Pages
                </Link>
                <Link href="/about" className="hover:text-[#FF9F0D] text-white">
                    About
                </Link>
                <Link href="/shop" className="hover:text-[#FF9F0D] text-white">
                    Shop
                </Link>
                <Link href="/contact" className="hover:text-[#FF9F0D] text-white">
                    Contact
                </Link>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
                {/* Search Icon */}
                <button aria-label="Search">
                    <FaSearch className="text-white text-lg hover:text-[#FF9F0D]" />
                </button>

                {/* Login Icon */}
                <button aria-label="Login">
                    <FaUser className="text-white text-lg hover:text-[#FF9F0D]" />
                </button>

                {/* Shopping Cart Icon */}
                <button aria-label="Shopping Cart">
                    <FaShoppingBag className="text-white text-lg hover:text-[#FF9F0D]" />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
