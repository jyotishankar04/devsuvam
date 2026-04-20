import { Send } from "lucide-react";

export const Newsletter = () => {
    return (
        <section className="py-16">
            <div className="bg-muted/50 rounded-2xl p-8 md:p-12">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                    <div className="md:max-w-md">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                            Enjoy my content?
                            <br />
                            Stay updated with my newsletter.
                        </h2>
                    </div>

                    <div className="flex flex-col gap-3">
                        <a
                            href="mailto:jyotipatra.subham@gmail.com?subject=Newsletter%20Subscription"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                        >
                            <Send size={16} />
                            Subscribe via Email
                        </a>

                        <p className="text-sm text-muted-foreground">
                            Drop me an email to join the newsletter. No spam, just useful updates.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
