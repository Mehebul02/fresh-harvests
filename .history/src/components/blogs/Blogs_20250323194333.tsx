import Container from "../shared/Container";
import TitleSection from "../shared/TitleSection";
import BlogCard from "./BlogCard";

const Blogs = () => {
    return (
        <Container>
            <TitleSection className="text-center " title="Our Blog" subtitle="Fresh Harvest Blog" description="Welcome to the Fresh Harvest Blog, your go-to resource for all things related to fresh produce, healthy eating, and culinary inspiration." />
        
        <BlogCard />
        </Contai>
    );
};

export default Blogs;