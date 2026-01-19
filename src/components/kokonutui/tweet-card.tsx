import { VerifiedIcon, MapPin, Calendar, Link as LinkIcon, Users, UserPlus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

type TwitterProfileCardProps = {
  // Profile Info
  username: string;
  displayName: string;
  bio: string;
  profileImage: string;
  bannerImage?: string;
  isVerified?: boolean;
  isPrivate?: boolean;

  // Stats
  followingCount: number;
  followersCount: number;

  // Additional Info
  location?: string;
  website?: string;
  joinedDate?: string;

  // Styling
  className?: string;

  // Links
  twitterUrl?: string;
};

export default function TwitterProfileCard({
  username = "devsuvam1",
  displayName = "Suvam",
  bio = "Frontend Developer • Building cool stuff with React & Next.js • Open source enthusiast",
  profileImage = "https://pbs.twimg.com/profile_images/1992215290936205312/N_EuwLUO_400x400.jpg",
  bannerImage = "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=2000",
  isVerified = true,
  isPrivate = false,

  followingCount = 450,
  followersCount = 12800,

  location = "Bhubaneswar, India",
  website = "suvam.dev",
  joinedDate = "Joined August 2020",

  className,

  twitterUrl = "https://x.com/devsuvam1",
}: TwitterProfileCardProps) {
  return (
    <Link
      to={twitterUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("block", className)}
    >
      <div
        className={cn(
          "relative isolate w-full min-w-[320px] max-w-md overflow-hidden rounded-2xl md:min-w-95",
          "bg-white/5 dark:bg-black/90",
          "bg-linear-to-br from-black/5 to-black/2 dark:from-white/5 dark:to-white/2",
          "backdrop-blur-xl backdrop-saturate-180",
          "border border-black/10 dark:border-white/10",
          "shadow-[0_8px_32px_rgb(0_0_0/0.15)] dark:shadow-[0_8px_32px_rgb(0_0_0/0.35)]",
          "translate-z-0 will-change-transform transition-all duration-300",
          "hover:scale-[1.02] hover:shadow-[0_12px_48px_rgb(0_0_0/0.2)] dark:hover:shadow-[0_12px_48px_rgb(0_0_0/0.4)]"
        )}
      >
        {/* Banner */}
        <div className="relative h-32 md:h-40 overflow-hidden">
          <img
            src={bannerImage}
            alt="Profile banner"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
        </div>

        {/* Main Card Content */}
        <div
          className={cn(
            "relative -mt-16 rounded-t-3xl px-5 pb-5 pt-0",
            "bg-linear-to-br from-black/5 to-transparent dark:from-white/8 dark:to-transparent",
            "backdrop-blur-md backdrop-saturate-150",
            "border-t border-black/5 dark:border-white/8",
            "text-black/90 dark:text-white",
            "shadow-xs"
          )}
        >
          {/* Profile Image and Follow Button */}
          <div className="flex items-start justify-between">
            {/* Profile Image */}
            <div className="relative -mt-12">
              <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-white dark:border-black">
                <img
                  src={profileImage}
                  alt={displayName}
                  className="h-full w-full object-cover"
                />
              </div>
              {isPrivate && (
                <div className="absolute -bottom-2 -right-2 rounded-full bg-gray-500 px-2 py-1">
                  <span className="text-xs text-white">Private</span>
                </div>
              )}
            </div>

            {/* Follow Button */}
            <a
              className={cn(
                "mt-4 flex h-10 items-center gap-2 justify-center rounded-full px-4 font-semibold transition-all",
                "bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200",
                "shadow-sm hover:shadow-md"
              )}
              href={`https://x.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <div >
                <UserPlus style={{
                  width:"15",
                  height:"15"
                }} />

              </div>
              Follow
            </a>
          </div>

          {/* Profile Info */}
          <div className="mt-4">
            {/* Name and Verification */}
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold">{displayName}</h2>
              {isVerified && (
                <VerifiedIcon style={{
                  color:"#1D9BF0"
                }}/>
              )}
            </div>

            {/* Username */}
            <p className="text-gray-500 dark:text-gray-400">@{username}</p>

            {/* Bio */}
            <p className="mt-3 text-gray-700 dark:text-gray-300">{bio}</p>

            {/* Additional Info */}
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400">
              {location && (
                <div className="flex items-center gap-1">
                  <MapPin />
                  <span>{location}</span>
                </div>
              )}

              {website && (
                <a
                  href={`https://${website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-500 hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  <LinkIcon  />
                  <span>{website}</span>
                </a>
              )}

              {joinedDate && (
                <div className="flex items-center gap-1">
                  <Calendar  />
                  <span>{joinedDate}</span>
                </div>
              )}
            </div>

            {/* Stats */}
            <div className="mt-6 flex gap-6">
              <div className="flex items-center gap-1">
                <Users  />
                <span className="font-semibold">{followersCount.toLocaleString()}</span>
                <span className="text-gray-600 dark:text-gray-400">Followers</span>
              </div>

              <div className="flex items-center gap-1">
                <span className="font-semibold">{followingCount.toLocaleString()}</span>
                <span className="text-gray-600 dark:text-gray-400">Following</span>
              </div>
            </div>

            {/* Recent Tweets Preview (Optional) */}
            <div className="mt-6 space-y-3 border-t border-gray-200 pt-4 dark:border-gray-800">
              <div className="flex items-start gap-2">
                <div className="h-8 w-8 overflow-hidden rounded-full">
                  <img
                    src={profileImage}
                    alt={displayName}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Just shipped a new feature! 🎉 #webdev #react
                  </p>
                  <span className="mt-1 text-xs text-gray-500">2h ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Twitter Logo Badge */}
        <div className="absolute top-4 right-4 rounded-full bg-black/80 p-2 backdrop-blur-sm">
          <svg
            fill="white"
            height="20"
            viewBox="0 0 1200 1227"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>X</title>
            <path
              d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}