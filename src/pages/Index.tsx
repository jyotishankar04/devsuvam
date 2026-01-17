import { BlogSection } from "@/components/custom/BlogSection";
import ConnectSection from "@/components/custom/ConnectSection";
import EducationSection from "@/components/custom/EducationSection";
import ExperienceSection from "@/components/custom/ExperienceSection";
import HeroSection from "@/components/custom/HeroSection";
import { Newsletter } from "@/components/custom/NewsLetter";
import { ProjectSection } from "@/components/custom/ProjectsSection";
import SkillsSection from "@/components/custom/SkillsSection";
import { projects } from "@/constants/data";


const Index = () => {
  return (
    <div className="w-full ">
      <HeroSection />
      <ExperienceSection />
      <ProjectSection
        projects={projects}
        limit={4}
        defaultDisplayMode="linear"
      />
      <EducationSection />
      <SkillsSection />
      <BlogSection />
      <ConnectSection />
      <Newsletter />
    </div>
  );
};

export default Index;
