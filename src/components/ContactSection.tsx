import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Calendar, Clock } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const contactInfo = [
        {
            icon: Mail,
            title: "Email",
            value: "pekpelignimdoukevin@gmail.com",
            link: "mailto:pekpelignimdoukevin@gmail.com",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: Phone,
            title: "Téléphone",
            value: "+228 93 15 88 01",
            link: "tel:+22893158801",
            color: "from-green-500 to-emerald-500"
        },
        {
            icon: MapPin,
            title: "Localisation",
            value: "Lomé, Togo",
            link: "#",
            color: "from-purple-500 to-pink-500"
        },
        {
            icon: Clock,
            title: "Disponibilité",
            value: "Lun - Ven, 8h - 18h",
            link: "#",
            color: "from-orange-500 to-red-500"
        }
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulation d'envoi
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Reset form
        setFormData({ name: "", email: "", subject: "", message: "" });
        setIsSubmitting(false);
        
        // Ici vous pourriez intégrer un service d'email comme EmailJS
        alert("Message envoyé avec succès !");
    };

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
        <section id="ContactSection" className="py-20 bg-gradient-to-br from-base-200 to-base-300 relative overflow-hidden">
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

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Travaillons <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">ensemble</span>
                    </h2>
                    <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
                        Vous avez un projet en tête ? Contactez-moi et donnons vie à vos idées !
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        className="space-y-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div variants={itemVariants}>
                            <h3 className="text-2xl font-bold text-base-content mb-6">
                                Restons en contact
                            </h3>
                            <p className="text-base-content/70 mb-8 leading-relaxed">
                                N'hésitez pas à me contacter pour discuter de votre projet. 
                                Je suis toujours ravi d'échanger sur de nouvelles opportunités 
                                et de relever de nouveaux défis.
                            </p>
                        </motion.div>

                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <motion.a
                                    key={index}
                                    href={info.link}
                                    variants={itemVariants}
                                    className="group flex items-center p-6 bg-base-100 rounded-2xl shadow-lg border border-base-300 hover:shadow-xl transition-all duration-300"
                                    whileHover={{ scale: 1.02, x: 10 }}
                                >
                                    <motion.div
                                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center shadow-lg mr-4`}
                                        whileHover={{ rotate: 10, scale: 1.1 }}
                                    >
                                        <info.icon className="w-7 h-7 text-white" />
                                    </motion.div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-base-content group-hover:text-accent transition-colors">
                                            {info.title}
                                        </h4>
                                        <p className="text-base-content/70">
                                            {info.value}
                                        </p>
                                    </div>
                                    <motion.div
                                        className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        →
                                    </motion.div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Quick actions */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <motion.a
                                href="mailto:pekpelignimdoukevin@gmail.com"
                                className="flex-1 flex items-center justify-center px-6 py-4 bg-gradient-to-r from-accent to-primary text-accent-content rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Mail className="w-5 h-5 mr-2" />
                                Email direct
                            </motion.a>
                            <motion.button
                                className="flex-1 flex items-center justify-center px-6 py-4 border-2 border-accent text-accent rounded-xl font-semibold hover:bg-accent hover:text-accent-content transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Calendar className="w-5 h-5 mr-2" />
                                Planifier un appel
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div
                            variants={itemVariants}
                            className="bg-base-100 rounded-2xl shadow-xl border border-base-300 p-8"
                        >
                            <h3 className="text-2xl font-bold text-base-content mb-6">
                                Envoyez-moi un message
                            </h3>
                            
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <motion.div
                                        variants={itemVariants}
                                        className="space-y-2"
                                    >
                                        <label className="text-sm font-medium text-base-content">
                                            Nom complet
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-base-200 border border-base-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                                            placeholder="Votre nom"
                                        />
                                    </motion.div>
                                    
                                    <motion.div
                                        variants={itemVariants}
                                        className="space-y-2"
                                    >
                                        <label className="text-sm font-medium text-base-content">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-base-200 border border-base-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                                            placeholder="votre@email.com"
                                        />
                                    </motion.div>
                                </div>
                                
                                <motion.div
                                    variants={itemVariants}
                                    className="space-y-2"
                                >
                                    <label className="text-sm font-medium text-base-content">
                                        Sujet
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-base-200 border border-base-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                                        placeholder="Sujet de votre message"
                                    />
                                </motion.div>
                                
                                <motion.div
                                    variants={itemVariants}
                                    className="space-y-2"
                                >
                                    <label className="text-sm font-medium text-base-content">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 bg-base-200 border border-base-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 resize-none"
                                        placeholder="Décrivez votre projet ou votre demande..."
                                    />
                                </motion.div>
                                
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-accent to-primary text-accent-content rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                    variants={itemVariants}
                                >
                                    {isSubmitting ? (
                                        <motion.div
                                            className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                        />
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5 mr-2" />
                                            Envoyer le message
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;