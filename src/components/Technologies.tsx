import { motion } from "framer-motion";
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

const skills = [
    { id: 1, name: "HTML", image: imgHTML },
    { id: 2, name: "CSS", image: imgCSS },
    { id: 3, name: "JavaScript", image: imgJS },
    { id: 4, name: "React", image: imgREACT },
    { id: 5, name: "Node.js", image: imgNODE },
    { id: 6, name: "Tailwind CSS", image: imgTAILWIND },
    { id: 7, name: "TypeScript", image: imgTYPE },
    { id: 8, name: "Next.js", image: imgNEXT },
    { id: 9, name: "Prisma", image: imgPRISMA },
    { id: 10, name: "Figma", image: imgFIGMA },
    { id: 11, name: "Firebase", image: imgFIREBASE },
    { id: 12, name: "GitLab", image: imgGITLAB },
    { id: 13, name: "Laravel", image: imgLARAVEL },
    { id: 14, name: "Flutter", image: imgFLUTTER },
    { id: 15, name: "MongoDB", image: imgMONGODB },
    { id: 16, name: "GitHub", image: imgGITHUB },
];

const Technologies = () => {
    const bounceAnimation = {
        animate: {
            y: [6, -10, 9], // Animation verticale
        },
        transition: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
        },
    };

    return (
        <div id="Technologies" className="py-10 bg-base-300">
            <Title title="Technologies" />
            <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
                {skills.map((skill) => (
                    <motion.div
                        key={skill.id}
                        className="flex flex-col items-center group transform transition-transform duration-300 hover:scale-110"
                        {...bounceAnimation} // Applique l'animation Framer Motion
                    >
                        <div className="w-24 h-24 p-2 rounded-full border-4 border-accent shadow-lg overflow-hidden group-hover:rotate-6 group-hover:shadow-xl">
                            <img
                                src={skill.image}
                                alt={skill.name}
                                className="object-cover h-full w-full"
                            />
                        </div>
                        <span className="mt-4 text-lg font-semibold text-accent transition-opacity duration-300 group-hover:opacity-90">
                            {skill.name}
                        </span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Technologies;
