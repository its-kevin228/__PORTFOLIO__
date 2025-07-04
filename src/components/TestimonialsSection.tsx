import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

const TestimonialsSection = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const testimonials = [
        {
            name: "Marie Dubois",
            role: "CEO, TechStart",
            company: "TechStart Solutions",
            content: "Kevin a transformé notre vision en une application web exceptionnelle. Son expertise technique et sa créativité ont dépassé nos attentes. Un développeur talentueux et professionnel.",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
            project: "Application de gestion d'entreprise"
        },
        {
            name: "Jean-Pierre Martin",
            role: "Directeur Marketing",
            company: "Digital Agency Pro",
            content: "Collaboration exceptionnelle ! Kevin a livré notre site e-commerce dans les délais avec une qualité irréprochable. Son approche méthodique et sa communication claire font la différence.",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
            project: "Plateforme e-commerce"
        },
        {
            name: "Sophie Laurent",
            role: "Fondatrice",
            company: "InnovateLab",
            content: "Kevin a développé notre application mobile avec Flutter. Le résultat est magnifique, performant et exactement ce que nous voulions. Je recommande vivement ses services.",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
            project: "Application mobile iOS/Android"
        }
    ];

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
        <section className="py-20 bg-gradient-to-br from-base-100 to-base-200 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-10 left-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 30, 0],
                        y: [0, -20, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 0.8, 1],
                        x: [0, -20, 0],
                        y: [0, 15, 0],
                    }}
                    transition={{
                        duration: 12,
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
                        Ce que disent mes <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">clients</span>
                    </h2>
                    <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
                        La satisfaction client est ma priorité. Découvrez les retours de ceux qui m'ont fait confiance.
                    </p>
                </motion.div>

                <motion.div
                    className="max-w-4xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Main testimonial */}
                    <motion.div
                        key={activeTestimonial}
                        className="relative bg-base-100 rounded-3xl p-8 md:p-12 shadow-2xl border border-base-300 mb-8"
                        variants={itemVariants}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Quote icon */}
                        <motion.div
                            className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center shadow-lg"
                            whileHover={{ scale: 1.1, rotate: 10 }}
                        >
                            <Quote className="w-6 h-6 text-white" />
                        </motion.div>

                        {/* Content */}
                        <div className="pt-6">
                            <motion.p
                                className="text-lg md:text-xl text-base-content/80 leading-relaxed mb-8 italic"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                "{testimonials[activeTestimonial].content}"
                            </motion.p>

                            {/* Rating */}
                            <motion.div
                                className="flex items-center justify-center mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ scale: 0, rotate: -180 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        transition={{ delay: 0.4 + i * 0.1 }}
                                    >
                                        <Star className="w-6 h-6 text-yellow-400 fill-current mx-1" />
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Author info */}
                            <motion.div
                                className="flex items-center justify-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <div className="relative">
                                    <motion.img
                                        src={testimonials[activeTestimonial].avatar}
                                        alt={testimonials[activeTestimonial].name}
                                        className="w-16 h-16 rounded-full border-4 border-accent/20 shadow-lg"
                                        whileHover={{ scale: 1.1 }}
                                    />
                                    <motion.div
                                        className="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-full opacity-0 group-hover:opacity-100 blur-sm"
                                        animate={{
                                            rotate: [0, 360],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }}
                                    />
                                </div>
                                <div className="ml-4 text-left">
                                    <h4 className="text-lg font-bold text-base-content">
                                        {testimonials[activeTestimonial].name}
                                    </h4>
                                    <p className="text-accent font-medium">
                                        {testimonials[activeTestimonial].role}
                                    </p>
                                    <p className="text-sm text-base-content/60">
                                        {testimonials[activeTestimonial].company}
                                    </p>
                                </div>
                            </motion.div>

                            {/* Project info */}
                            <motion.div
                                className="mt-6 text-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                            >
                                <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                                    Projet: {testimonials[activeTestimonial].project}
                                </span>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Testimonial navigation */}
                    <motion.div
                        className="flex justify-center space-x-4"
                        variants={itemVariants}
                    >
                        {testimonials.map((_, index) => (
                            <motion.button
                                key={index}
                                onClick={() => setActiveTestimonial(index)}
                                className={`relative w-16 h-16 rounded-full border-2 overflow-hidden transition-all duration-300 ${
                                    activeTestimonial === index
                                        ? "border-accent scale-110 shadow-lg"
                                        : "border-base-300 hover:border-accent/50"
                                }`}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <img
                                    src={testimonials[index].avatar}
                                    alt={testimonials[index].name}
                                    className="w-full h-full object-cover"
                                />
                                {activeTestimonial === index && (
                                    <motion.div
                                        className="absolute inset-0 bg-accent/20"
                                        layoutId="activeTestimonialOverlay"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </motion.button>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Call to action */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold text-base-content mb-4">
                        Prêt à rejoindre mes clients satisfaits ?
                    </h3>
                    <p className="text-base-content/70 mb-8 max-w-2xl mx-auto">
                        Transformons ensemble votre vision en réalité. Contactez-moi pour discuter de votre projet.
                    </p>
                    <motion.a
                        href="mailto:pekpelignimdoukevin@gmail.com"
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent to-primary text-accent-content rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Commencer mon projet
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

export default TestimonialsSection;