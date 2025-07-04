import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Code, Users, Coffee, Award } from "lucide-react";

const StatsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const stats = [
        {
            icon: Code,
            value: 15,
            suffix: "+",
            label: "Projets Réalisés",
            color: "from-blue-500 to-cyan-500",
            description: "Applications web et mobile"
        },
        {
            icon: Users,
            value: 8,
            suffix: "+",
            label: "Clients Satisfaits",
            color: "from-purple-500 to-pink-500",
            description: "Projets livrés avec succès"
        },
        {
            icon: Coffee,
            value: 500,
            suffix: "+",
            label: "Heures de Code",
            color: "from-orange-500 to-red-500",
            description: "Passion et dévouement"
        },
        {
            icon: Award,
            value: 12,
            suffix: "+",
            label: "Technologies",
            color: "from-green-500 to-emerald-500",
            description: "Stack technique maîtrisé"
        }
    ];

    const AnimatedCounter = ({ value, suffix, duration = 2 }: { value: number; suffix: string; duration?: number }) => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            if (!isInView) return;

            let startTime: number;
            const animate = (currentTime: number) => {
                if (!startTime) startTime = currentTime;
                const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
                
                setCount(Math.floor(progress * value));
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };
            
            requestAnimationFrame(animate);
        }, [isInView, value, duration]);

        return <span>{count}{suffix}</span>;
    };

    return (
        <section ref={ref} className="py-20 bg-gradient-to-br from-base-100 to-base-200 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-10 left-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 30, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-10 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 0.8, 1],
                        x: [0, -20, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Quelques <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Chiffres</span>
                    </h2>
                    <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
                        Des résultats concrets qui témoignent de mon engagement et de ma passion pour le développement
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="relative group"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                        >
                            {/* Card background */}
                            <div className="relative p-8 bg-base-100 rounded-2xl shadow-lg border border-base-300 overflow-hidden">
                                {/* Animated background gradient */}
                                <motion.div
                                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                                />
                                
                                {/* Floating particles */}
                                <div className="absolute inset-0 overflow-hidden">
                                    {[...Array(3)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className={`absolute w-2 h-2 bg-gradient-to-r ${stat.color} rounded-full opacity-20`}
                                            animate={{
                                                y: [0, -20, 0],
                                                x: [0, 10, 0],
                                                scale: [1, 1.5, 1],
                                            }}
                                            transition={{
                                                duration: 3 + i,
                                                repeat: Infinity,
                                                delay: i * 0.5,
                                                ease: "easeInOut"
                                            }}
                                            style={{
                                                left: `${20 + i * 30}%`,
                                                top: `${30 + i * 20}%`,
                                            }}
                                        />
                                    ))}
                                </div>

                                {/* Icon */}
                                <motion.div
                                    className={`relative w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <stat.icon className="w-8 h-8 text-white" />
                                </motion.div>

                                {/* Number */}
                                <motion.div
                                    className="text-center mb-4"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                                    viewport={{ once: true }}
                                >
                                    <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                    </div>
                                </motion.div>

                                {/* Label */}
                                <div className="text-center">
                                    <h3 className="text-xl font-semibold text-base-content mb-2">
                                        {stat.label}
                                    </h3>
                                    <p className="text-sm text-base-content/60">
                                        {stat.description}
                                    </p>
                                </div>

                                {/* Hover effect border */}
                                <motion.div
                                    className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                                    style={{
                                        background: `linear-gradient(white, white) padding-box, linear-gradient(45deg, transparent, var(--accent), transparent) border-box`,
                                    }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to action */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <p className="text-lg text-base-content/70 mb-6">
                        Prêt à créer quelque chose d'extraordinaire ensemble ?
                    </p>
                    <motion.a
                        href="#Projects"
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent to-primary text-accent-content rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Voir mes réalisations
                        <motion.span
                            className="ml-2"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            →
                        </motion.span>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default StatsSection;