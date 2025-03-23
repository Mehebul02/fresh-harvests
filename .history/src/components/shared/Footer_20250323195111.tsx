import { download_app, logo, payment_methods } from '@/app/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaPhone } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';
import SocialLinks from './SocialLinks';

const Footer = () => {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About us", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Detail Blog", path: "/detail_blog" },
  ];

  return (
    <footer className="bg-green-100 text-gray-800 py-8 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 space-y-3 ">
          <div className=''>
            <Image src={logo} alt="Fresh Harvests Logo" width={200} height={200} />
            <p className="mb-4 mt-6 md:mt-32">Download App:</p>
            <div className="space-y-2">
              <Image src={download_app} alt="Download app" width={200} height={200} />
            </div>
          </div>
          <div>
            <div className="  flex flex-col items-center justify-center space-y-2 ml-12 text-black  transform -translate-x-1/2">
              <h3 className="text-lg font-bold mb-4">Quick links 1</h3>
              {menuItems.map((item) => (
                <Link key={item.path} href={item.path} className="hover:text-green-600">
                  {item.name}
                  <span className=""></span>
                </Link>
              ))}

            </div>
            <div>

            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick links 2</h3>
            <ul className="space-y-2">
              <Link href="#"><h1 className="hover:text-green-600">Favorites</h1></Link>
              <li><a href="#" className="hover:text-green-600">Conf</a></li>
              <li><a href="#" className="hover:text-green-600">Sign in</a></li>
              <li><a href="#" className="hover:text-green-600">Register</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 ">Contact us</h3>
            <p className='flex items-center gap-1 text-[#4A4A52] mb-2'><FaPhone className='text-[#749B3F]' /> 1234 5678 90</p>
            <p className='flex items-center gap-1 text-[#4A4A52] mb-2'><FiMail className='text-[#749B3F]' /> Freshharvestis@gmail.com</p>
            <p className='flex items-center gap-1 text-[#4A4A52]'><IoLocationOutline className='text-[#749B3F]' /> Tonjung Sari Street, Pontianok, Indonesia</p>

            {/* Payment Methods  */}
            <div className="flex  mt-8 mx-auto  ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">

                <div >
                  <h3 className="text-sm font-bold mb-4">Accepted Payment Methods:</h3>
                  <div className="flex space-x-4">
                    <Link href='#'>
                      <Image src={payment_methods} alt="Download app" width={200} height={200} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-8 text-center border-t-2 border-gray-300 pt-8">
          <p className='font-bold'>© Copyright 2024. All Rights Reserved by Banana Studio</p>
          <SocialLinks/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;