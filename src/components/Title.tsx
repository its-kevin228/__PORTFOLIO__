import { motion } from "framer-motion";

interface TitleProps {
    title: string;
    subtitle?: string;
    className?: string;
}

const Title = ({ title, subtitle, className = "" }: TitleProps) => {
    const words = title.split(" ");

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const wordVariants = {
        hidden: { 
            opacity: 0, 
            y: 20,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 24
            }
        }
    };

    return (
        <div className={`text-center mb-16 ${className}`}>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
            >
                {/* Background decoration */}
                <motion.div
                    className="absolute inset-0 flex justify-center items-center"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 0.1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="w-32 h-32 bg-gradient-to-r from-accent to-primary rounded-full blur-3xl" />
                </motion.div>

                {/* Main title */}
                <h2 className="relative text-4xl md:text-5xl lg:text-6xl font-bold text-base-content mb-4">
                    {words.map((word, index) => (
                        <motion.span
                            key={index}
                            variants={wordVariants}
                            className="inline-block mr-3"
                        >
                            {index === words.length - 1 ? (
                                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                                    {word}
                                </span>
                            ) : (
                                word
                            )}
                        </motion.span>
                    ))}
                </h2>

                {/* Subtitle */}
                {subtitle && (
                    <motion.p
                        className="text-lg md:text-xl text-base-content/70 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {subtitle}
                    </motion.p>
                )}

                {/* Decorative line */}
                <motion.div
                    className="flex justify-center mt-6"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center space-x-2">
                        <motion.div
                            className="w-8 h-0.5 bg-accent"
                            initial={{ width: 0 }}
                            whileInView={{ width: 32 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                            viewport={{ once: true }}
                        />
                        <motion.div
                            className="w-2 h-2 bg-accent rounded-full"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.4, delay: 1.4 }}
                            viewport={{ once: true }}
                        />
                        <motion.div
                            className="w-8 h-0.5 bg-accent"
                            initial={{ width: 0 }}
                            whileInView={{ width: 32 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                            viewport={{ once: true }}
                        />
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Title;