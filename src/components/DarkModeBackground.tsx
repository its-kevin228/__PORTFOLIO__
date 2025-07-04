import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ParticleField from "./ParticleField";
import CodeRain from "./CodeRain";

const DarkModeBackground = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX / window.innerWidth,
                y: e.clientY / window.innerHeight,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
            {/* Base gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-base-100 via-base-200 to-base-300" />
            
            {/* Code rain effect */}
            <CodeRain />
            
            {/* Particle field */}
            <ParticleField />
            
            {/* Animated gradient orbs */}
            <motion.div
                className="absolute w-96 h-96 rounded-full opacity-20"
                style={{
                    background: "radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%)",
                    left: `${mousePosition.x * 100}%`,
                    top: `${mousePosition.y * 100}%`,
                    transform: "translate(-50%, -50%)",
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute w-80 h-80 rounded-full opacity-15"
                style={{
                    background: "radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, transparent 70%)",
                    right: `${(1 - mousePosition.x) * 80}%`,
                    bottom: `${(1 - mousePosition.y) * 80}%`,
                }}
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.1, 0.25, 0.1],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
            />

            {/* Neural network connections */}
            <svg className="absolute inset-0 w-full h-full opacity-10">
                <defs>
                    <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(16, 185, 129, 0.4)" />
                        <stop offset="50%" stopColor="rgba(99, 102, 241, 0.4)" />
                        <stop offset="100%" stopColor="rgba(139, 92, 246, 0.4)" />
                    </linearGradient>
                </defs>
                
                {/* Animated connection lines */}
                {[...Array(8)].map((_, i) => (
                    <motion.line
                        key={i}
                        x1={`${10 + i * 12}%`}
                        y1={`${20 + i * 8}%`}
                        x2={`${30 + i * 10}%`}
                        y2={`${40 + i * 6}%`}
                        stroke="url(#connectionGradient)"
                        strokeWidth="1"
                        opacity="0.3"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: [0, 1, 0] }}
                        transition={{
                            duration: 3 + i * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.3,
                        }}
                    />
                ))}
            </svg>

            {/* Glowing constellation nodes */}
            <div className="absolute inset-0">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full"
                        style={{
                            width: `${2 + Math.random() * 4}px`,
                            height: `${2 + Math.random() * 4}px`,
                            background: "radial-gradient(circle, rgba(16, 185, 129, 0.8) 0%, transparent 70%)",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            boxShadow: "0 0 10px rgba(16, 185, 129, 0.5)",
                        }}
                        animate={{
                            opacity: [0.2, 1, 0.2],
                            scale: [0.5, 1.5, 0.5],
                        }}
                        transition={{
                            duration: 2 + Math.random() * 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* Geometric patterns */}
            <div className="absolute inset-0 opacity-5">
                <motion.div
                    className="absolute w-64 h-64 border border-accent/30"
                    style={{ 
                        left: "5%", 
                        top: "10%",
                        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"
                    }}
                    animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                        scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                    }}
                />
                
                <motion.div
                    className="absolute w-48 h-48 border-2 border-primary/20 rounded-full"
                    style={{ right: "10%", top: "30%" }}
                    animate={{
                        rotate: [0, -360],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                        scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    }}
                />

                <motion.div
                    className="absolute w-32 h-32 border border-secondary/25"
                    style={{ 
                        left: "60%", 
                        bottom: "20%",
                        transform: "rotate(45deg)"
                    }}
                    animate={{
                        rotate: [45, 405],
                        opacity: [0.1, 0.4, 0.1],
                    }}
                    transition={{
                        rotate: { duration: 18, repeat: Infinity, ease: "linear" },
                        opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    }}
                />
            </div>

            {/* Subtle grid overlay */}
            <div 
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Ambient light following mouse */}
            <motion.div
                className="absolute inset-0"
                style={{
                    background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(16, 185, 129, 0.08) 0%, transparent 50%)`,
                }}
                animate={{
                    opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Floating code symbols */}
            <div className="absolute inset-0">
                {['</', '/>', '{}', '[]', '()', '=>', '&&', '||'].map((symbol, i) => (
                    <motion.div
                        key={symbol}
                        className="absolute text-accent/10 font-mono text-lg font-bold"
                        style={{
                            left: `${10 + i * 11}%`,
                            top: `${15 + i * 9}%`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.1, 0.3, 0.1],
                            rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                            duration: 4 + Math.random() * 2,
                            repeat: Infinity,
                            delay: i * 0.5,
                            ease: "easeInOut",
                        }}
                    >
                        {symbol}
                    </motion.div>
                ))}
            </div>

            {/* Subtle noise texture */}
            <div 
                className="absolute inset-0 opacity-[0.01] mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />
        </div>
    );
};

export default DarkModeBackground;