
import AboutSection from "@/components/about/AboutSection";
import SpecialOffer from "@/components/about/SpecialOffer";
import BannerSection from "@/components/banner/BannerSection";
import Blogs from "@/components/blogs/Blogs";
import HomeProducts from "@/components/products/HomeProducts";
import Testimonial from "@/components/testimonial/Testimonial";

const HomePage = () => {

  // console.log("user current",users);
  return (
    <div className="">
      <BannerSection />
      <HomeProducts />
      <AboutSection />
      <SpecialOffer />
      <Testimonial />
      <Blogs />

    </div>
  );
};

export default HomePage;