import AboutSection from "@/components/about/AboutSection";
import BannerSection from "@/components/banner/BannerSection";
import HomeProducts from "@/components/products/HomeProducts";

const HomePage = () => {
  return (
    <div className="">
    
      <BannerSection/>

      <HomeProducts/>
      <AboutSection/>
              
    </div>
  );
};

export default HomePage;