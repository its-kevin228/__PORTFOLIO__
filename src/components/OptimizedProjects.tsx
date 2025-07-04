import { memo } from "react";
import Title from "./Title";
import LazyImage from "./LazyImage";
import { motion } from "framer-motion";
import { Github, ExternalLink, Calendar, Star } from "lucide-react";

import cacheSystemImg from '../assets/projects/cache-system.svg';
import moneyMapImg from '../assets/projects/money-map.svg';
import cosmeticStoreImg from '../assets/projects/cosmetic-store.svg';
import autoMailImg from '../assets/projects/auto-mail.svg';
import img1 from '../assets/projects/1.jpg';
import img2 from '../assets/projects/2.jpg';
import img3 from '../assets/projects/3.jpg';

const projects = [
    {
        id: 1,
        title: 'Système de Gestion de Cache',
        description: 'Système avancé de mise en cache distribué avec gestion intelligente des données, optimisation des performances et monitoring en temps réel.',
        technologies: ['Redis', 'Node.js', 'TypeScript', 'Docker'],
        repoLink: 'https://github.com/its-kevin228/cache-management-system',
        liveLink: '#',
        image: cacheSystemImg,
        status: 'En développement',
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
        image: moneyMapImg,
        status: 'En développement',
        featured: true,
        year: '2024'
    },
    {
        id: 3,
        title: 'Cosmetic - Boutique en ligne',
        description: 'Site vitrine élégant pour boutique de cosmétiques avec catalogue produits, système de commande et interface d\'administration moderne.',
        technologies: ['React', 'Tailwind CSS', 'Stripe', 'Firebase'],
        repoLink: 'https://github.com/its-kevin228/cosmetic-store',
        liveLink: '#',
        image: cosmeticStoreImg,
        status: 'Terminé',
        featured: true,
        year: '2024'
    },
    {
        id: 4,
        title: 'Auto-Mail - Automatisation Email',
        description: "Système d'automatisation d'emails avec templates personnalisables, planification avancée et analytics détaillés.",
        technologies: ['Node.js', 'Express.js', 'MongoDB', 'Nodemailer'],
        repoLink: 'https://github.com/its-kevin228/auto-mail-system',
        liveLink: '#',
        image: autoMailImg,
        status: 'En développement',
        featured: true,
        year: '2024'
    },
    {
        id: 5,
        title: 'Gestionnaire de tâches',
        description: 'Application complète pour organiser et suivre les tâches avec des fonctionnalités avancées de priorisation, rappels et collaboration en équipe.',
        technologies: ['React', 'Node.js', 'Tailwind CSS', 'Firebase'],
        repoLink: 'https://github.com/its-kevin228/TODO_APP-server_actions',
        liveLink: '#',
        image: img1,
        status: 'Terminé',
        featured: false,
        year: '2024'
    },
    {
        id: 6,
        title: 'Portfolio interactif',
        description: 'Portfolio moderne et responsive avec des animations fluides pour présenter mes projets et compétences de manière professionnelle.',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        repoLink: 'https://github.com/its-kevin228/__PORTFOLIO__',
        liveLink: '#',
        image: img2,
        status: 'Terminé',
        featured: false,
        year: '2024'
    },
    {
        id: 7,
        title: 'Social Login System',
        description: "Système d'authentification social sécurisé permettant la connexion via différentes plateformes (Google, Facebook, GitHub).",
        technologies: ['Node.js', 'Passport.js', 'Express.js', 'OAuth'],
        repoLink: 'https://github.com/its-kevin228/BS_social-login',
        liveLink: '#',
        image: img3,
        status: 'Terminé',
        featured: false,
        year: '2023'
    },
    {
        id: 8,
        title: 'Application Météo',
        description: "Application météorologique moderne avec géolocalisation, prévisions détaillées et interface utilisateur intuitive.",
        technologies: ['HTML5', 'JavaScript', 'CSS3', 'Weather API'],
        repoLink: 'https://github.com/its-kevin228/weather_app',
        liveLink: '#',
        image: img1,
        status: 'Terminé',
        featured: false,
        year: '2023'
    },
    {
        id: 9,
        title: 'Quizzi - Plateforme de Quiz',
        description: "Plateforme interactive de quiz avec système de scoring, catégories multiples et tableau de classement en temps réel.",
        technologies: ['PHP', 'Tailwind CSS', 'MySQL', 'JavaScript'],
        repoLink: 'https://github.com/its-kevin228/Quizzi',
        liveLink: '#',
        image: img2,
        status: 'Terminé',
        featured: false,
        year: '2023'
    },
];

// Memoized project card component
const ProjectCard = memo(({ project, isFeatured }: { project: typeof projects[0], isFeatured: boolean }) => {
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

    if (isFeatured) {
        return (
            <motion.div
                variants={projectVariants}
                className="group relative bg-base-100 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
                whileHover={{ y: -5 }}
            >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                    <LazyImage
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full group-hover:scale-110 transition-transform duration-700"
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
                    
                    {/* Action Buttons */}
                    <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <motion.a
                            href={project.repoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-base-100 rounded-full shadow-lg hover:bg-accent hover:text-accent-content transition-colors duration-200"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label={`Voir le code source de ${project.title}`}
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
                            aria-label={`Voir le projet ${project.title} en ligne`}
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
                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full font-medium hover:bg-accent hover:text-accent-content transition-colors duration-200 cursor-default"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        );
    }

    return (
        <motion.div
            variants={projectVariants}
            className="group bg-base-100 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -3 }}
        >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
                <LazyImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full group-hover:scale-105 transition-transform duration-300"
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
                            aria-label={`Voir le code source de ${project.title}`}
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
                            aria-label={`Voir le projet ${project.title} en ligne`}
                        >
                            <ExternalLink className="w-4 h-4" />
                        </motion.a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
});

ProjectCard.displayName = 'ProjectCard';

const OptimizedProjects = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.2, // Reduced delay
                staggerChildren: 0.1 // Reduced stagger
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
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.h3 
                        className="text-2xl font-bold text-accent mb-8 flex items-center"
                        variants={projectVariants}
                    >
                        <Star className="w-6 h-6 mr-2 fill-current" />
                        Projets Phares
                    </motion.h3>
                    
                    <div className="grid lg:grid-cols-2 gap-8">
                        {featuredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} isFeatured={true} />
                        ))}
                    </div>
                </motion.div>
                
                {/* Other Projects */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.h3 
                        className="text-2xl font-bold text-base-content mb-8"
                        variants={projectVariants}
                    >
                        Autres Projets
                    </motion.h3>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {otherProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} isFeatured={false} />
                        ))}
                    </div>
                </motion.div>
                
                {/* Call to Action */}
                <motion.div 
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
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

export default memo(OptimizedProjects);