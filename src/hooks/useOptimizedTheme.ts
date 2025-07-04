import { useState, useEffect, useRef } from 'react';

export const useOptimizedTheme = () => {
    const [isDark, setIsDark] = useState(false);
    const observerRef = useRef<MutationObserver | null>(null);

    useEffect(() => {
        // Fonction pour vérifier le thème actuel
        const checkTheme = () => {
            const htmlElement = document.documentElement;
            const currentTheme = htmlElement.getAttribute('data-theme');
            setIsDark(currentTheme === 'dark');
        };

        // Vérifier le thème initial
        checkTheme();

        // Observer les changements de thème avec debounce
        if (!observerRef.current) {
            observerRef.current = new MutationObserver((mutations) => {
                let shouldUpdate = false;
                mutations.forEach((mutation) => {
                    if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
                        shouldUpdate = true;
                    }
                });
                
                if (shouldUpdate) {
                    // Debounce pour éviter les mises à jour trop fréquentes
                    setTimeout(checkTheme, 10);
                }
            });

            observerRef.current.observe(document.documentElement, {
                attributes: true,
                attributeFilter: ['data-theme']
            });
        }

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
                observerRef.current = null;
            }
        };
    }, []);

    return isDark;
};