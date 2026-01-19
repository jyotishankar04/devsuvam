import { useGetBlogs } from "@/lib/axios";
import Loader from "@/components/custom/Loader";
import { BlogList } from "@/components/custom/blog/BlogList";

interface BlogSectionProps {
    showViewAll?: boolean;
    limit?: number;
    title?: string;
    description?: string;
}

export const BlogsPage = ({
    title = "From the blog",
    description = "Discover valuable insights on backend development, system design, and more.",
}: BlogSectionProps) => {
    const { data: blogs, isLoading: loading } = useGetBlogs();
    if (loading) {
        return <div className="flex w-full items-center justify-center py-10">
            <Loader />
        </div>
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
                </div>

                {/* Blog List */}
                <BlogList blogs={blogs}  />
            </div>
        </section>
    );
};

export default BlogsPage;