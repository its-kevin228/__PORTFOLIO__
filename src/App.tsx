import { lazy, Suspense, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useOptimizedTheme } from "./hooks/useOptimizedTheme";

// Lazy load components for better performance
const About = lazy(() => import("./components/About"));
const Footer = lazy(() => import("./components/Footer"));
const Home = lazy(() => import("./components/Home"));
const Navbar = lazy(() => import("./components/Navbar"));
const Projects = lazy(() => import("./components/Projects"));
const Technologies = lazy(() => import("./components/Technologies"));
const StatsSection = lazy(() => import("./components/StatsSection"));
const ServicesSection = lazy(() => import("./components/ServicesSection"));
const ContactSection = lazy(() => import("./components/ContactSection"));
const ThemeToggle = lazy(() => import("./components/ThemeToggle"));
const Loader = lazy(() => import("./components/Loader"));
const OptimizedDarkBackground = lazy(() => import("./components/OptimizedDarkBackground"));

// Loading fallback component
const SectionLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
  </div>
);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const isDark = useOptimizedTheme();

  useEffect(() => {
    // Reduce loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Reduced from 3 seconds to 2

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <Suspense fallback={<div className="min-h-screen bg-base-100" />}>
        <Loader />
      </Suspense>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }} // Reduced from 0.8
      className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-300 relative"
    >
      {/* Enhanced background for dark mode - lazy loaded */}
      {isDark && (
        <Suspense fallback={null}>
          <OptimizedDarkBackground />
        </Suspense>
      )}
      
      <div className="relative z-10">
        <Suspense fallback={<div className="h-16 bg-base-100/90" />}>
          <Navbar />
        </Suspense>
        
        <Suspense fallback={<div className="fixed top-4 right-4 w-12 h-12" />}>
          <ThemeToggle />
        </Suspense>
        
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }} // Reduced delays
          className="relative"
        >
          {/* Hero Section - Load immediately */}
          <section>
            <Suspense fallback={<SectionLoader />}>
              <Home />
            </Suspense>
          </section>

          {/* Other sections - Load with intersection observer */}
          <section>
            <Suspense fallback={<SectionLoader />}>
              <StatsSection />
            </Suspense>
          </section>

          <section>
            <Suspense fallback={<SectionLoader />}>
              <About />
            </Suspense>
          </section>

          <section>
            <Suspense fallback={<SectionLoader />}>
              <ServicesSection />
            </Suspense>
          </section>

          <section className="px-6 md:px-[10%] lg:px-[15%]">
            <Suspense fallback={<SectionLoader />}>
              <Technologies />
            </Suspense>
          </section>

          <section className="px-6 md:px-[10%] lg:px-[15%]">
            <Suspense fallback={<SectionLoader />}>
              <Projects />
            </Suspense>
          </section>

          <section>
            <Suspense fallback={<SectionLoader />}>
              <ContactSection />
            </Suspense>
          </section>
        </motion.main>

        <Suspense fallback={<div className="h-20 bg-base-200" />}>
          <Footer />
        </Suspense>
      </div>
    </motion.div>
  )
}