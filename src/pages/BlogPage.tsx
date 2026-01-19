import Loader from "@/components/custom/Loader";
import { useGetABlog } from "@/lib/axios";
import { useParams } from "react-router";
import { Streamdown } from "streamdown";

const BlogDetailPage = () => {
    const { slug } = useParams<{ slug: string }>();

    const { data: blog,isLoading } = useGetABlog(slug!);
    
    
    if (isLoading) {
        return (
            <div className="flex w-full items-center justify-center py-10">
                <Loader />
            </div>
        );
    }

    if (!blog || blog.length === 0) {
        return (
            <div className="py-20 text-center text-muted-foreground">
                Blog not found
            </div>
        );
    }

    return (
        <section className=" py-16">
            {/* Hero Card */}
            <div className="mb-14 rounded-2xl border border-border bg-card p-10">
                <div className="flex items-start gap-6">
                    <div className="text-4xl font-bold text-muted-foreground">
                        {"{A}"}
                    </div>

                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                            {blog.title}
                        </h1>

                        <p className="mt-4 max-w-2xl text-muted-foreground">
                            {blog.description}
                        </p>

                        <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
                            <span className="font-medium text-foreground">
                                Suvam
                            </span>
                            <span>•</span>
                            <span>
                                {new Date(blog.createdAt).toDateString()}
                            </span>
                            <span>•</span>
                            <span>6 min read</span>
                        </div>
                    </div>
                </div>
            </div>

            <Streamdown>{blog.content}</Streamdown>


        </section>
    );
};

export default BlogDetailPage;
