import { useState, useEffect } from 'react';

export function useModal() {
    const [isModalOpen, setIsModalOpen] = useState(true);

     const openModal = () => {
        setIsModalOpen(true);
    };
  const closeModal = (event) => {
        const targetTag = event.target.tagName;
        const isIgnoredElement = ['BUTTON', 'INPUT', 'FORM', 'TEXTAREA', 'IMG'].includes(targetTag);
        if (!isIgnoredElement) {
            setIsModalOpen(false);
        }
    };

      useEffect(() => {
        window.addEventListener('click', closeModal);
        return () => {
            window.removeEventListener('click', closeModal);
        };
    }, []);
    return { isModalOpen, openModal, setIsModalOpen };
}
