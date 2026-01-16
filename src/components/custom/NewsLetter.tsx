"use client";

import { useState } from "react";

export const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        // Simulate API call
        setTimeout(() => {
            setStatus("success");
            setEmail("");
        }, 1000);
    };

    return (
        <section className="py-16">
            <div className="bg-muted/50 rounded-2xl p-8 md:p-12">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                    {/* Text */}
                    <div className="md:max-w-md">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                            Enjoy my content?
                            <br />
                            Stay updated with my newsletter.
                        </h2>
                    </div>

                    {/* Form */}
                    <div className="flex flex-col gap-3">
                        <form onSubmit={handleSubmit} className="flex gap-2">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                                className="flex-1 min-w-[200px] px-4 py-2.5 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
                            >
                                {status === "loading" ? "..." : "Notify me"}
                            </button>
                        </form>

                        {status === "success" && (
                            <p className="text-sm text-green-600">Thanks for subscribing!</p>
                        )}

                        <p className="text-sm text-muted-foreground">
                            No spam, just useful updates. Read{" "}
                            <a href="/privacy" className="underline hover:text-foreground">
                                privacy policy
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};