import { Mail } from "lucide-react"
import img from '../assets/img.jpg'

const Home = () => {
    return (
        <div id="Home" className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10">

            <div className="flex flex-col ">
                <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
                    Bonjour , <br /> je suis {" "}
                    Kevin<span className="text-accent">dev</span>
                </h1>

                <p className="my-4 text-md text-center md:text-left">
                    Je suis un développeur fullstack <br />
                    utilisant Laravel, React, Next, Express, <br /> et Node.js. Contactez-moi si vous avez besoin
                    de mes services.
                </p>
                <a href="" className=" btn btn-accent md:w-fit">
                    <Mail className="w-5 h-5" />
                    Contactez-moi
                </a>

            </div>

            <div className="md:ml-60">
                <img src={img} alt="" className="w-96 h-96 object-cover border-8 border-accent shadow-xl" 
                style={{
                    borderRadius : "30% 70% 70% 30% / 67% 62% 38% 33%"
                }}
                />
            </div>
        </div>
    )
}

export default Home