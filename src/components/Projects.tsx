import Title from "./Title";

import img1 from '../assets/projects/1.jpg';
import img2 from '../assets/projects/2.jpg';
import img3 from '../assets/projects/2.png';
import img4 from '../assets/projects/4.jpg';
import img5 from '../assets/projects/3.jpg';
import img6 from '../assets/projects/5.jpg';
import { Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: 'Gestionnaire de tâches',
        description: 'Application pour organiser et suivre les tâches avec des fonctionnalités de priorisation et de rappel.',
        technologies: ['React', 'Node.js', 'Tailwind CSS',"firebase"],
        repoLink: 'https://github.com/its-kevin228/TODO_APP-server_actions',
        image: img1,
    },
    {
        id: 2,
        title: 'Plateforme de gestion de budgets',
        description: "Une plateforme robuste pour Gerer vos dépenses en toutes simplicité.",
        technologies: ['Next.js', 'TypeScript', 'Prisma'],
        repoLink: 'https://github.com/its-kevin228/MoneyMap',
        image: img2,
    },
    {
        id: 3,
        title: 'Portfolio interactif',
        description: 'Un portfolio moderne et interactif pour présenter mes projets et compétences.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        repoLink: 'https://github.com/its-kevin228/__PORTFOLIO__',
        image: img3,
    },
    {
        id: 4,
        title: 'Social-Login',
        description: "Uitliser pour vous connectez via l'authentication sur n'importe quel site web.",
        technologies: ['Node.js', 'Passport.js', 'Express.js'],
        repoLink: 'https://github.com/its-kevin228/BS_social-login',
        image: img4,
    },
    {
        id: 5,
        title: 'Météo',
        description: "Reinseignez sur le temps qu'il fait partout ou vous voulez.",
        technologies: ['Html', 'javascrpt', 'css'],
        repoLink: 'https://github.com/its-kevin228/weather_app',
        image: img5,
    },
    {
        id: 6,
        title: 'Quiz',
        description: "Testez vos connaissances avec nos petites questions.",
        technologies: ['Php', 'Tailwind css', 'Mysql'],
        repoLink: 'https://github.com/its-kevin228/Quizzi',
        image: img6,
    },
];

const Projects = () => {
    return (
        <div className="mt-10" id="Projects">
            <Title title="My Projects" />
            <div className="grid md:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <div key={project.id} className="bg-base-300 p-5 h-fit rounded-xl shadow-lg ">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full rounded-xl h-56 object-cover"
                        />
                        <div>
                            <h1 className="my-2 font-bold">
                                {project.title}
                            </h1>
                            <p className="text-sm">{project.description}</p>

                        </div>
                        <div className="flex flex-wrap gap-2 my-3">
                            {project.technologies.map((tech) => (
                                <span key={tech} className="badge badge-accent badge-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between">
                           
                            <a className="btn btn-neutral w-1/3 ml-2" href={project.repoLink} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
