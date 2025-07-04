import { motion } from "framer-motion";
import { useEffect, useState, useMemo, useCallback } from "react";

const OptimizedDarkBackground = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
    const [isVisible, setIsVisible] = useState(true);

    // Throttle mouse movement for better performance
    const handleMouseMove = useCallback((e: MouseEvent) => {
        setMousePosition({
            x: e.clientX / window.innerWidth,
            y: e.clientY / window.innerHeight,
        });
    }, []);

    useEffect(() => {
        let timeoutId: number;
        
        const throttledMouseMove = (e: MouseEvent) => {
            if (timeoutId) return;
            timeoutId = window.setTimeout(() => {
                handleMouseMove(e);
                timeoutId = 0;
            }, 16); // ~60fps
        };

        // Intersection Observer to pause animations when not visible
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );

        const element = document.getElementById('background-container');
        if (element) observer.observe(element);

        window.addEventListener('mousemove', throttledMouseMove, { passive: true });
        
        return () => {
            window.removeEventListener('mousemove', throttledMouseMove);
            if (timeoutId) clearTimeout(timeoutId);
            observer.disconnect();
        };
    }, [handleMouseMove]);

    // Memoize static elements
    const staticElements = useMemo(() => (
        <>
            {/* Grid pattern overlay - static */}
            <div 
                className="absolute inset-0 opacity-[0.015]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Subtle noise texture - static */}
            <div 
                className="absolute inset-0 opacity-[0.008] mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />
        </>
    ), []);

    // Reduce number of animated elements
    const animatedParticles = useMemo(() => 
        Array.from({ length: 6 }, (_, i) => ({ // Reduced from 12 to 6
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: 2 + Math.random() * 2,
        }))
    , []);

    const codeSymbols = useMemo(() => 
        ['</>', '{}', '=>', '&&'].map((symbol, i) => ({ // Reduced symbols
            symbol,
            x: 15 + i * 20,
            y: 20 + i * 15,
        }))
    , []);

    if (!isVisible) return null;

    return (
        <div id="background-container" className="fixed inset-0 pointer-events-none overflow-hidden">
            {/* Base gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-base-100 via-base-200 to-base-300" />
            
            {staticElements}
            
            {/* Optimized gradient orbs - only 2 instead of multiple */}
            <motion.div
                className="absolute w-80 h-80 rounded-full opacity-15"
                style={{
                    background: "radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, transparent 70%)",
                    left: `${mousePosition.x * 80}%`,
                    top: `${mousePosition.y * 80}%`,
                    transform: "translate(-50%, -50%)",
                }}
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.25, 0.1],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute w-60 h-60 rounded-full opacity-10"
                style={{
                    background: "radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%)",
                    right: `${(1 - mousePosition.x) * 60}%`,
                    bottom: `${(1 - mousePosition.y) * 60}%`,
                }}
                animate={{
                    scale: [1.1, 1, 1.1],
                    opacity: [0.08, 0.2, 0.08],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
            />

            {/* Reduced constellation nodes */}
            <div className="absolute inset-0">
                {animatedParticles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute rounded-full"
                        style={{
                            width: particle.size,
                            height: particle.size,
                            background: "radial-gradient(circle, rgba(16, 185, 129, 0.6) 0%, transparent 70%)",
                            left: `${particle.x}%`,
                            top: `${particle.y}%`,
                            boxShadow: "0 0 8px rgba(16, 185, 129, 0.3)",
                        }}
                        animate={{
                            opacity: [0.2, 0.8, 0.2],
                            scale: [0.5, 1.2, 0.5],
                        }}
                        transition={{
                            duration: 3 + Math.random(),
                            repeat: Infinity,
                            delay: particle.id * 0.5,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* Simplified geometric shapes - only 1 */}
            <motion.div
                className="absolute w-32 h-32 border border-accent/8 rounded-full"
                style={{ left: "10%", top: "20%" }}
                animate={{
                    rotate: [0, 360],
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                    scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                }}
            />

            {/* Optimized floating code symbols */}
            <div className="absolute inset-0">
                {codeSymbols.map(({ symbol, x, y }, i) => (
                    <motion.div
                        key={symbol}
                        className="absolute text-accent/8 font-mono text-lg font-bold"
                        style={{
                            left: `${x}%`,
                            top: `${y}%`,
                        }}
                        animate={{
                            y: [0, -15, 0],
                            opacity: [0.08, 0.2, 0.08],
                        }}
                        transition={{
                            duration: 6 + i,
                            repeat: Infinity,
                            delay: i * 1.5,
                            ease: "easeInOut",
                        }}
                    >
                        {symbol}
                    </motion.div>
                ))}
            </div>

            {/* Simplified ambient light */}
            <motion.div
                className="absolute inset-0"
                style={{
                    background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(16, 185, 129, 0.04) 0%, transparent 50%)`,
                }}
                animate={{
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
};

export default OptimizedDarkBackground;