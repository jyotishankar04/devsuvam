"use client";

import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
const posts = [
    {
        id: 1,
        image: "https://res.cloudinary.com/djby1yfko/image/upload/v1768675934/Snapchat-136706696_mwiu1y.jpg",
        caption: "Locking in. Quiet nights, loud goals.",
        mood: "Focused",
        date: "Jan 2026",
        featured: true,
    },
    {
        id: 2,
        image: "https://res.cloudinary.com/djby1yfko/image/upload/v1768675716/Snapchat-1197930273_bzrsrn.jpg",
        caption: "Sunlight fixes more than we think.",
        mood: "Calm",
        date: "Dec 2025",
    },
    {
        id: 3,
        image: "https://res.cloudinary.com/djby1yfko/image/upload/v1768664101/IMG_20251208_165343292_jlvexy.jpg",
        caption: "Head down. World muted.",
        mood: "Locked in",
        date: "Nov 2025",
    },
    {
        id: 4,
        image: "https://res.cloudinary.com/djby1yfko/image/upload/v1768676100/IMG_0032_zv1pf9.jpg",
        caption: "Progress doesn’t need permission.",
        mood: "Inspired",
        date: "Oct 2025",
    },
    {
        id: 5,
        image: "https://res.cloudinary.com/djby1yfko/image/upload/v1768675939/Snapchat-1287290365_g0it96.jpg",
        caption: "Just showing up matters.",
        mood: "Reflective",
        date: "Sep 2025",
    },
];


export function GallerySection() {
    const [activePost, setActivePost] = useState<typeof posts[0] | null>(null);

    return (
        <section className="mt-32">
            {/* Header */}
            <div className="mb-10 max-w-xl">
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                    Moments
                </h2>
                <p className="text-muted-foreground">
                    Small pieces of life, captured casually.
                </p>
            </div>

            {/* Bento Grid */}
            <div className="
                grid grid-cols-1 md:grid-cols-4
                auto-rows-[180px]
                gap-4
            ">
                {posts.map((post, index) => {
                    const isFeatured = post.featured;

                    return (
                        <button
                            key={post.id}
                            onClick={() => setActivePost(post)}
                            className={`
                                group relative overflow-hidden rounded-3xl
                                bg-muted transition-all
                                hover:-translate-y-1 hover:shadow-xl
                                ${isFeatured ? "md:col-span-2 md:row-span-2" : ""}
                                ${!isFeatured && index % 3 === 0 ? "md:col-span-2" : ""}
                            `}
                        >
                            {/* Image */}
                            <img
                                src={post.image}
                                alt={post.caption}
                                className="
                                    absolute inset-0 h-full w-full object-cover
                                    transition-transform duration-700
                                    group-hover:scale-105
                                "
                            />

                            {/* Overlay */}
                            <div className="
                                absolute inset-0
                                bg-linear-to-t
                                from-background/80 via-background/30 to-transparent
                            " />

                            {/* Content */}
                            <div className="relative z-10 flex h-full flex-col justify-end p-4">
                                <Badge variant="secondary" className="mb-2 w-fit">
                                    {post.mood}
                                </Badge>
                                <p className="text-sm text-foreground leading-snug line-clamp-2">
                                    {post.caption}
                                </p>
                            </div>
                        </button>
                    );
                })}
            </div>

            {/* Popup (Insta-style) */}
            <Dialog open={!!activePost} onOpenChange={() => setActivePost(null)}>
                <DialogContent className="max-w-md p-0 overflow-hidden">
                    {activePost && (
                        <div>
                            <img
                                src={activePost.image}
                                alt=""
                                className="w-full object-cover"
                            />

                            <div className="p-5 space-y-3">
                                <div className="flex justify-between text-xs text-muted-foreground">
                                    <span>@devsuvam</span>
                                    <span>{activePost.date}</span>
                                </div>

                                <p className="text-sm text-foreground leading-relaxed">
                                    {activePost.caption}
                                </p>

                                <Badge variant="outline">
                                    {activePost.mood}
                                </Badge>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </section>
    );
}
