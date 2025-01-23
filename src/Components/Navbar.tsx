"use client";
import { useContext } from "react";
import React from "react";
import Link from "next/link";
import { FaSearch, FaShoppingBag, FaUser } from "react-icons/fa";
import { CartContext } from "../lib/CartContext";

const Navbar: React.FC = () => {
    // Access the cart context
    const { cartItems } = useContext(CartContext);

    // Calculate the total number of items in the cart
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

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
                <Link href="/sign-in" aria-label="Login">
                    <FaUser className="text-white text-lg hover:text-[#FF9F0D]" />
                </Link>

                {/* Shopping Cart Icon with Badge */}
                <Link href="/cart" aria-label="Shopping Cart">
                    <div className="relative">
                        <FaShoppingBag className="text-white text-lg hover:text-[#FF9F0D]" />
                        {totalItems > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                {totalItems}
                            </span>
                        )}
                    </div>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
