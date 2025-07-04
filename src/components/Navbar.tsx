import { MonitorSmartphone, Menu, X, Home, Info, Briefcase, Code, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);
    const [activeSection, setActiveSection] = useState("Home");

    const menuVariants = {
        open: { 
            opacity: 1, 
            y: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 24
            }
        },
        closed: { 
            opacity: 0, 
            y: -20,
            transition: {
                duration: 0.2
            }
        },
    };

    const navItems = [
        { id: "Home", label: "Accueil", icon: <Home className="w-4 h-4 mr-2" /> },
        { id: "About", label: "À propos", icon: <Info className="w-4 h-4 mr-2" /> },
        { id: "Technologies", label: "Technologies", icon: <Code className="w-4 h-4 mr-2" /> },
        { id: "Projects", label: "Projets", icon: <Briefcase className="w-4 h-4 mr-2" /> },
        { id: "ContactSection", label: "Contact", icon: <Mail className="w-4 h-4 mr-2" /> },
    ];

    // Suivi du défilement et de la section active
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setScrolling(scrollY > 50);

            // Détection de la section active
            const sections = navItems.map(item => document.getElementById(item.id));
            const currentSection = sections.find(section => {
                if (section) {
                    const rect = section.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            if (currentSection) {
                setActiveSection(currentSection.id);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            });
        }
        setIsMenuOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
                scrolling 
                    ? "bg-base-100/90 backdrop-blur-xl shadow-2xl border-b border-accent/20" 
                    : "bg-transparent"
            }`}
        >
            {/* Animated background gradient */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent/5 via-primary/5 to-accent/5"
                initial={{ opacity: 0 }}
                animate={{ opacity: scrolling ? 1 : 0 }}
                transition={{ duration: 0.5 }}
            />
            <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
                {/* Logo */}
                <motion.a
                    href="#Home"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("Home");
                    }}
                    className="relative flex items-center text-2xl font-bold group cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {/* Logo background effect */}
                    <motion.div
                        className="absolute -inset-2 bg-gradient-to-r from-accent/20 to-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.3 }}
                    />
                    
                    <motion.div
                        className="relative p-2 bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl mr-3"
                        whileHover={{ 
                            rotate: [0, -10, 10, 0],
                            scale: 1.1
                        }}
                        transition={{ duration: 0.6 }}
                    >
                        <MonitorSmartphone className="w-6 h-6 text-accent" />
                    </motion.div>
                    
                    <motion.span 
                        className="relative bg-gradient-to-r from-base-content via-accent to-primary bg-clip-text text-transparent font-black"
                        animate={{
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        style={{
                            backgroundSize: "200% 200%"
                        }}
                    >
                        Kevin<span className="text-accent">PEKPELI</span>
                    </motion.span>
                </motion.a>

                {/* Navigation Desktop */}
                <ul className="hidden md:flex space-x-8">
                    {navItems.map((item, index) => (
                        <motion.li 
                            key={item.id}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <a
                                href={`#${item.id}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(item.id);
                                }}
                                className={`relative flex items-center px-6 py-3 rounded-xl transition-all duration-300 group cursor-pointer overflow-hidden ${
                                    activeSection === item.id
                                        ? "text-accent-content bg-accent shadow-lg"
                                        : "text-base-content hover:text-accent hover:bg-accent/10"
                                }`}
                                aria-label={`Naviguer vers ${item.label}`}
                            >
                                {/* Background animation */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100"
                                    initial={{ scale: 0, borderRadius: "50%" }}
                                    whileHover={{ scale: 1, borderRadius: "12px" }}
                                    transition={{ duration: 0.3 }}
                                />
                                
                                <motion.div
                                    className="relative z-10"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    {item.icon}
                                </motion.div>
                                <span className="relative z-10 font-semibold ml-2">{item.label}</span>
                                
                                {/* Indicateur actif amélioré */}
                                {activeSection === item.id && (
                                    <motion.div
                                        layoutId="activeIndicator"
                                        className="absolute inset-0 bg-gradient-to-r from-accent to-primary rounded-xl"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    />
                                )}
                                
                                {/* Shine effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                                    animate={{
                                        x: ["-100%", "100%"],
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        repeat: Infinity,
                                        repeatDelay: 3,
                                    }}
                                />
                            </a>
                        </motion.li>
                    ))}
                </ul>

                {/* Bouton Menu Mobile */}
                <motion.button
                    className="md:hidden p-2 rounded-lg hover:bg-base-200 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    whileTap={{ scale: 0.95 }}
                    aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                    aria-expanded={isMenuOpen}
                >
                    <motion.div
                        animate={{ rotate: isMenuOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6 text-accent" />
                        ) : (
                            <Menu className="w-6 h-6 text-base-content" />
                        )}
                    </motion.div>
                </motion.button>
            </div>

            {/* Menu Mobile */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="md:hidden absolute top-full left-0 right-0 bg-base-100/95 backdrop-blur-md border-b border-base-300 shadow-xl"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                    >
                        <ul className="px-6 py-4 space-y-2">
                            {navItems.map((item, index) => (
                                <motion.li 
                                    key={item.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <a
                                        href={`#${item.id}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection(item.id);
                                        }}
                                        className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 cursor-pointer ${
                                            activeSection === item.id
                                                ? "text-accent bg-accent/10"
                                                : "text-base-content hover:text-accent hover:bg-accent/5"
                                        }`}
                                    >
                                        {item.icon}
                                        <span className="font-medium">{item.label}</span>
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
