import TitleSection from "../shared/TitleSection";
import BlogCard from "./BlogCard";

const Blogs = () => {
    return (
        <div>
            <TitleSection className="text-center " title="Our Blog" subtitle="Fresh Harvest Blog" description="Welcome to the Fresh Harvest Blog, your go-to resource for all things related to fresh produce, healthy eating, and culinary inspiration." />
        
        <BlogCard/>
        </div>
    );
};

export default Blogs;