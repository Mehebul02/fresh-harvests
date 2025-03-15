'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { logo } from "@/app/assets";
import Container from "./Container";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About us", path: "/about" },
    { name: "Blog", path: "/blog" },
  ];

  return (
   <div className="max-w-7x">
     <nav className=" text-white p-4 fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left Side: Logo */}
        <div className="">
          <Image src={logo} alt="Fresh Harvests Logo" width={200} height={200} />
        </div>

        {/* Center: Menu Items */}
        <div className="hidden md:flex gap-8 text-[#4A4A52] absolute left-1/2 transform -translate-x-1/2">
          {menuItems.map((item) => (
            <Link key={item.path} href={item.path} className="text-[14px] relative group">
              {item.name}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent group-hover:bg-green-400 transition-all"></span>
            </Link>
          ))}
        </div>

        {/* Right Side: Favorites, Cart, Sign In */}
        <div className="hidden md:flex items-center gap-6">
          {/* Favorites */}
          <Link href="/favorites" className="flex items-center gap-1 hover:text-gray-400">
            <span className="text-xl">❤️</span>
            <span>Favorites</span>
          </Link>

          {/* Cart */}
          <div className="flex items-center gap-2">
          <Link href="/cart" className="relative flex items-center gap-1 hover:text-gray-400">
          
          <span className="text-xl"> <FaShoppingCart />  </span>
         
        
          <span className="absolute -top-3 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex justify-center items-center rounded-full ">3</span>
        </Link>
        <h1>Cart</h1>
          </div>

          {/* Sign In Button */}
          <Link href="/signin">
            <button className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition">
              Sign In
            </button>
          </Link>
        </div>

        {/* Mobile Menu: Cart & Hamburger */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Cart */}
          <Link href="/cart" className="relative flex items-center gap-1 hover:text-gray-400">
            <span className="text-xl"> <FaShoppingCart /></span>
            <span className="absolute -top-3 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex justify-center items-center rounded-full ">44</span>
          </Link>

          {/* Hamburger Menu */}
          <button className="text-2xl focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden bg-black p-4 transition-all ${menuOpen ? "block" : "hidden"}`}>
        {menuItems.map((item) => (
          <Link key={item.path} href={item.path} className="block py-2 text-gray-300 hover:text-green-400">
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
   </div>
  );
};

export default Navbar;
