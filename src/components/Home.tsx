import { Mail, Download, Github, Linkedin, Code, Sparkles, ArrowDown, Play, ExternalLink } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import img from '../assets/img.jpg';

const Home = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [currentRole, setCurrentRole] = useState(0);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 300], [0, -50]);
    const y2 = useTransform(scrollY, [0, 300], [0, -100]);

    const roles = [
        "Développeur Full-Stack",
        "Développeur Frontend", 
        "Développeur Backend",
        "Développeur Mobile"
    ];

    useEffect(() => {
        setIsLoaded(true);
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
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

    const floatingVariants = {
        animate: {
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <motion.section 
            id="Home" 
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-base-100 via-base-200/50 to-base-300/30"
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Geometric shapes */}
                <motion.div
                    className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
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
                    className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-primary/10 to-accent/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 0.8, 1],
                        x: [0, -30, 0],
                        y: [0, 20, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Code-like floating elements */}
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-accent/20 font-mono text-sm select-none"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                        }}
                        animate={{
                            y: [
                                Math.random() * window.innerHeight,
                                Math.random() * window.innerHeight - 100
                            ],
                            opacity: [0, 0.5, 0],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "linear"
                        }}
                    >
                        {['<div>', '</div>', '{...}', '( )', '[ ]', '< />'][Math.floor(Math.random() * 6)]}
                    </motion.div>
                ))}
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
                    {/* Content Section */}
                    <motion.div 
                        className="space-y-8 text-center lg:text-left"
                        style={{ y: y1 }}
                    >
                        {/* Greeting */}
                        <motion.div variants={itemVariants} className="space-y-2">
                            <motion.div
                                className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent font-medium"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                <Sparkles className="w-4 h-4" />
                                <span>Disponible pour de nouveaux projets</span>
                            </motion.div>
                            
                            <motion.p 
                                className="text-lg text-base-content/70"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                Bonjour, je suis
                            </motion.p>
                        </motion.div>

                        {/* Main Title */}
                        <motion.div variants={itemVariants} className="space-y-4">
                            <motion.h1 
                                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            >
                                <motion.span 
                                    className="block bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent font-black"
                                    animate={{
                                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                    style={{
                                        backgroundSize: "200% 200%"
                                    }}
                                >
                                    Kevin PEKPELI
                                </motion.span>
                            </motion.h1>

                            {/* Animated Role */}
                            <div className="h-16 flex items-center justify-center lg:justify-start">
                                <AnimatePresence mode="wait">
                                    <motion.h2
                                        key={currentRole}
                                        className="text-2xl md:text-3xl font-semibold text-accent"
                                        initial={{ opacity: 0, y: 20, rotateX: -90 }}
                                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                        exit={{ opacity: 0, y: -20, rotateX: 90 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {roles[currentRole]}
                                    </motion.h2>
                                </AnimatePresence>
                            </div>
                        </motion.div>

                        {/* Description */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <motion.p 
                                className="text-lg md:text-xl text-base-content/80 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 1 }}
                            >
                                Étudiant passionné en 2ème année à l'<span className="text-accent font-semibold">IAI-TOGO</span>, 
                                je transforme des idées en solutions numériques innovantes. Expert en développement 
                                <span className="text-accent font-semibold"> web moderne</span> et 
                                <span className="text-accent font-semibold"> applications mobiles</span>.
                            </motion.p>

                            {/* Tech Stack Preview */}
                            <motion.div 
                                className="flex flex-wrap gap-3 justify-center lg:justify-start"
                                variants={itemVariants}
                            >
                                {['React', 'Next.js', 'Laravel', 'Flutter', 'Node.js'].map((tech, index) => (
                                    <motion.span
                                        key={tech}
                                        className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium"
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 1.2 + index * 0.1 }}
                                        whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--a) / 0.2)" }}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div 
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start"
                        >
                            <motion.a 
                                href="mailto:pekpelignimdoukevin@gmail.com" 
                                className="group relative px-8 py-4 bg-accent text-accent-content rounded-xl font-semibold shadow-lg overflow-hidden"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-accent to-primary"
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: "0%" }}
                                    transition={{ duration: 0.3 }}
                                />
                                <span className="relative flex items-center gap-2">
                                    <Mail className="w-5 h-5" />
                                    Collaborons ensemble
                                </span>
                            </motion.a>
                            
                            <motion.button 
                                className="group px-8 py-4 border-2 border-accent text-accent rounded-xl font-semibold hover:bg-accent hover:text-accent-content transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="flex items-center gap-2">
                                    <Download className="w-5 h-5 group-hover:animate-bounce" />
                                    Télécharger CV
                                </span>
                            </motion.button>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div 
                            variants={itemVariants}
                            className="flex gap-4 items-center justify-center lg:justify-start pt-4"
                        >
                            {[
                                { icon: Github, href: "https://github.com/its-kevin228", label: "GitHub" },
                                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                                { icon: ExternalLink, href: "#Projects", label: "Portfolio" }
                            ].map(({ icon: Icon, href, label }, index) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    target={href.startsWith('http') ? "_blank" : undefined}
                                    rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
                                    className="group p-3 rounded-xl bg-base-200 hover:bg-accent hover:text-accent-content transition-all duration-300"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.5 + index * 0.1 }}
                                >
                                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Image Section */}
                    <motion.div 
                        className="relative flex justify-center lg:justify-end"
                        style={{ y: y2 }}
                        variants={itemVariants}
                    >
                        <div className="relative">
                            {/* Animated background rings */}
                            <motion.div
                                className="absolute inset-0 rounded-full"
                                animate={{
                                    rotate: [0, 360],
                                }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            >
                                <div className="absolute inset-0 rounded-full border-2 border-dashed border-accent/30" />
                                <div className="absolute inset-4 rounded-full border border-primary/20" />
                            </motion.div>

                            {/* Glowing background */}
                            <motion.div
                                className="absolute -inset-8 bg-gradient-to-r from-accent/20 via-primary/20 to-accent/20 rounded-full blur-2xl"
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.5, 0.8, 0.5],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                            
                            {/* Main image */}
                            <motion.div
                                className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden border-4 border-accent/30 shadow-2xl"
                                variants={floatingVariants}
                                animate="animate"
                                whileHover={{ 
                                    scale: 1.05,
                                    rotate: 5,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <motion.img 
                                    src={img} 
                                    alt="Kevin Pekpeli - Développeur Full-Stack" 
                                    className="w-full h-full object-cover"
                                    initial={{ scale: 1.2 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 1 }}
                                />
                                
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent" />
                            </motion.div>

                            {/* Floating tech icons */}
                            {[
                                { icon: "⚛️", position: "top-4 right-4", delay: 0 },
                                { icon: "🚀", position: "bottom-8 left-4", delay: 1 },
                                { icon: "💻", position: "top-1/3 -left-8", delay: 2 },
                                { icon: "📱", position: "bottom-1/3 -right-8", delay: 3 },
                            ].map(({ icon, position, delay }, index) => (
                                <motion.div
                                    key={index}
                                    className={`absolute ${position} w-12 h-12 bg-base-100 rounded-full flex items-center justify-center text-xl shadow-lg border border-accent/20`}
                                    initial={{ scale: 0, rotate: -180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ 
                                        delay: 2 + delay * 0.2,
                                        type: "spring",
                                        stiffness: 200 
                                    }}
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                >
                                    {icon}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div 
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.5 }}
                >
                    <motion.div
                        className="flex flex-col items-center gap-2 text-base-content/60"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <span className="text-sm font-medium">Découvrir</span>
                        <ArrowDown className="w-5 h-5" />
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Home;
