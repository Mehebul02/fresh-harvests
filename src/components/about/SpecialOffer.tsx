import {  foodImage, foodImage_mobile, specialAbout } from "@/app/assets";
import Image from "next/image";

import Container from "../shared/Container";
import CountdownTimer from "./CountdownTimer";

const SpecialOffer = () => {
  return (
    <div className="relative w-full  flex items-center justify-center pb-8">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
      <Image
  src={specialAbout}
  alt="Background Image"
  quality={100}
  className="hidden md:block object-cover w-full h-full absolute"
/>
<Image
  src={foodImage_mobile}
  alt="Mobile Background"
  quality={100}
  className="block md:hidden object-cover w-full h-full absolute"
/>

      </div>

      {/* Content Section */}
      <Container className="  px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column - Text Section */}
        <div className="text-left md:text-left space-y-6 mt-20 ">
          <h1 className="text-[20px] text-[#749B3F] font-medium bg-[#749B3F1A] p-3 rounded-xl inline-block">
          Special Offer
          </h1>
          <h2 className="text-4xl md:text-[60px] text-[#212337] font-semibold leading-tight">
          Seasonal Fruit Bundle
          </h2>
          <h2 className="text-4xl md:text-[48px] text-[#212337] font-semibold leading-tight">
          Discount up to <span className="text-[#FF6A1A]">80% OFF</span>
          </h2>

          <CountdownTimer targetDate="2025-03-20T00:00:00" />
           {/* Promo Code */}
        <div className="w-52 md:w-[50%]  flex justify-center md:justify-start items-center gap-1 bg-[#176D38] p-3 rounded-lg">
          <p className="text-white text-center text-[20px] md:text-[32px] font-semibold">Code :</p>
          <p className="text-[#FAC714] text-[20px] md:text-[32px] font-semibold">FRUIT28</p>
        </div>
        </div>

        {/* Right Column - Image Section */}
        <div className="hidden md:flex justify-end ">
          <Image
            src={foodImage} 
            alt="Featured Product"
            width={900}
            height={900}
            className="rounded-xl"
          />
        </div>
      </Container>
    </div>
  );
};

export default SpecialOffer;
