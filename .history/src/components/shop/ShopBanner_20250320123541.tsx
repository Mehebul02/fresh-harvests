import { specialAbout } from "@/app/assets";
import Image from "next/image";
import Link from "next/link";

const ShopBanner = () => {
    return (
      <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center bg-gradient-to-r to-[#223b01] ">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={specialAbout}
            alt="Shop Banner" width={1600} height={900}
            className="w-full h-full object-cover opacity-40"
          />
        </div>
  
        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome to Our Shop</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Discover the best products at unbeatable prices. Shop now and experience excellence.
          </p>
          <Link href="/shop" className="mt-6 inline-block px-6 py-3 bg-white text-[#] font-semibold rounded-lg shadow-lg hover:bg-green-100 transition-all">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  };
  
  export default ShopBanner;
  