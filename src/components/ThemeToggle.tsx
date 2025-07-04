import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Palette } from "lucide-react";
import { useState, useEffect } from "react";

const ThemeToggle = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const [isOpen, setIsOpen] = useState(false);

    // Thèmes disponibles avec leurs couleurs
    const themes = [
        { name: 'light', label: 'Clair', icon: Sun, colors: ['#ffffff', '#f3f4f6', '#3b82f6'] },
        { name: 'dark', label: 'Sombre', icon: Moon, colors: ['#1f2937', '#111827', '#60a5fa'] },
    ];

    useEffect(() => {
        // Récupérer le thème sauvegardé ou utiliser la préférence système
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        const initialTheme = savedTheme || systemTheme;
        
        setTheme(initialTheme);
        applyTheme(initialTheme);
    }, []);

    const applyTheme = (newTheme: 'light' | 'dark') => {
        const root = document.documentElement;
        
        if (newTheme === 'dark') {
            root.setAttribute('data-theme', 'dark');
            root.classList.add('dark');
        } else {
            root.setAttribute('data-theme', 'light');
            root.classList.remove('dark');
        }
        
        localStorage.setItem('theme', newTheme);
    };

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        applyTheme(newTheme);
        setIsOpen(false);
    };

    const currentTheme = themes.find(t => t.name === theme);

    return (
        <div className="fixed top-24 right-6 z-40">
            <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 200 }}
            >
                {/* Main Toggle Button */}
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    className="group relative w-14 h-14 bg-base-100/90 backdrop-blur-xl border-2 border-base-300 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {/* Background gradient */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        animate={{
                            rotate: [0, 360],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                    
                    {/* Icon container */}
                    <div className="relative z-10 w-full h-full flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={theme}
                                initial={{ rotate: -180, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 180, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-accent"
                            >
                                {currentTheme && <currentTheme.icon className="w-6 h-6" />}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Ripple effect */}
                    <motion.div
                        className="absolute inset-0 bg-accent/20 rounded-2xl opacity-0 group-hover:opacity-100"
                        animate={{
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </motion.button>

                {/* Theme Options Panel */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            className="absolute top-16 right-0 w-48 bg-base-100/95 backdrop-blur-xl border border-base-300 rounded-2xl shadow-2xl overflow-hidden"
                        >
                            {/* Header */}
                            <div className="p-4 border-b border-base-300">
                                <div className="flex items-center space-x-2">
                                    <Palette className="w-4 h-4 text-accent" />
                                    <span className="text-sm font-semibold text-base-content">Thème</span>
                                </div>
                            </div>

                            {/* Theme Options */}
                            <div className="p-2">
                                {themes.map((themeOption, index) => (
                                    <motion.button
                                        key={themeOption.name}
                                        onClick={() => {
                                            if (themeOption.name !== theme) {
                                                toggleTheme();
                                            } else {
                                                setIsOpen(false);
                                            }
                                        }}
                                        className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 ${
                                            theme === themeOption.name
                                                ? 'bg-accent text-accent-content shadow-lg'
                                                : 'hover:bg-base-200 text-base-content'
                                        }`}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {/* Theme Icon */}
                                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                            theme === themeOption.name
                                                ? 'bg-accent-content/20'
                                                : 'bg-accent/10'
                                        }`}>
                                            <themeOption.icon className="w-4 h-4" />
                                        </div>

                                        {/* Theme Info */}
                                        <div className="flex-1 text-left">
                                            <div className="text-sm font-medium">
                                                {themeOption.label}
                                            </div>
                                            <div className="flex space-x-1 mt-1">
                                                {themeOption.colors.map((color, colorIndex) => (
                                                    <div
                                                        key={colorIndex}
                                                        className="w-3 h-3 rounded-full border border-base-content/20"
                                                        style={{ backgroundColor: color }}
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Active Indicator */}
                                        {theme === themeOption.name && (
                                            <motion.div
                                                className="w-2 h-2 bg-accent-content rounded-full"
                                                layoutId="activeTheme"
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                    </motion.button>
                                ))}
                            </div>

                            {/* Footer */}
                            <div className="p-3 border-t border-base-300 bg-base-200/50">
                                <p className="text-xs text-base-content/60 text-center">
                                    Thème sauvegardé automatiquement
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Floating particles around the button */}
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-accent/40 rounded-full"
                            animate={{
                                x: [0, 20, 0],
                                y: [0, -20, 0],
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: i * 0.7,
                                ease: "easeInOut"
                            }}
                            style={{
                                left: `${30 + i * 20}%`,
                                top: `${40 + i * 10}%`,
                            }}
                        />
                    ))}
                </div>
            </motion.div>

            {/* Click outside to close */}
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[-1]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                />
            )}
        </div>
    );
};

export default ThemeToggle;