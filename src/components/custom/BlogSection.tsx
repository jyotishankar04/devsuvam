import { Link } from "react-router";
import { BlogList } from "./blog/BlogList";
import { ArrowRight } from "lucide-react";
import { useGetBlogs } from "@/lib/axios";

interface BlogSectionProps {
    showViewAll?: boolean;
    limit?: number;
    title?: string;
    description?: string;
}

export const BlogSection = ({
    showViewAll = true,
    limit = 3,
    title = "From the blog",
    description = "Discover valuable insights on backend development, system design, and more.",
}: BlogSectionProps) => {
    const { data: blogs, isLoading: loading, isError: error } = useGetBlogs();
    if (loading) {
        return <div>Loading...</div>
    }
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
                            className="inline-flex items-center gap-2  text-primary hover:underline font-medium"
                        >
                            View all posts
                            <ArrowRight />
                        </Link>
                    )}
                </div>

                {/* Blog List */}
                <BlogList blogs={blogs} limit={limit} />
            </div>
        </section>
    );
};