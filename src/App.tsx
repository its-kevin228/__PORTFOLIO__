import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import StatsSection from "./components/StatsSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import ThemeToggle from "./components/ThemeToggle";
import Loader from "./components/Loader";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuler le temps de chargement
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 secondes de chargement

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-300"
    >
      <Navbar />
      <ThemeToggle />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        {/* Hero Section */}
        <section>
          <Home />
        </section>

        {/* Stats Section */}
        <section>
          <StatsSection />
        </section>

        {/* About Section */}
        <section>
          <About />
        </section>

        {/* Services Section */}
        <section>
          <ServicesSection />
        </section>

        {/* Technologies Section */}
        <section className="px-6 md:px-[10%] lg:px-[15%]">
          <Technologies />
        </section>

        {/* Projects Section */}
        <section className="px-6 md:px-[10%] lg:px-[15%]">
          <Projects />
        </section>

        {/* Contact Section */}
        <section>
          <ContactSection />
        </section>
      </motion.main>

      <Footer />
    </motion.div>
  )
}