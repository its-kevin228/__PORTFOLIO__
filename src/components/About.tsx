import Title from "./Title";
import img from "../assets/img.jpg";
import { Component, SendToBack, Code, Smartphone, Database, Globe, Award, Target, Zap, Heart, Star, TrendingUp } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const aboutSections = [
    {
        id: 1,
        title: "Développeur Frontend",
        description: `Passionné par la création d'interfaces utilisateur modernes et intuitives. J'utilise les dernières technologies comme React, Next.js et TypeScript pour créer des expériences web exceptionnelles qui captivent et convertissent.`,
        icon: <Component className="text-accent w-8 h-8" />,
        skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
        color: "from-blue-500 to-cyan-500",
        projects: "8+ projets"
    },
    {
        id: 2,
        title: "Développeur Backend",
        description: `Expert dans la conception d'architectures robustes et scalables. Je développe des APIs performantes et sécurisées avec Node.js, Laravel et des bases de données optimisées pour supporter la croissance de vos applications.`,
        icon: <SendToBack className="text-accent w-8 h-8" />,
        skills: ["Node.js", "Laravel", "Express", "MongoDB"],
        color: "from-green-500 to-emerald-500",
        projects: "5+ projets"
    },
    {
        id: 3,
        title: "Développeur Mobile",
        description: `Spécialisé dans le développement d'applications mobiles cross-platform avec Flutter. Je crée des apps natives performantes qui offrent une expérience utilisateur fluide sur iOS et Android.`,
        icon: <Smartphone className="text-accent w-8 h-8" />,
        skills: ["Flutter", "Dart", "Firebase", "REST APIs"],
        color: "from-purple-500 to-pink-500",
        projects: "3+ projets"
    }
];

const stats = [
    { 
        label: "Projets réalisés", 
        value: "15+", 
        icon: <Code className="w-6 h-6" />,
        color: "from-blue-500 to-cyan-500",
        description: "Applications complètes"
    },
    { 
        label: "Technologies maîtrisées", 
        value: "12+", 
        icon: <Database className="w-6 h-6" />,
        color: "from-green-500 to-emerald-500",
        description: "Stack technique moderne"
    },
    { 
        label: "Années d'expérience", 
        value: "2+", 
        icon: <Globe className="w-6 h-6" />,
        color: "from-purple-500 to-pink-500",
        description: "Développement continu"
    },
    { 
        label: "Satisfaction client", 
        value: "100%", 
        icon: <Star className="w-6 h-6" />,
        color: "from-yellow-500 to-orange-500",
        description: "Projets livrés avec succès"
    },
];

const values = [
    {
        icon: <Target className="w-6 h-6" />,
        title: "Précision",
        description: "Chaque ligne de code est pensée pour la performance et la maintenabilité"
    },
    {
        icon: <Zap className="w-6 h-6" />,
        title: "Innovation",
        description: "Toujours à l'affût des dernières technologies et meilleures pratiques"
    },
    {
        icon: <Heart className="w-6 h-6" />,
        title: "Passion",
        description: "Le développement est ma passion, chaque projet est un nouveau défi"
    },
    {
        icon: <TrendingUp className="w-6 h-6" />,
        title: "Évolution",
        description: "Apprentissage continu pour rester à la pointe de la technologie"
    }
];

// Composant pour les compteurs animés
const AnimatedCounter = ({ value, duration = 2 }: { value: string; duration?: number }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    
    const numericValue = parseInt(value.replace(/\D/g, ''));
    
    useEffect(() => {
        if (!isInView) return;
        
        let startTime: number;
        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
            
            setCount(Math.floor(progress * numericValue));
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        
        requestAnimationFrame(animate);
    }, [isInView, numericValue, duration]);
    
    return <span ref={ref}>{count}{value.replace(/\d/g, '')}</span>;
};

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 24
            }
        }
    };

    return (
        <section className="bg-gradient-to-br from-base-200 to-base-300 py-20 relative overflow-hidden" id="About">
            {/* Background decorations */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-20 left-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-20 w-48 h-48 bg-primary/5 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 0.7, 1],
                        x: [0, -30, 0],
                        y: [0, 20, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <div className="container mx-auto px-6 md:px-20 relative z-10">
                <Title title="À propos de moi" />
                
                {/* Hero Introduction */}
                <motion.div 
                    className="text-center mb-16 max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.h2 
                        className="text-3xl md:text-4xl font-bold text-base-content mb-6"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Transformons vos <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">idées</span> en réalité numérique
                    </motion.h2>
                    <motion.p 
                        className="text-xl text-base-content/80 leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Étudiant passionné à l'<span className="text-accent font-semibold">IAI-TOGO</span>, je combine créativité et expertise technique 
                        pour créer des solutions numériques qui marquent la différence. Chaque projet est une opportunité 
                        d'innover et de dépasser les attentes.
                    </motion.p>
                </motion.div>

                {/* Enhanced Stats Section */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="relative bg-base-100 p-6 rounded-2xl shadow-lg text-center group hover:shadow-2xl transition-all duration-500 overflow-hidden"
                            whileHover={{ scale: 1.05, y: -5 }}
                        >
                            {/* Background gradient */}
                            <motion.div
                                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                            />
                            
                            {/* Floating particles */}
                            <div className="absolute inset-0 overflow-hidden">
                                {[...Array(3)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className={`absolute w-1 h-1 bg-gradient-to-r ${stat.color} rounded-full opacity-30`}
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

                            <div className="relative z-10">
                                <motion.div
                                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <div className="text-white">
                                        {stat.icon}
                                    </div>
                                </motion.div>
                                <h3 className={`text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                                    <AnimatedCounter value={stat.value} />
                                </h3>
                                <p className="text-base-content font-semibold mb-1">{stat.label}</p>
                                <p className="text-sm text-base-content/60">{stat.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Values Section */}
                <motion.div 
                    className="mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-center text-base-content mb-12">
                        Mes <span className="text-accent">valeurs</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                className="text-center p-6 bg-base-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <motion.div
                                    className="w-12 h-12 mx-auto mb-4 bg-accent/10 rounded-xl flex items-center justify-center text-accent"
                                    whileHover={{ rotate: 10, scale: 1.1 }}
                                >
                                    {value.icon}
                                </motion.div>
                                <h4 className="text-lg font-semibold text-base-content mb-2">{value.title}</h4>
                                <p className="text-sm text-base-content/70">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Enhanced Image Section */}
                    <motion.div 
                        className="relative"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative">
                            {/* Multiple background layers */}
                            <motion.div
                                className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl blur-xl"
                                animate={{
                                    scale: [1, 1.08, 1],
                                    rotate: [0, 3, -3, 0],
                                    opacity: [0.3, 0.6, 0.3],
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                            
                            <motion.div
                                className="absolute -inset-6 bg-gradient-to-l from-primary/10 to-accent/10 rounded-3xl blur-2xl"
                                animate={{
                                    scale: [1, 1.1, 1],
                                    rotate: [0, -2, 2, 0],
                                }}
                                transition={{
                                    duration: 12,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 2
                                }}
                            />
                            
                            <motion.img
                                src={img}
                                alt="Kevin Pekpeli - Développeur"
                                className="relative w-full max-w-md mx-auto object-cover rounded-3xl shadow-2xl border-4 border-accent/20"
                                whileHover={{ scale: 1.02, rotate: 2 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            />

                            {/* Floating badges */}
                            <motion.div
                                className="absolute -top-4 -right-4 bg-accent text-accent-content px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                🚀 Innovateur
                            </motion.div>
                            
                            <motion.div
                                className="absolute -bottom-4 -left-4 bg-primary text-primary-content px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                            >
                                💻 Développeur
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Enhanced Skills Section */}
                    <motion.div 
                        className="space-y-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div variants={itemVariants} className="mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-6">
                                Expertise <span className="text-accent">technique</span>
                            </h2>
                            <p className="text-lg text-base-content/80 leading-relaxed">
                                Spécialisé dans le développement full-stack moderne, je maîtrise l'ensemble 
                                de la chaîne de création d'applications, du concept à la mise en production.
                            </p>
                        </motion.div>

                        {aboutSections.map((section, index) => (
                            <motion.div
                                key={section.id}
                                variants={itemVariants}
                                className="relative bg-base-100 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden"
                                whileHover={{ scale: 1.02, x: 10 }}
                            >
                                {/* Background gradient */}
                                <motion.div
                                    className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                                />

                                <div className="relative z-10 flex items-start space-x-4">
                                    {/* Enhanced Icon */}
                                    <motion.div 
                                        className={`flex-shrink-0 p-3 bg-gradient-to-br ${section.color} rounded-xl text-white shadow-lg`}
                                        whileHover={{ rotate: 10, scale: 1.1 }}
                                    >
                                        {section.icon}
                                    </motion.div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-3">
                                            <h3 className="text-xl font-bold text-base-content group-hover:text-accent transition-colors duration-300">
                                                {section.title}
                                            </h3>
                                            <span className="text-sm text-accent font-medium bg-accent/10 px-2 py-1 rounded-full">
                                                {section.projects}
                                            </span>
                                        </div>
                                        
                                        <p className="text-base-content/80 mb-4 leading-relaxed">
                                            {section.description}
                                        </p>
                                        
                                        {/* Enhanced Skills */}
                                        <div className="flex flex-wrap gap-2">
                                            {section.skills.map((skill, skillIndex) => (
                                                <motion.span
                                                    key={skillIndex}
                                                    className={`px-3 py-1 bg-gradient-to-r ${section.color} text-white text-sm rounded-full font-medium shadow-sm`}
                                                    initial={{ opacity: 0, scale: 0 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: skillIndex * 0.1 }}
                                                    viewport={{ once: true }}
                                                    whileHover={{ scale: 1.1 }}
                                                >
                                                    {skill}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Call to Action */}
                <motion.div 
                    className="text-center mt-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold text-base-content mb-4">
                        Prêt à créer quelque chose d'extraordinaire ?
                    </h3>
                    <p className="text-base-content/70 mb-8 max-w-2xl mx-auto">
                        Collaborons pour transformer vos idées en solutions numériques innovantes 
                        qui feront la différence sur le marché.
                    </p>
                    <motion.a
                        href="#ContactSection"
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent to-primary text-accent-content rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Discutons de votre projet
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

export default About;
