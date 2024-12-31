import { Mail } from "lucide-react";
import img from '../assets/img.jpg';

const Home = () => {
    return (
        <div id="Home" className="flex flex-col md:flex-row justify-center items-center md:my-32 my-10 space-y-10 md:space-y-0">

            {/* Text Section */}
            <div className="flex flex-col md:w-1/2 text-center md:text-left">
                <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
                    Bonjour , <br /> je suis {" "}
                    Kevin<span className="text-accent">PEKPELI</span>
                </h1>

                <p className="my-4 text-md text-center md:text-left">
                    Actuellement étudiant en deuxième année à l'IAI-TOGO (Institut Africain d'Informatique), je suis passionné par la création de solutions numériques.<br />
                    J'évolue dans le développement <span className="text-accent font-semibold">web</span> et <span className="text-accent font-semibold">mobile</span>, utilisant des technologies modernes telles que :
                    <span className="text-accent font-semibold"> Laravel, React, Next.js, Express, Node.js</span> pour le web, et <span className="text-accent font-semibold">Flutter</span> pour des applications mobiles performantes.<br />
                    Toujours avide d'apprendre et de relever des défis, je m'efforce de créer des expériences digitales intuitives et impactantes.
                </p>
                <a href="https://mail.google.com" className="btn btn-accent md:w-fit flex items-center justify-center">
                    <Mail className="w-5 h-5 mr-2" />
                    Contactez-moi <span className="text-accent">pekpelignimdoukevin@gmail.com</span>
                </a>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 flex justify-center">
                <img 
                    src={img} 
                    alt="Kevin Pekpeli" 
                    className="w-72 h-72 md:w-96 md:h-96 object-cover border-8 border-accent shadow-xl transition-transform duration-500 ease-in-out hover:scale-105"
                    style={{
                        borderRadius: "30% 70% 70% 30% / 67% 62% 38% 33%",
                    }}
                />
            </div>
        </div>
    );
};

export default Home;
