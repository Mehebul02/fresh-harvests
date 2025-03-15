import { download_app, logo } from '@/app/assets';
import { Link } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About us", path: "/about" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <footer className="bg-green-100 text-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between  gap-8">
          <div className=''>
          <Image src={logo} alt="Fresh Harvests Logo" width={200} height={200} />
            <p className="mb-4 mt-6 md:mt-32">Download App:</p>
            <div className="space-y-2">
            <Image src={download_app} alt="Download app" width={200} height={200} />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick links 1</h3>
            <ul className="space-y-2">
               <li><a href="#" className="hover:text-green-600">Home</a></li>
              <li><a href="#" className="hover:text-green-600">Shop</a></li>
              <li><a href="#" className="hover:text-green-600">About us</a></li>
              <li><a href="#" className="hover:text-green-600">Blog</a></li>
              <li><a href="#" className="hover:text-green-600">Detail Blog</a></li> 
               
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick links 2</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-600">Favorites</a></li>
              <li><a href="#" className="hover:text-green-600">Conf</a></li>
              <li><a href="#" className="hover:text-green-600">Sign in</a></li>
              <li><a href="#" className="hover:text-green-600">Register</a></li>
            </ul>
          </div>
          <div>
              <h3 className="text-lg font-bold mb-4">Contact us</h3>
              <p>📍 1234 5678 90</p>
              <p>📎 Freshharvestis@gmail.com</p>
              <p>📌 Tonjung Sari Street, Pontianok, Indonesia</p>
            </div>
        </div>
        <div className="mt-8 border-t border-gray-300 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div>
              <h3 className="text-lg font-bold mb-4">Accepted Payment Methods:</h3>
              <div className="flex space-x-4">
                <span className="font-bold">VISA</span>
                <span>PayPal</span>
                <span>👉 Pay</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>© Copyright 2024. All Rights Reserved by Banana Studio</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;