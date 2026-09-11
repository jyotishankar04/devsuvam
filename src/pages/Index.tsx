import { StripeSeparator } from "@/components/layout/separator";
import { Blog } from "@/components/home/blog";
import { CallToAction } from "@/components/home/cta";
import { Education } from "@/components/home/education";
import { Experience } from "@/components/home/experience";
import { GitHubContributions } from "@/components/home/github-contributions";
import { Overview } from "@/components/home/overview";
import { ProfileHeader } from "@/components/home/profile-header";
import { Projects } from "@/components/home/projects";
import { SocialLinks } from "@/components/home/social-links";
import { TechStack } from "@/components/home/tech-stack";

const Index = () => {
  return (
    <>
      <ProfileHeader />
      <StripeSeparator />

      <Overview />
      <SocialLinks />
      <GitHubContributions />
      <StripeSeparator />

      <Projects />
      <StripeSeparator />

      <Experience />
      <StripeSeparator />

      <TechStack />
      <StripeSeparator />

      <Blog />
      <StripeSeparator />

      <Education />
      <StripeSeparator />

      <CallToAction />
    </>
  );
};

export default Index;
