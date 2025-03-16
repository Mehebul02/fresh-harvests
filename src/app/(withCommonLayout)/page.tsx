import BannerSection from "@/components/banner/BannerSection";
import Container from "@/components/shared/Container";

const HomePage = () => {
  return (
    <div className="">
    
      <BannerSection/>

      <div className="md:text-center mt-72">
              <h1 className="text-[80px] text-center text-[#749B3F] font-medium bg-[#749B3F1A] p-3 rounded-xl inline-block ">Welcome to Fresh Harvest</h1>
              </div>
    </div>
  );
};

export default HomePage;