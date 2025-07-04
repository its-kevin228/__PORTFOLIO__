import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    speed: number;
    opacity: number;
    color: string;
}

const ParticleField = () => {
    const [particles, setParticles] = useState<Particle[]>([]);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const updateDimensions = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);

        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    useEffect(() => {
        if (dimensions.width === 0) return;

        const colors = [
            'rgba(16, 185, 129, 0.3)', // accent green
            'rgba(99, 102, 241, 0.3)', // primary blue
            'rgba(139, 92, 246, 0.3)', // secondary purple
        ];

        const newParticles: Particle[] = Array.from({ length: 25 }, (_, i) => ({
            id: i,
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
            size: Math.random() * 3 + 1,
            speed: Math.random() * 0.5 + 0.1,
            opacity: Math.random() * 0.5 + 0.1,
            color: colors[Math.floor(Math.random() * colors.length)],
        }));

        setParticles(newParticles);
    }, [dimensions]);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full"
                    style={{
                        width: particle.size,
                        height: particle.size,
                        backgroundColor: particle.color,
                        boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
                    }}
                    initial={{
                        x: particle.x,
                        y: particle.y,
                        opacity: 0,
                    }}
                    animate={{
                        x: [
                            particle.x,
                            particle.x + Math.sin(Date.now() * 0.001 + particle.id) * 100,
                            particle.x,
                        ],
                        y: [
                            particle.y,
                            particle.y - 50,
                            particle.y + 30,
                            particle.y,
                        ],
                        opacity: [0, particle.opacity, particle.opacity, 0],
                        scale: [0, 1, 1.2, 0],
                    }}
                    transition={{
                        duration: 8 + Math.random() * 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: Math.random() * 5,
                    }}
                />
            ))}
        </div>
    );
};

export default ParticleField;