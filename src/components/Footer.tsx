import { Facebook, Instagram, Linkedin, MonitorSmartphone, Youtube, Mail, MapPin, Phone, } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
    const socialLinks = [
        { 
            name: "YouTube", 
            icon: <Youtube className="w-5 h-5" />, 
            url: "https://youtube.com",
            color: "hover:text-red-500"
        },
        { 
            name: "Instagram", 
            icon: <Instagram className="w-5 h-5" />, 
            url: "https://www.instagram.com",
            color: "hover:text-pink-500"
        },
        { 
            name: "Facebook", 
            icon: <Facebook className="w-5 h-5" />, 
            url: "https://facebook.com",
            color: "hover:text-blue-500"
        },
        { 
            name: "LinkedIn", 
            icon: <Linkedin className="w-5 h-5" />, 
            url: "https://www.linkedin.com",
            color: "hover:text-blue-600"
        },
    ];

    const contactInfo = [
        {
            icon: <Mail className="w-4 h-4" />,
            label: "Email",
            value: "pekpelignimdoukevin@gmail.com",
            link: "mailto:pekpelignimdoukevin@gmail.com"
        },
        {
            icon: <MapPin className="w-4 h-4" />,
            label: "Localisation",
            value: "Lomé, Togo",
            link: null
        },
        {
            icon: <Phone className="w-4 h-4" />,
            label: "Disponible pour",
            value: "Projets freelance",
            link: null
        }
    ];

    const quickLinks = [
        { name: "Accueil", href: "#Home" },
        { name: "À propos", href: "#About" },
        { name: "Technologies", href: "#Technologies" },
        { name: "Projets", href: "#Projects" },
    ];

    return (
        <footer className="relative bg-gradient-to-br from-base-300 to-base-200 border-t border-base-300 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute -top-10 -left-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl"
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
                    className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 0.8, 1],
                        x: [0, -20, 0],
                        y: [0, 15, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 3
                    }}
                />
                
                {/* Floating particles */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-accent/30 rounded-full"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * 200,
                        }}
                        animate={{
                            y: [Math.random() * 200, Math.random() * 200 - 50],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>
            
            <div className="container mx-auto px-6 py-16 relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <motion.div 
                        className="lg:col-span-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center mb-4">
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                            >
                                <MonitorSmartphone className="w-8 h-8 text-accent mr-3" />
                            </motion.div>
                            <h3 className="text-2xl font-bold">
                                Kevin<span className="text-accent">PEKPELI</span>
                            </h3>
                        </div>
                        
                        <p className="text-base-content/80 mb-6 leading-relaxed max-w-md">
                            Développeur Full-Stack passionné, créant des solutions numériques innovantes 
                            avec des technologies modernes. Toujours prêt à relever de nouveaux défis !
                        </p>
                        
                        {/* Social Links */}
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-3 bg-base-100 rounded-full shadow-lg transition-all duration-300 ${social.color} hover:shadow-xl hover:scale-110`}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    viewport={{ once: true }}
                                    aria-label={`Suivre sur ${social.name}`}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg font-semibold text-base-content mb-4">
                            Navigation
                        </h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <motion.li 
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    <a
                                        href={link.href}
                                        className="text-base-content/70 hover:text-accent transition-colors duration-300 flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-accent transition-all duration-300 mr-0 group-hover:mr-2"></span>
                                        {link.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg font-semibold text-base-content mb-4">
                            Contact
                        </h4>
                        <ul className="space-y-3">
                            {contactInfo.map((info, index) => (
                                <motion.li 
                                    key={info.label}
                                    className="flex items-start space-x-3"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="flex-shrink-0 p-2 bg-accent/10 rounded-lg text-accent">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <p className="text-sm text-base-content/60">{info.label}</p>
                                        {info.link ? (
                                            <a
                                                href={info.link}
                                                className="text-sm text-base-content hover:text-accent transition-colors duration-300"
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="text-sm text-base-content">{info.value}</p>
                                        )}
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom Section */}
                <motion.div 
                    className="border-t border-base-300 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <p className="text-base-content/60 text-sm mb-4 md:mb-0">
                        © {new Date().getFullYear()} Kevin PEKPELI. Tous droits réservés.
                    </p>
                    

                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;