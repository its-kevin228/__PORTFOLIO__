import { MonitorSmartphone, Menu, X, Home, Info, Briefcase, Code } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    const menuVariants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: -50 },
    };

    const navItems = [
        { id: "Home", label: "Home", icon: <Home className="w-4 h-4 mr-2" /> },
        { id: "About", label: "About", icon: <Info className="w-4 h-4 mr-2" /> },
        { id: "Projects", label: "Projects", icon: <Briefcase className="w-4 h-4 mr-2" /> },
        { id: "Technologies", label: "Technologies", icon: <Code className="w-4 h-4 mr-2" /> },
    ];

    // Suivi du défilement de la page
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolling(true); 
            } else {
                setScrolling(false); 
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Nettoyage de l'événement lors de la destruction du composant
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`bg-base-300 shadow-lg fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
                scrolling ? "bg-opacity-50" : "bg-opacity-100"
            }`}
        >
            <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
                
                <a
                    href="#"
                    className="flex items-center text-2xl font-bold md:text-xl group"
                >
                    <MonitorSmartphone className="mr-2 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-125" />
                    <span>
                        Kevin<span className="text-accent transition-colors duration-300">PEKPELI</span>
                    </span>
                </a>

               
                <ul className="hidden md:flex space-x-6">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <a
                                href={`#${item.id}`}
                                className="flex items-center relative text-accent transition-colors duration-300 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-1 before:bg-accent before:transition-all before:duration-300 hover:before:w-full"
                            >
                                {item.icon}
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <button
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        <X className="text-primary transition-transform duration-300 rotate-45 scale-125" />
                    ) : (
                        <Menu className="text-primary transition-transform duration-300 scale-125" />
                    )}
                </button>
            </div>

           
            {isMenuOpen && (
                <motion.ul
                    className="md:hidden bg-base-100 p-6 space-y-4 shadow-lg absolute w-full left-0 top-full"
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={menuVariants}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <a
                                href={`#${item.id}`}
                                className="flex items-center text-primary hover:text-accent transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.icon}
                                {item.label}
                            </a>
                        </li>
                    ))}
                </motion.ul>
            )}
        </div>
    );
};

export default Navbar;
