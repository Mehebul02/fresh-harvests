"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { logo } from "@/app/assets";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import LoginForm from "../modules/auth/UserAuthenticationForm";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll to change background color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About us", path: "/about" },
    { name: "Blog", path: "/blog" },
  ];
  const session = await getServerSession(authOptions)
  return (
    <div className="max-w-7xl">
      <nav
        className={`fixed w-full top-0 left-0 z-50 p-4 transition-all duration-300 text-black ${
          isScrolled ? "bg-white shadow-md " : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Left Side: Logo */}
          <Link href="/">
            <Image src={logo} alt="Fresh Harvests Logo" width={200} height={200} />
          </Link>

          {/* Center: Menu Items */}
          <div className="hidden md:flex gap-8 text-[#4A4A52] absolute left-1/2 transform -translate-x-1/2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="text-[14px] relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent group-hover:bg-green-400 transition-all"></span>
              </Link>
            ))}
          </div>

          {/* Right Side: Favorites, Cart, Sign In */}
          <div className={`hidden md:flex items-center gap-6 ${isScrolled ? "text-black" : "text-white"}`}>
            {/* Favorites */}
            <Link href="/favorites" className="flex items-center gap-1 hover:text-gray-400">
              <span className="text-xl"><FaHeart/></span>
              <span>Favorites</span>
            </Link>

            {/* Cart */}
            <div className="flex items-center gap-2">
              <Link href="/cart" className="relative flex items-center gap-1 hover:text-gray-400">
                <span className="text-xl">
                  <FaShoppingCart />
                </span>
                <span className="absolute -top-3 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex justify-center items-center rounded-full">
                  3
                </span>
              </Link>
              <h1>Cart</h1>
            </div>

            {/* Sign In Button */}
            
            
            {/* <button
  className={`px-4 py-2 rounded transition cursor-pointer
    ${isScrolled ? "border border-[#749B3F] text-black bg-white" : "border border-white text-white hover:bg-white hover:text-black"}
  `}
>
  Sign In
</button> */}
<LoginForm login='Sign In'/>

            
          </div>

          {/* Mobile Menu: Cart & Hamburger */}
          <div className="flex items-center gap-4 md:hidden">
            {/* Cart */}
            <Link href="/cart" className="relative text-white flex items-center gap-1 hover:text-gray-400">
              <span className="text-xl">
                <FaShoppingCart />
              </span>
              <span className="absolute -top-3 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex justify-center items-center rounded-full">
                4
              </span>
            </Link>

            {/* Hamburger Menu */}
            <button className="text-2xl focus:outline-none text-white" onClick={() => setMenuOpen(!menuOpen)}>
              <IoMdMenu/>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`md:hidden bg-black mt-6 p-3 rounded-xl transition-all ${menuOpen ? "block" : "hidden"}`}>
          {menuItems.map((item) => (
            <Link key={item.path} href={item.path} className="block py-2 text-gray-300 hover:text-green-400">
              {item.name}
            </Link>
          ))}
          <LoginForm login="Sign In"/>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
