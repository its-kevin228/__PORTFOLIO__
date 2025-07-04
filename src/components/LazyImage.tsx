import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LazyImageProps {
    src: string;
    alt: string;
    className?: string;
    placeholder?: string;
    onLoad?: () => void;
}

const LazyImage = ({ src, alt, className = '', placeholder, onLoad }: LazyImageProps) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1, rootMargin: '50px' }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleLoad = () => {
        setIsLoaded(true);
        onLoad?.();
    };

    return (
        <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
            {/* Placeholder */}
            {!isLoaded && (
                <div className="absolute inset-0 bg-base-200 animate-pulse flex items-center justify-center">
                    {placeholder ? (
                        <img src={placeholder} alt="" className="w-full h-full object-cover opacity-50" />
                    ) : (
                        <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
                    )}
                </div>
            )}
            
            {/* Actual image */}
            {isInView && (
                <motion.img
                    src={src}
                    alt={alt}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${
                        isLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={handleLoad}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: isLoaded ? 1 : 1.1 }}
                    transition={{ duration: 0.3 }}
                    loading="lazy"
                    decoding="async"
                />
            )}
        </div>
    );
};

export default LazyImage;