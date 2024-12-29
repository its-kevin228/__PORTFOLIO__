import Title from "./Title";
import img from "../assets/img.jpg";
import { Component, SendToBack } from "lucide-react";

const aboutSections = [
    {
        id: 1,
        title: "Développeur Frontend",
        description: `Je me spécialise dans la création d'interfaces utilisateur intuitives et performantes en utilisant des technologies comme 
        React, Tailwind CSS et TypeScript. Mon objectif est de fournir une expérience utilisateur exceptionnelle, tout en respectant les meilleures pratiques
        en matière de performance et d'accessibilité.`,
        icon: <Component className="text-accent scale-150" />,
    },
    {
        id: 2,
        title: "Développeur Backend",
        description: `Je conçois et développe des APIs robustes et sécurisées en utilisant Node.js, Express, et Prisma. Je maîtrise également
        l'intégration de bases de données comme MongoDB et Firebase pour des solutions évolutives. Je m'assure que chaque backend soit 
        optimisé pour des performances maximales et une architecture bien structurée.`,
        icon: <SendToBack className="text-accent scale-150" />,
    },
];

const About = () => {
    return (
        <div className="bg-base-300 py-16 px-6 md:px-20" id="About">
            <Title title="About" />
            <div className="grid md:grid-cols-2 gap-10 items-center md:h-screen">
                {/* Image de profil */}
                <div className="hidden md:block">
                    <img
                        src={img}
                        alt="Profile"
                        className="w-full max-w-md object-cover rounded-2xl shadow-lg transition-transform duration-500 hover:scale-110"
                    />
                </div>

                {/* Sections Développement */}
                <div className="space-y-6">
                    {aboutSections.map((section) => (
                        <div
                            key={section.id}
                            className="flex flex-col md:flex-row items-center bg-base-100 p-6 rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105"
                        >
                            {/* Icône */}
                            <div className="mb-4 md:mb-0">
                                {section.icon}
                            </div>

                            {/* Texte */}
                            <div className="md:ml-6 text-center md:text-left">
                                <h2 className="text-2xl font-bold text-accent mb-2">
                                    {section.title}
                                </h2>
                                <p className="text-sm text-gray-600">
                                    {section.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
