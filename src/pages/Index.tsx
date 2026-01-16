import { BlogSection } from "@/components/custom/BlogSection";
import HeroSection from "@/components/custom/HeroSection";
import { ProjectSection } from "@/components/custom/ProjectsSection";
import { blogs, projects } from "@/constants/data";


const Index = () => {
  return (
    <div className="w-full ">
      <HeroSection />
      <ProjectSection
        projects={projects}
        limit={4}
        defaultDisplayMode="linear"
      />
      <BlogSection blogs={blogs} />
    </div>
  );
};

export default Index;
