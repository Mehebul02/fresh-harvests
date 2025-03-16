"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { foodMan, logo, mushroom } from "@/app/assets";
import { motion } from "framer-motion";
import TitleSection from "../shared/TitleSection";

const AboutSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-8 px-4 sm:px-6 md:px-16 py-12 sm:py-16">
      {/* Left Side - Image Section */}
      <div className="relative w-full md:w-1/2 flex justify-center">
        <div className="relative w-[95%] sm:w-[85%] md:w-[80%]">
          <Image
            src={foodMan}
            alt="About Fresh Harvest"
            width={500}
            height={500}
            className="rounded-full w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px]"
          />

          {/* Floating Logo Card */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 left-3 sm:left-5 bg-white shadow-lg rounded-lg p-2 sm:p-3 flex items-center gap-2"
          >
            <div className="rounded-full flex items-center justify-center">
              <Image src={logo} alt="Fresh Harvests" width={110} height={110} />
            </div>
          </motion.div>

          {/* Floating Mushroom Card */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 right-3 sm:right-5 bg-white shadow-lg rounded-lg p-2 sm:p-3 text-center"
          >
            <Image src={mushroom} alt="Mushroom" width={80} height={80} className="mx-auto" />
            <p className="text-xs sm:text-sm text-gray-600">Mushroom</p>
            <p className="text-xs sm:text-sm font-semibold">$2.3/kg</p>
            <button className="bg-green-500 text-white px-3 py-1 rounded mt-2 text-xs sm:text-sm">
              Add to cart
            </button>
          </motion.div>
        </div>
      </div>

      {/* Right Side - Text Section */}
      <div className="w-full md:w-1/2 space-y-4  md:text-left px-2 sm:px-4">
      <TitleSection className="" title=" About us" subtitle="  About Fresh Harvest" description="Welcome to Fresh Harvest, your premier destination for high-quality and fresh produce. 
          We are passionate about providing you with the finest fruits, vegetables, and salad 
          ingredients to nourish your body and delight your taste buds. With a commitment to 
          excellence, sustainability, and customer satisfaction, Fresh Harvest is here to 
          revolutionize your grocery shopping experience."/>
        {/* <span className="text-xs sm:text-sm font-medium bg-green-100 text-green-700 px-3 py-1 rounded-md">
          About us
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
          About Fresh Harvest
        </h2>
        <p className="text-gray-700 text-sm sm:text-lg leading-relaxed">
          Welcome to Fresh Harvest, your premier destination for high-quality and fresh produce. 
          We are passionate about providing you with the finest fruits, vegetables, and salad 
          ingredients to nourish your body and delight your taste buds. With a commitment to 
          excellence, sustainability, and customer satisfaction, Fresh Harvest is here to 
          revolutionize your grocery shopping experience.
        </p> */}
        <Button className="text-[#FF6A1A] border border-[#FF6A1A] px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition duration-300">
          Read More
        </Button>
      </div>
    </section>
  );
};

export default AboutSection;
