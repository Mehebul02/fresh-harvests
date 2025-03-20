import { arrowSymble, banner_bg, bg_mobile, bg_women, download_app } from "@/app/assets";
import Image from "next/image";
import { Button } from "../ui/button";
import SpecialOfferCard from "./SpecialOfferCard ";
import Container from "../shared/Container";

const BannerSection = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={banner_bg}
          alt="Background Image"
          quality={100}
          className="hidden md:block object-cover w-full h-full absolute"
        />
        <Image
          src={bg_mobile}
          alt="Mobile Background"
          quality={100}
          className="block md:hidden object-cover w-full h-full absolute"
        />

      </div>

      {/* Content Section */}
      <Container className="  px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column - Text Section */}
        <div className="text-left md:text-left space-y-6 mt-20 md:mt-36">
          <h1 className="text-[20px] text-[#749B3F] font-medium bg-[#749B3F1A] p-3 rounded-xl inline-block">
            Welcome to Fresh Harvest
          </h1>
          <h2 className="text-4xl md:text-[80px] text-[#212337] font-semibold leading-tight">
            Fresh Fruits and Vegetables
          </h2>
          <p className="text-lg md:text-xl text-[#4A4A52] max-w-2xl">
            At Fresh Harvests, we are passionate about providing you with the
            freshest and most flavorful fruits and vegetables.
          </p>
          <Button className="w-[140px] h-[53px] cur bg-[#FF6A1A] text-[18px] text-white font-semibold px-8 py-3 rounded-lg hover:bg-green-700 transition duration-300">
            Shop Now
          </Button>

          {/* Special Offer Section */}
          <div className="flex flex-col md:flex-row justify-end items-start gap-4 md:ml-32">
            <Image src={arrowSymble} alt="Arrow Symbol" />
            <SpecialOfferCard />
          </div>

          {/* Download App */}
          <div className="mt-6">
            <h3 className="text-[#4A4A52] text-[14px]">Download App:</h3>
            <Image src={download_app} alt="Download App" className="mt-2" />
          </div>
        </div>

        {/* Right Column - Image Section */}
        <div className="hidden md:flex justify-end mt-40">
          <Image
            src={bg_women}
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

export default BannerSection;
