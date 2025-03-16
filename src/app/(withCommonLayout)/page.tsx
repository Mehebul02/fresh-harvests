import AboutSection from "@/components/about/AboutSection";
import SpecialOffer from "@/components/about/SpecialOffer";
import BannerSection from "@/components/banner/BannerSection";
import HomeProducts from "@/components/products/HomeProducts";

const HomePage = () => {
  return (
    <div className="">
    
      <BannerSection/>
      <HomeProducts/>
      <AboutSection/>
      <SpecialOffer/>
              
    </div>
  );
};

export default HomePage;