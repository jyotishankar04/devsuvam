import { BlogSection } from "@/components/custom/BlogSection";

export default function BlogsPage() {
    return (
        <BlogSection
            showViewAll={false}
            showAll
            title="Blog"
            description="Thoughts, tutorials, and insights on backend development and system design."
        />
    );
}
