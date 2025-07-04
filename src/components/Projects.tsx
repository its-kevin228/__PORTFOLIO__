import Title from "./Title";
import { motion } from "framer-motion";
import { Github, ExternalLink, Calendar, Star } from "lucide-react";

import img1 from '../assets/projects/1.jpg';
import img2 from '../assets/projects/2.jpg';
import img3 from '../assets/projects/2.png';
import img4 from '../assets/projects/4.jpg';
import img5 from '../assets/projects/3.jpg';
import img6 from '../assets/projects/5.jpg';

const projects = [
    {
        id: 1,
        title: 'Gestionnaire de tâches',
        description: 'Application complète pour organiser et suivre les tâches avec des fonctionnalités avancées de priorisation, rappels et collaboration en équipe.',
        technologies: ['React', 'Node.js', 'Tailwind CSS', 'Firebase'],
        repoLink: 'https://github.com/its-kevin228/TODO_APP-server_actions',
        liveLink: '#',
        image: img1,
        status: 'Terminé',
        featured: true,
        year: '2024'
    },
    {
        id: 2,
        title: 'MoneyMap - Gestion de budgets',
        description: "Plateforme robuste et intuitive pour gérer vos finances personnelles avec des analyses détaillées et des prévisions budgétaires.",
        technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
        repoLink: 'https://github.com/its-kevin228/MoneyMap',
        liveLink: '#',
        image: img2,
        status: 'En développement',
        featured: true,
        year: '2024'
    },
    {
        id: 3,
        title: 'Portfolio interactif',
        description: 'Portfolio moderne et responsive avec des animations fluides pour présenter mes projets et compétences de manière professionnelle.',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        repoLink: 'https://github.com/its-kevin228/__PORTFOLIO__',
        liveLink: '#',
        image: img3,
        status: 'Terminé',
        featured: false,
        year: '2024'
    },
    {
        id: 4,
        title: 'Social Login System',
        description: "Système d'authentification social sécurisé permettant la connexion via différentes plateformes (Google, Facebook, GitHub).",
        technologies: ['Node.js', 'Passport.js', 'Express.js', 'OAuth'],
        repoLink: 'https://github.com/its-kevin228/BS_social-login',
        liveLink: '#',
        image: img4,
        status: 'Terminé',
        featured: false,
        year: '2023'
    },
    {
        id: 5,
        title: 'Application Météo',
        description: "Application météorologique moderne avec géolocalisation, prévisions détaillées et interface utilisateur intuitive.",
        technologies: ['HTML5', 'JavaScript', 'CSS3', 'Weather API'],
        repoLink: 'https://github.com/its-kevin228/weather_app',
        liveLink: '#',
        image: img5,
        status: 'Terminé',
        featured: false,
        year: '2023'
    },
    {
        id: 6,
        title: 'Quizzi - Plateforme de Quiz',
        description: "Plateforme interactive de quiz avec système de scoring, catégories multiples et tableau de classement en temps réel.",
        technologies: ['PHP', 'Tailwind CSS', 'MySQL', 'JavaScript'],
        repoLink: 'https://github.com/its-kevin228/Quizzi',
        liveLink: '#',
        image: img6,
        status: 'Terminé',
        featured: false,
        year: '2023'
    },
];

const Projects = () => {
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

    const projectVariants = {
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

    const featuredProjects = projects.filter(project => project.featured);
    const otherProjects = projects.filter(project => !project.featured);

    return (
        <section className="py-20" id="Projects">
            <div className="container mx-auto">
                <Title title="Mes Projets" />
                
                {/* Featured Projects */}
                <motion.div 
                    className="mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.h3 
                        className="text-2xl font-bold text-accent mb-8 flex items-center"
                        variants={projectVariants}
                    >
                        <Star className="w-6 h-6 mr-2 fill-current" />
                        Projets Phares
                    </motion.h3>
                    
                    <div className="grid lg:grid-cols-2 gap-8">
                        {featuredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                variants={projectVariants}
                                className="group relative bg-base-100 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
                                whileHover={{ y: -5 }}
                            >
                                {/* Project Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        whileHover={{ scale: 1.1 }}
                                    />
                                    
                                    {/* Status Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                            project.status === 'Terminé' 
                                                ? 'bg-success text-success-content' 
                                                : 'bg-warning text-warning-content'
                                        }`}>
                                            {project.status}
                                        </span>
                                    </div>
                                    
                                    {/* Year Badge */}
                                    <div className="absolute top-4 right-4">
                                        <span className="px-3 py-1 bg-base-100/90 text-base-content rounded-full text-xs font-semibold flex items-center">
                                            <Calendar className="w-3 h-3 mr-1" />
                                            {project.year}
                                        </span>
                                    </div>
                                    
                                    {/* Enhanced overlay with animation */}
                                    <motion.div 
                                        className="absolute inset-0 bg-gradient-to-t from-base-content/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        initial={{ scale: 1.1 }}
                                        whileHover={{ scale: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    
                                    {/* Animated particles on hover */}
                                    <motion.div
                                        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
                                        transition={{ duration: 0.3 }}
                                    >
                                        {[...Array(6)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                className="absolute w-2 h-2 bg-accent rounded-full"
                                                initial={{ 
                                                    x: Math.random() * 100 + "%", 
                                                    y: Math.random() * 100 + "%",
                                                    scale: 0 
                                                }}
                                                whileHover={{
                                                    scale: [0, 1, 0],
                                                    y: [Math.random() * 100 + "%", (Math.random() * 50) + "%"],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    delay: i * 0.2,
                                                    ease: "easeInOut"
                                                }}
                                            />
                                        ))}
                                    </motion.div>
                                    
                                    {/* Action Buttons */}
                                    <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <motion.a
                                            href={project.repoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-base-100 rounded-full shadow-lg hover:bg-accent hover:text-accent-content transition-colors duration-200"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <Github className="w-5 h-5" />
                                        </motion.a>
                                        
                                        <motion.a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-base-100 rounded-full shadow-lg hover:bg-accent hover:text-accent-content transition-colors duration-200"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                        </motion.a>
                                    </div>
                                </div>
                                
                                {/* Project Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-base-content mb-3 group-hover:text-accent transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    
                                    <p className="text-base-content/80 mb-4 leading-relaxed">
                                        {project.description}
                                    </p>
                                    
                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, techIndex) => (
                                            <motion.span
                                                key={tech}
                                                className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full font-medium hover:bg-accent hover:text-accent-content transition-colors duration-200 cursor-default"
                                                initial={{ opacity: 0, scale: 0 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: techIndex * 0.1 }}
                                                viewport={{ once: true }}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
                
                {/* Other Projects */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.h3 
                        className="text-2xl font-bold text-base-content mb-8"
                        variants={projectVariants}
                    >
                        Autres Projets
                    </motion.h3>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {otherProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                variants={projectVariants}
                                className="group bg-base-100 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                                whileHover={{ y: -3 }}
                            >
                                {/* Project Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    
                                    <div className="absolute top-3 left-3">
                                        <span className="px-2 py-1 bg-base-100/90 text-base-content rounded text-xs font-medium">
                                            {project.year}
                                        </span>
                                    </div>
                                </div>
                                
                                {/* Project Content */}
                                <div className="p-5">
                                    <h4 className="text-lg font-bold text-base-content mb-2 group-hover:text-accent transition-colors duration-300">
                                        {project.title}
                                    </h4>
                                    
                                    <p className="text-base-content/70 text-sm mb-4 line-clamp-3">
                                        {project.description}
                                    </p>
                                    
                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-1 mb-4">
                                        {project.technologies.slice(0, 3).map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 bg-accent/10 text-accent text-xs rounded font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <span className="px-2 py-1 bg-base-200 text-base-content/60 text-xs rounded font-medium">
                                                +{project.technologies.length - 3}
                                            </span>
                                        )}
                                    </div>
                                    
                                    {/* Actions */}
                                    <div className="flex justify-between items-center">
                                        <span className={`text-xs font-semibold ${
                                            project.status === 'Terminé' ? 'text-success' : 'text-warning'
                                        }`}>
                                            {project.status}
                                        </span>
                                        
                                        <div className="flex space-x-2">
                                            <motion.a
                                                href={project.repoLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 hover:bg-accent hover:text-accent-content rounded-lg transition-colors duration-200"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <Github className="w-4 h-4" />
                                            </motion.a>
                                            
                                            <motion.a
                                                href={project.liveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 hover:bg-accent hover:text-accent-content rounded-lg transition-colors duration-200"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                            </motion.a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
                
                {/* Call to Action */}
                <motion.div 
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <p className="text-lg text-base-content/80 mb-6">
                        Intéressé par une collaboration ? Contactons-nous !
                    </p>
                    <motion.a
                        href="mailto:pekpelignimdoukevin@gmail.com"
                        className="btn btn-accent btn-lg shadow-lg hover:shadow-xl"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Démarrer un projet
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
