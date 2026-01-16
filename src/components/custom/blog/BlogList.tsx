import type { Blog } from "@/types";
import { BlogCard } from "./BlogCard";

interface BlogListProps {
    blogs: Blog[];
    layout?: "horizontal" | "vertical" | "grid";
    showAll?: boolean;
    limit?: number;
}

export const BlogList = ({
    blogs,
    layout = "horizontal",
    showAll = false,
    limit = 3,
}: BlogListProps) => {
    const displayedBlogs = showAll ? blogs : blogs.slice(0, limit);

    if (layout === "grid") {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedBlogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} layout="vertical" />
                ))}
            </div>
        );
    }

    return (
        <div className="flex flex-col">
            {displayedBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} layout={layout} />
            ))}
        </div>
    );
};