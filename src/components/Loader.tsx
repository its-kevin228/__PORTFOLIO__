import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Loader = () => {
    const [currentMessage, setCurrentMessage] = useState(0);
    
    const loadingMessages = [
        "Compilation du café en cours...",
        "Débogage des rêves...",
        "Optimisation des pixels...",
        "Chargement de l'inspiration...",
        "Synchronisation des neurones...",
        "Téléchargement de la créativité...",
        "Initialisation du génie...",
        "Assemblage du code magique...",
        "Calibrage de l'excellence...",
        "Finalisation de l'art numérique..."
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMessage((prev) => (prev + 1) % loadingMessages.length);
        }, 1500);

        return () => clearInterval(interval);
    }, [loadingMessages.length]);

    const codeLines = [
        "const developer = new Genius();",
        "if (coffee.isEmpty()) refill();",
        "while (bugs.exist()) fix();",
        "function createMagic() { ... }",
        "// TODO: Dominer le monde",
        "git commit -m 'feat: awesome'",
    ];

    return (
        <motion.div
            className="fixed inset-0 bg-gradient-to-br from-base-100 via-base-200 to-base-300 flex items-center justify-center z-[10000]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Background animated elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Floating code snippets */}
                {codeLines.map((line, index) => (
                    <motion.div
                        key={index}
                        className="absolute text-accent/20 font-mono text-sm md:text-base pointer-events-none"
                        style={{
                            left: `${10 + (index * 15)}%`,
                            top: `${20 + (index * 10)}%`,
                        }}
                        animate={{
                            x: [0, 50, -30, 0],
                            y: [0, -20, 30, 0],
                            opacity: [0, 0.3, 0.1, 0]
                        }}
                        transition={{
                            duration: 8 + Math.random() * 4,
                            repeat: Infinity,
                            ease: "linear",
                            delay: index * 0.5
                        }}
                    >
                        {line}
                    </motion.div>
                ))}

                {/* Animated particles */}
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-accent/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 0.6, 0],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 text-center max-w-md mx-auto px-6">
                {/* Main loader animation */}
                <motion.div
                    className="mb-8"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                    {/* Animated laptop/code icon */}
                    <div className="relative mx-auto w-24 h-24 mb-6">
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-accent to-primary rounded-2xl"
                            animate={{
                                rotate: [0, 360],
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                            }}
                        />
                        <motion.div
                            className="absolute inset-2 bg-base-100 rounded-xl flex items-center justify-center"
                            animate={{
                                rotate: [0, -360],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        >
                            <motion.span
                                className="text-2xl font-mono font-bold text-accent"
                                animate={{
                                    opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                &lt;/&gt;
                            </motion.span>
                        </motion.div>
                    </div>

                    {/* Animated progress bar */}
                    <div className="w-full bg-base-300 rounded-full h-2 mb-6 overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-accent to-primary rounded-full"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </div>

                    {/* Loading dots */}
                    <div className="flex justify-center space-x-2 mb-6">
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="w-3 h-3 bg-accent rounded-full"
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    delay: i * 0.2,
                                    ease: "easeInOut"
                                }}
                            />
                        ))}
                    </div>
                </motion.div>

                {/* Loading message */}
                <motion.div
                    key={currentMessage}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-base-content mb-2">
                        Chargement en cours...
                    </h2>
                    <p className="text-base-content/70 font-mono text-sm md:text-base">
                        {loadingMessages[currentMessage]}
                    </p>
                </motion.div>

                {/* Animated keyboard */}
                <motion.div
                    className="mt-8 flex justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <div className="flex space-x-1">
                        {[...Array(8)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="w-3 h-3 bg-base-content/20 rounded-sm"
                                animate={{
                                    backgroundColor: [
                                        "rgba(var(--bc), 0.2)",
                                        "rgba(var(--ac), 0.8)",
                                        "rgba(var(--bc), 0.2)"
                                    ],
                                }}
                                transition={{
                                    duration: 0.3,
                                    repeat: Infinity,
                                    delay: i * 0.1,
                                    repeatDelay: 2
                                }}
                            />
                        ))}
                    </div>
                </motion.div>

                {/* Fun fact */}
                <motion.p
                    className="mt-6 text-xs text-base-content/50 font-mono"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                >
                    Fun fact: Les développeurs boivent en moyenne 4 cafés par jour ☕
                </motion.p>
            </div>
        </motion.div>
    );
};

export default Loader;