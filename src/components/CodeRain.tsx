import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CodeRain = () => {
    const [columns, setColumns] = useState<number>(0);
    
    const codeChars = [
        '0', '1', '{', '}', '[', ']', '(', ')', '<', '>', '/', '\\',
        'const', 'let', 'var', 'function', 'return', 'if', 'else',
        'for', 'while', 'class', 'import', 'export', 'async', 'await',
        '=>', '===', '!==', '&&', '||', '++', '--', '+=', '-=',
        'React', 'Vue', 'Angular', 'Node', 'JS', 'TS', 'CSS', 'HTML'
    ];

    useEffect(() => {
        const updateColumns = () => {
            setColumns(Math.floor(window.innerWidth / 60));
        };

        updateColumns();
        window.addEventListener('resize', updateColumns);

        return () => window.removeEventListener('resize', updateColumns);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
            {Array.from({ length: columns }, (_, i) => (
                <div
                    key={i}
                    className="absolute top-0 flex flex-col items-center"
                    style={{ left: `${(i * 60) + 30}px` }}
                >
                    {Array.from({ length: 20 }, (_, j) => (
                        <motion.span
                            key={j}
                            className="text-accent font-mono text-xs leading-tight"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{
                                opacity: [0, 0.8, 0],
                                y: [0, window.innerHeight + 100],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 5 + (j * 0.1),
                                ease: "linear",
                            }}
                        >
                            {codeChars[Math.floor(Math.random() * codeChars.length)]}
                        </motion.span>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default CodeRain;