import { arrowSymble, banner_bg } from "@/app/assets";
import Image from "next/image";
import { Button } from "../ui/button";
import SpecialOfferCard from "./SpecialOfferCard ";

const BannerSection = () => {
    return (
        <div>
            <div className="w-[50%]  mt-24 absolute inset-0 z-10   items-center justify-center text-white pl-32  bg-opacity-40">

              <div className="text-center">
              <h1 className="text-[20px] text-center text-[#749B3F] font-medium bg-[#749B3F1A] p-3 rounded-xl inline-block ">Welcome to Fresh Harvest</h1>
              </div>
                <h1 className="text-4xl  text-[#212337] md:text-[80px] font-semibold mb-4 mt-6">
                    Fresh Fruits and Vegetables
                </h1>
                <p className="text-lg md:text-xl text-[#4A4A52] mb-8 font-normal max-w-2xl">
                    At Fresh Harvests, we are passionate about providing you with the freshest and most flavorful fruits and vegetables.
                </p>
                <div>
                <Button className="w-[115px] h-[53px] bg-[#FF6A1A] text-[18px] text-white font-semibold cursor-pointer px-8 py-3 rounded-lg hover:bg-green-700 transition duration-300">
                    Shop Now
                </Button>
                </div>
                {/* special offer  */}
               <div className="flex justify-center">
                <div className="relative">
                <Image src={arrowSymble}   alt="Background Image" className="ml-20"/>
                </div>
               <SpecialOfferCard/>
               </div>
            </div>
            <div className=" ">
  <Image
    src={banner_bg}
    alt="Background Image"
    layout="fill"
    objectFit="cover"
    quality={100}

    
  />
</div>

        </div>
    );
};

export default BannerSection;