import { Suspense, useState } from "react";
import { AnimatePresence, motion, type Variants } from "motion/react";
import { useLenis } from "lenis/react";
import { useLocation, useOutlet } from "react-router";

const pageVariants: Variants = {
  initial: { opacity: 0, y: 12, filter: "blur(4px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0,
    y: -6,
    filter: "blur(2px)",
    transition: { duration: 0.18, ease: "easeIn" },
  },
};

// Freezes the outlet at mount so the exiting page keeps rendering its own
// route while AnimatePresence plays the exit animation.
function FrozenOutlet() {
  const outlet = useOutlet();
  const [frozen] = useState(outlet);
  return frozen;
}

/** Layout-level animated <Outlet/>. One AnimatePresence for all child routes. */
function PageTransition() {
  const location = useLocation();
  const lenis = useLenis();

  return (
    <AnimatePresence
      mode="wait"
      initial={false}
      onExitComplete={() => {
        if (location.hash) return;
        if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
        else window.scrollTo({ top: 0 });
      }}
    >
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Suspense fallback={<div className="min-h-[60vh]" />}>
          <FrozenOutlet />
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}

export default PageTransition;
