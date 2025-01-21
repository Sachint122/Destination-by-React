import { useEffect } from "react";

export const useScrollAnimation = () => {
    const observeElement = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const animationClass = entry.target.getAttribute('data-animate'); // Use 'data-animate'
                if (animationClass) {
                    entry.target.classList.add(animationClass);
                }
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(observeElement, {
            threshold: 0.2, // Adjust threshold for visibility
        });

        // Observe elements with 'data-animate' attribute
        const elements = document.querySelectorAll('[data-animate]');
        elements.forEach((el) => observer.observe(el));

        // Cleanup observer on component unmount
        return () => observer.disconnect();
    }, []);
};
