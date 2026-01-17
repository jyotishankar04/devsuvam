import ExperienceSection from "@/components/custom/ExperienceSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ExperiencePage = () => {
    return (
        <>
            <ExperienceSection />

            {/* CTA Card */}
            <div className="relative my-16 flex justify-center">
                {/* Background glow */}
                <div className="pointer-events-none absolute -z-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />

                <Card className="relative w-full  overflow-hidden border-border bg-card">
                    {/* Subtle gradient overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent" />

                    <CardContent className="relative p-2 text-center">
                        <h3 className="text-xl font-semibold text-foreground">
                            Let’s build something meaningful
                        </h3>

                        <p className="mt-4 text-base text-muted-foreground">
                            I focus on building dependable software that scales.
                        </p>

                        <div className="mt-8">
                            <Button size="lg" className="px-10">
                                Hire Me
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
};

export default ExperiencePage;
