import Image from "next/image";

const ShopBanner = () => {
    return (
      <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center bg-gradient-to-r from-green-400 to-green-600">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://source.unsplash.com/1600x900/?shopping,store"
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
          <a href="/shop" className="mt-6 inline-block px-6 py-3 bg-white text-green-600 font-semibold rounded-lg shadow-lg hover:bg-green-100 transition-all">
            Start Shopping
          </a>
        </div>
      </div>
    );
  };
  
  export default ShopBanner;
  