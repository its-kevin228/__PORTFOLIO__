import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import Title from "./Title";

import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgNEXT from "../assets/techno/next-js.webp";
import imgNODE from "../assets/techno/node-js.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgPRISMA from "../assets/techno/prisma.webp";
import imgFIGMA from "../assets/techno/figma.jpg";
import imgFIREBASE from "../assets/techno/firebase.jpg";
import imgGITLAB from "../assets/techno/gitlab.jpg";
import imgLARAVEL from "../assets/techno/laravel.jpg";
import imgFLUTTER from "../assets/techno/flutter.jpg";
import imgMONGODB from "../assets/techno/mongodb.jpg";
import imgGITHUB from "../assets/techno/github.jpg";
import imgVUE from "../assets/techno/vue.svg";
import imgSPRING from "../assets/techno/spring.svg";
import imgFAST from "../assets/techno/fastapi.svg";
import imgEXPRESS from "../assets/techno/express.svg";

const skillCategories = [
    {
        title: "Frontend",
        color: "from-blue-500 to-purple-600",
        skills: [
            { id: 1, name: "HTML", image: imgHTML, level: 90, color: "#E34F26" },
            { id: 2, name: "CSS", image: imgCSS, level: 85, color: "#1572B6" },
            { id: 3, name: "JavaScript", image: imgJS, level: 88, color: "#F7DF1E" },
            { id: 4, name: "React", image: imgREACT, level: 85, color: "#61DAFB" },
            { id: 17, name: "Vue.js", image: imgVUE, level: 75, color: "#4FC08D" },
            { id: 7, name: "TypeScript", image: imgTYPE, level: 80, color: "#3178C6" },
            { id: 6, name: "Tailwind CSS", image: imgTAILWIND, level: 90, color: "#06B6D4" },
            { id: 8, name: "Next.js", image: imgNEXT, level: 75, color: "#000000" },
        ]
    },
    {
        title: "Backend",
        color: "from-green-500 to-teal-600",
        skills: [
            { id: 5, name: "Node.js", image: imgNODE, level: 80, color: "#339933" },
            { id: 18, name: "Express.js", image: imgEXPRESS, level: 82, color: "#68A063" },
            { id: 13, name: "Laravel", image: imgLARAVEL, level: 85, color: "#FF2D20" },
            { id: 19, name: "Spring Boot", image: imgSPRING, level: 70, color: "#6DB33F" },
            { id: 20, name: "FastAPI", image: imgFAST, level: 75, color: "#009688" },
            { id: 9, name: "Prisma", image: imgPRISMA, level: 70, color: "#2D3748" },
            { id: 15, name: "MongoDB", image: imgMONGODB, level: 75, color: "#47A248" },
            { id: 11, name: "Firebase", image: imgFIREBASE, level: 80, color: "#FFCA28" },
        ]
    },
    {
        title: "Mobile & Outils",
        color: "from-pink-500 to-red-600",
        skills: [
            { id: 14, name: "Flutter", image: imgFLUTTER, level: 75, color: "#02569B" },
            { id: 10, name: "Figma", image: imgFIGMA, level: 85, color: "#F24E1E" },
            { id: 16, name: "GitHub", image: imgGITHUB, level: 90, color: "#181717" },
            { id: 12, name: "GitLab", image: imgGITLAB, level: 80, color: "#FC6D26" },
        ]
    }
];

// Composant pour les particules flottantes
const FloatingParticles = () => {
    const particles = Array.from({ length: 20 }, (_, i) => i);
    
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle) => (
                <motion.div
                    key={particle}
                    className="absolute w-2 h-2 bg-accent/20 rounded-full"
                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                    }}
                    animate={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    );
};

const Technologies = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.15
            }
        }
    };

    const categoryVariants = {
        hidden: { 
            y: 50, 
            opacity: 0,
            scale: 0.8
        },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 24,
                staggerChildren: 0.1
            }
        }
    };

    const skillVariants = {
        hidden: { 
            scale: 0, 
            opacity: 0,
            rotateY: 180
        },
        visible: (custom) => ({
            scale: 1,
            opacity: 1,
            rotateY: 0,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 25,
                delay: custom * 0.1
            }
        })
    };

    const titleVariants = {
        hidden: { 
            opacity: 0, 
            y: -30,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
            }
        }
    };

    return (
        <section ref={ref} id="Technologies" className="relative py-20 bg-gradient-to-br from-base-100 via-base-200 to-base-300 overflow-hidden">
            {/* Particules flottantes */}
            <FloatingParticles />
            
            {/* Background animated shapes */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-20 left-10 w-32 h-32 bg-accent/5 rounded-full blur-xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-40 h-40 bg-primary/5 rounded-full blur-xl"
                    animate={{
                        scale: [1, 0.8, 1],
                        x: [0, -30, 0],
                        y: [0, 20, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <Title title="Technologies & Compétences" />
                
                <motion.div 
                    className="space-y-20"
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                >
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            variants={categoryVariants}
                            className="relative"
                        >
                            {/* Category header with animated background */}
                            <motion.div 
                                className="text-center mb-12 relative"
                                variants={titleVariants}
                            >
                                <motion.div
                                    className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-10 rounded-3xl blur-xl`}
                                    animate={{
                                        scale: [1, 1.1, 1],
                                        opacity: [0.1, 0.2, 0.1],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                                <motion.h3 
                                    className={`relative text-3xl md:text-4xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    {category.title}
                                </motion.h3>
                                
                                {/* Decorative line */}
                                <motion.div
                                    className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-accent to-primary rounded-full"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: 96 }}
                                    transition={{ duration: 1, delay: categoryIndex * 0.2 }}
                                    viewport={{ once: true }}
                                />
                            </motion.div>
                            
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-8 justify-items-center">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.id}
                                        variants={skillVariants}
                                        custom={skillIndex}
                                        className="group relative cursor-pointer"
                                        whileHover={{ 
                                            scale: 1.15,
                                            rotateY: 10,
                                            z: 50
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <div className="relative">
                                            {/* Multiple animated backgrounds */}
                                            <motion.div
                                                className="absolute -inset-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                                style={{
                                                    background: `conic-gradient(from 0deg, ${skill.color}20, transparent, ${skill.color}20)`
                                                }}
                                                animate={{
                                                    rotate: [0, 360],
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    ease: "linear"
                                                }}
                                            />
                                            
                                            <motion.div
                                                className="absolute -inset-2 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                animate={{
                                                    scale: [1, 1.2, 1],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                            />
                                            
                                            {/* Skill icon container */}
                                            <motion.div 
                                                className="relative w-24 h-24 md:w-28 md:h-28 p-4 bg-base-100 rounded-3xl shadow-xl border-2 border-accent/20 group-hover:border-accent/50 transition-all duration-500 overflow-hidden backdrop-blur-sm"
                                                whileHover={{ 
                                                    boxShadow: `0 25px 50px ${skill.color}30`,
                                                    borderColor: skill.color,
                                                    backgroundColor: `${skill.color}10`
                                                }}
                                                animate={{
                                                    y: [0, -5, 0],
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                    delay: skillIndex * 0.2
                                                }}
                                            >
                                                {/* Shimmer effect */}
                                                <motion.div
                                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                                                    animate={{
                                                        x: ["-100%", "100%"],
                                                    }}
                                                    transition={{
                                                        duration: 1.5,
                                                        repeat: Infinity,
                                                        repeatDelay: 2,
                                                    }}
                                                />
                                                
                                                <motion.img
                                                    src={skill.image}
                                                    alt={skill.name}
                                                    className="w-full h-full object-contain relative z-10"
                                                    whileHover={{ 
                                                        scale: 1.2,
                                                        rotate: [0, -5, 5, 0],
                                                        filter: "drop-shadow(0 0 20px rgba(0,0,0,0.3))"
                                                    }}
                                                    transition={{ 
                                                        type: "spring", 
                                                        stiffness: 400,
                                                        damping: 10
                                                    }}
                                                />
                                                
                                                {/* Skill level indicator with animation */}
                                                <motion.div
                                                    className="absolute bottom-0 left-0 right-0 h-2 bg-base-200 rounded-full overflow-hidden"
                                                    initial={{ opacity: 0 }}
                                                    whileInView={{ opacity: 1 }}
                                                    transition={{ delay: skillIndex * 0.1 + 0.5 }}
                                                    viewport={{ once: true }}
                                                >
                                                    <motion.div
                                                        className="h-full rounded-full"
                                                        style={{ backgroundColor: skill.color }}
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${skill.level}%` }}
                                                        transition={{ 
                                                            duration: 1.5, 
                                                            delay: skillIndex * 0.1 + 0.8,
                                                            ease: "easeOut"
                                                        }}
                                                        viewport={{ once: true }}
                                                    />
                                                </motion.div>
                                            </motion.div>
                                        </div>
                                        
                                        {/* Skill name with typewriter effect */}
                                        <motion.div 
                                            className="mt-4 text-center"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ delay: skillIndex * 0.1 + 1 }}
                                            viewport={{ once: true }}
                                        >
                                            <motion.span 
                                                className="block text-sm md:text-base font-semibold text-base-content group-hover:text-accent transition-colors duration-300"
                                                whileHover={{ scale: 1.1 }}
                                            >
                                                {skill.name}
                                            </motion.span>
                                            
                                            <motion.span 
                                                className="block text-xs text-base-content/60 mt-1"
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ delay: skillIndex * 0.1 + 1.2 }}
                                                viewport={{ once: true }}
                                            >
                                                {skill.level}% maîtrisé
                                            </motion.span>
                                        </motion.div>
                                        
                                        {/* Enhanced tooltip */}
                                        <motion.div
                                            className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-base-content text-base-100 px-4 py-2 rounded-xl text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-20 shadow-xl"
                                            style={{ backgroundColor: skill.color }}
                                            initial={{ y: 10, opacity: 0, scale: 0.8 }}
                                            whileHover={{ y: 0, opacity: 1, scale: 1 }}
                                            transition={{ type: "spring", stiffness: 400 }}
                                        >
                                            <div className="flex items-center space-x-2">
                                                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                                                <span>{skill.level}% de maîtrise</span>
                                            </div>
                                            <div 
                                                className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent"
                                                style={{ borderTopColor: skill.color }}
                                            />
                                        </motion.div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                
                {/* Enhanced call to action */}
                <motion.div 
                    className="text-center mt-20 relative"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/10 rounded-3xl blur-xl"
                        animate={{
                            scale: [1, 1.05, 1],
                            opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    
                    <div className="relative z-10 p-8">
                        <motion.p 
                            className="text-xl text-base-content/80 mb-8 font-medium"
                            animate={{
                                y: [0, -5, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            Toujours en apprentissage et ouvert aux nouvelles technologies !
                        </motion.p>
                        
                        <motion.div
                            className="inline-flex items-center space-x-3 text-accent font-bold text-lg cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            animate={{
                                x: [0, 10, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <span>Découvrez mes projets</span>
                            <motion.span
                                className="text-2xl"
                                animate={{ 
                                    x: [0, 10, 0],
                                    rotate: [0, 15, 0]
                                }}
                                transition={{ 
                                    duration: 1.5, 
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                →
                            </motion.span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Technologies;
