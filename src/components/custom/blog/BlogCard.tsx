import { Badge } from "@/components/ui/badge";
import type { Blog } from "@/types";
import { Link } from "react-router";

interface BlogCardProps {
    blog: Blog;
    layout?: "horizontal" | "vertical";
}

export const BlogCard = ({ blog, layout = "horizontal" }: BlogCardProps) => {
    if (layout === "vertical") {
        return (
            <Link to={`/blogs/${blog.slug}`} className="group block">
                <article className="flex flex-col gap-4">
                    <div className="relative aspect-video overflow-hidden rounded-xl">
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <time>{new Date(blog.createdAt).toDateString()}</time>
                            <span>•</span>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                            {blog.title}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-2">
                            {blog.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                            { blog?.tags && blog.tags.length > 0 &&
                                blog.tags.map((tag) => (
                                    <Badge key={tag} variant="outline" className="text-xs">
                                        {tag}
                                    </Badge>
                                ))
                            }
                        </div>
                    </div>
                </article>
            </Link>
        );
    }

    return (
        <Link to={`/blogs/${blog.slug}`} className="group block">
            <article className="flex flex-col md:flex-row gap-6 py-6 border-b border-border last:border-b-0">
                {/* Image */}
                <div className="relative w-full md:w-64 lg:w-72 aspect-video md:aspect-[4/3] flex-shrink-0 overflow-hidden rounded-xl">
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center gap-3">
                    {/* Meta info */}
                    <div className="flex flex-wrap items-center gap-2 text-sm">
                        <time className="text-muted-foreground">{blog.date}</time>
                        {blog.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                            </Badge>
                        ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {blog.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground line-clamp-2 md:line-clamp-3">
                        {blog.description}
                    </p>
                </div>
            </article>
        </Link>
    );
};