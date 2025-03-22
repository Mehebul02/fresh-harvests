'use client';

import { useState } from "react";
import Link from "next/link";
import { FiHome, FiUser, FiSettings, FiMenu, FiX } from "react-icons/fi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-gray-900 text-white w-64 h-screen fixed top-0 left-0 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-64"
        } sm:translate-x-0`}
      >
        <div className="p-5">
          <h1 className="text-2xl font-bold">My Dashboard</h1>
        </div>
        <nav className="mt-5">
          <Link href="/" className="flex items-center space-x-2 p-3 hover:bg-gray-700">
            <FiHome /> <span>Home</span>
          </Link>
          <Link href="/addProduct" className="flex items-center space-x-2 p-3 hover:bg-gray-700">
            <FiHome /> <span>Add Product</span>
          </Link>
          <Link href="/profile" className="flex items-center space-x-2 p-3 hover:bg-gray-700">
            <FiUser /> <span>Profile</span>
          </Link>
          <Link href="/setting" className="flex items-center space-x-2 p-3 hover:bg-gray-700">
            <FiSettings /> <span>Settings</span>
          </Link>
        </nav>
      </div>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-5 left-5 z-50 text-white bg-gray-900 p-2 rounded-md sm:hidden"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>
    </div>
  );
};

export default s
