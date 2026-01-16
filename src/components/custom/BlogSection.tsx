import type { Blog } from "@/types";
import { Link } from "react-router";
import { BlogList } from "./blog/BlogList";

interface BlogSectionProps {
    blogs: Blog[];
    showViewAll?: boolean;
    limit?: number;
    title?: string;
    description?: string;
}

export const BlogSection = ({
    blogs,
    showViewAll = true,
    limit = 3,
    title = "From the blog",
    description = "Discover valuable insights on backend development, system design, and more.",
}: BlogSectionProps) => {
    return (
        <section className="py-16">
            <div className="flex flex-col gap-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <div>
                        <h2 className="text-3xl font-bold text-foreground">{title}</h2>
                        <p className="text-muted-foreground mt-2">{description}</p>
                    </div>
                    {showViewAll && (
                        <Link
                            to="/blogs"
                            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                        >
                            View all posts
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    )}
                </div>

                {/* Blog List */}
                <BlogList blogs={blogs} limit={limit} />
            </div>
        </section>
    );
};