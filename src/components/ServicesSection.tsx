import { motion } from "framer-motion";
import { Monitor, Smartphone, Server, Database, Palette, Zap } from "lucide-react";

const ServicesSection = () => {
    const services = [
        {
            icon: Monitor,
            title: "Développement Web",
            description: "Applications web modernes et responsives avec React, Next.js, et les dernières technologies frontend.",
            features: ["SPA & PWA", "SEO Optimisé", "Performance", "Responsive Design"],
            color: "from-blue-500 to-cyan-500",
            delay: 0
        },
        {
            icon: Smartphone,
            title: "Applications Mobile",
            description: "Applications mobiles natives et cross-platform avec Flutter pour iOS et Android.",
            features: ["Cross-Platform", "UI/UX Native", "Performance", "App Store Ready"],
            color: "from-purple-500 to-pink-500",
            delay: 0.1
        },
        {
            icon: Server,
            title: "Backend & API",
            description: "APIs robustes et scalables avec Node.js, Laravel, et architectures microservices.",
            features: ["REST & GraphQL", "Microservices", "Sécurité", "Documentation"],
            color: "from-green-500 to-emerald-500",
            delay: 0.2
        },
        {
            icon: Database,
            title: "Base de Données",
            description: "Conception et optimisation de bases de données relationnelles et NoSQL.",
            features: ["MySQL & PostgreSQL", "MongoDB", "Optimisation", "Migration"],
            color: "from-orange-500 to-red-500",
            delay: 0.3
        },
        {
            icon: Palette,
            title: "UI/UX Design",
            description: "Interfaces utilisateur intuitives et expériences utilisateur exceptionnelles.",
            features: ["Prototypage", "Design System", "Figma", "User Testing"],
            color: "from-pink-500 to-rose-500",
            delay: 0.4
        },
        {
            icon: Zap,
            title: "Optimisation",
            description: "Amélioration des performances et optimisation pour une expérience utilisateur fluide.",
            features: ["Performance", "SEO", "Accessibilité", "Analytics"],
            color: "from-yellow-500 to-orange-500",
            delay: 0.5
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    return (
        <section className="py-20 bg-gradient-to-br from-base-200 to-base-300 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-20 right-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
                <motion.div
                    className="absolute bottom-20 left-20 w-48 h-48 bg-primary/5 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 0.7, 1],
                        rotate: [360, 180, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
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
                        Mes <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Services</span>
                    </h2>
                    <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
                        Des solutions complètes pour transformer vos idées en réalité numérique. 
                        De la conception à la mise en production, je vous accompagne à chaque étape.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group relative"
                            whileHover={{ y: -10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="relative h-full p-8 bg-base-100 rounded-2xl shadow-lg border border-base-300 overflow-hidden">
                                {/* Animated background */}
                                <motion.div
                                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                                />
                                
                                {/* Floating particles */}
                                <div className="absolute inset-0 overflow-hidden">
                                    {[...Array(4)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className={`absolute w-1 h-1 bg-gradient-to-r ${service.color} rounded-full opacity-30`}
                                            animate={{
                                                y: [0, -30, 0],
                                                x: [0, 15, 0],
                                                scale: [1, 2, 1],
                                            }}
                                            transition={{
                                                duration: 4 + i,
                                                repeat: Infinity,
                                                delay: i * 0.7,
                                                ease: "easeInOut"
                                            }}
                                            style={{
                                                left: `${15 + i * 25}%`,
                                                top: `${20 + i * 15}%`,
                                            }}
                                        />
                                    ))}
                                </div>

                                {/* Icon */}
                                <motion.div
                                    className={`relative w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}
                                    whileHover={{ 
                                        rotate: [0, -10, 10, 0],
                                        scale: 1.1 
                                    }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <service.icon className="w-8 h-8 text-white" />
                                </motion.div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold text-base-content mb-4 group-hover:text-accent transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    
                                    <p className="text-base-content/70 mb-6 leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <div className="space-y-2">
                                        {service.features.map((feature, featureIndex) => (
                                            <motion.div
                                                key={featureIndex}
                                                className="flex items-center text-sm text-base-content/60"
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: service.delay + featureIndex * 0.1 }}
                                                viewport={{ once: true }}
                                            >
                                                <motion.div
                                                    className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3`}
                                                    animate={{
                                                        scale: [1, 1.3, 1],
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        delay: featureIndex * 0.2,
                                                    }}
                                                />
                                                {feature}
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Hover border effect */}
                                <motion.div
                                    className="absolute inset-0 rounded-2xl border-2 border-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{
                                        background: `linear-gradient(white, white) padding-box, linear-gradient(45deg, var(--accent), var(--primary)) border-box`,
                                    }}
                                />

                                {/* Shine effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                                    animate={{
                                        x: ["-100%", "100%"],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        repeatDelay: 3,
                                    }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Call to action */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-base-content mb-4">
                            Prêt à démarrer votre projet ?
                        </h3>
                        <p className="text-base-content/70 mb-8">
                            Discutons de vos besoins et créons ensemble une solution sur mesure 
                            qui dépasse vos attentes.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.a
                                href="mailto:pekpelignimdoukevin@gmail.com"
                                className="px-8 py-4 bg-gradient-to-r from-accent to-primary text-accent-content rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Démarrer un projet
                            </motion.a>
                            <motion.a
                                href="#Projects"
                                className="px-8 py-4 border-2 border-accent text-accent rounded-xl font-semibold hover:bg-accent hover:text-accent-content transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Voir mes réalisations
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSection;