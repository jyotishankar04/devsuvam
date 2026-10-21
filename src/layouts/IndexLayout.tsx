import Footer from "@/components/custom/Footer";
import NavBar from "@/components/custom/NavBar";
import PageTransition from "@/components/PageTransition";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Toaster } from "@/components/ui/sonner";
import { WelcomeSplash } from "@/components/welcome-splash";

const IndexLayout = () => {
  return (
    <SmoothScroll>
      {/* overflow-x-clip (not hidden) keeps the 200vw hairlines from causing
          horizontal scroll without breaking the sticky header. */}
      <div className="flex min-h-dvh flex-col overflow-x-clip">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-60 focus:rounded-md focus:bg-foreground focus:px-3 focus:py-1.5 focus:text-sm focus:text-background"
        >
          Skip to content
        </a>
        <NavBar />
        <main id="main" tabIndex={-1} className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-2 outline-none sm:px-0">
          {/* Pseudo-element rails keep the column's vertical lines running
              down to the footer on short pages; they sit exactly under the
              panels' own borders. */}
          <div className="relative flex-1 before:pointer-events-none before:absolute before:inset-y-0 before:left-0 before:w-px before:bg-line after:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:w-px after:bg-line">
            <PageTransition />
          </div>
          <Footer />
        </main>

        {/* Soft fade at the bottom of the viewport. */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-x-0 bottom-0 z-30 h-(--fade-bottom-height) bg-linear-to-t from-background via-background/40 to-transparent"
        />
        <ScrollToTop />
        <Toaster />
        <WelcomeSplash />
      </div>
    </SmoothScroll>
  );
};

export default IndexLayout;
