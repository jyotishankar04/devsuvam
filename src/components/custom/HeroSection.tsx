import { ArrowDown, ArrowRight } from "lucide-react";
import { SiDocker, SiPostgresql, SiRedis, SiTsnode } from "react-icons/si";
import { Link } from "react-router";

const techBadgeIcons: Record<string, React.ElementType> = {
  "Node JS": SiTsnode,
  "PostgreSQL": SiPostgresql,
  "Docker": SiDocker,
  "Redis": SiRedis,
};

const techBadgeColors: Record<string, string> = {
  "Node JS": "text-green-600",
  "PostgreSQL": "text-sky-600",
  "Docker": "text-blue-600",
  "Redis": "text-red-600",
};

const techBadges = ["Node JS", "PostgreSQL", "Docker", "Redis"];

const images = [
  "https://res.cloudinary.com/djby1yfko/image/upload/v1768664109/IMG_20251208_165303878_1_bg5nr2.jpg",
  "https://res.cloudinary.com/djby1yfko/image/upload/v1768664101/IMG_20251208_165343292_jlvexy.jpg",
  "https://res.cloudinary.com/djby1yfko/image/upload/v1768664054/20260112_134703-IMG_STYLE_sit7ue.jpg",
];

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-10 w-full">
      <div className="w-full py-10 flex flex-col gap-4">
        <p className="text-primary text-lg">Welcome to my site,</p>
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
          I'm Jyotishankar, a Backend focused Full-Stack Developer based in India
        </h1>

        <div className="flex items-center gap-3 mt-4">
          {techBadges.map((badge) => {
            const Icon = techBadgeIcons[badge];
            return (
              <span
                key={badge}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted text-sm font-medium ${techBadgeColors[badge] || ""}`}
              >
                {Icon && <Icon />}
                {badge}
              </span>
            );
          })}
        </div>

        <p className="text-muted-foreground mt-4 max-w-md">
          I'm passionate about creating meaningful digital experiences, with a strong focus on backend development and building reliable, scalable systems.
        </p>

        <div className="flex items-center gap-3 mt-6">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors cursor-pointer"
          >
            Read the blog
            <ArrowDown />
          </Link>
          <a
            href="https://res.cloudinary.com/djby1yfko/image/upload/v1768676198/Jyotishankars_resume_twuz3f.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-muted text-foreground rounded-lg font-medium hover:bg-muted/80 transition-colors"
          >
            Resume
            <div className="flex flex-col justify-center items-center -rotate-45 cursor-pointer">
              <ArrowRight />
            </div>
          </a>
        </div>
      </div>

      <div className="relative flex items-center justify-center py-10">
        <div className="relative w-full max-w-md h-100">
          <div className="absolute top-0 right-0 w-40 h-48 rounded-2xl overflow-hidden shadow-xl rotate-6 hover:rotate-0 transition-transform duration-300 z-30">
            <img loading="lazy" src={images[0]} alt="Profile 1" className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-20 left-0 w-44 h-52 rounded-2xl overflow-hidden shadow-xl -rotate-6 hover:rotate-0 transition-transform duration-300 z-20">
            <img loading="lazy" src={images[1]} alt="Team photo" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-0 right-8 w-40 h-48 rounded-2xl overflow-hidden shadow-xl rotate-3 hover:rotate-0 transition-transform duration-300 z-10">
            <img loading="lazy" src={images[2]} alt="Profile 2" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
