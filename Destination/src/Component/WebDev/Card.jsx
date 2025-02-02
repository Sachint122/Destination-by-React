import React from 'react';
import { motion } from 'framer-motion';


const Card = ({ image, title, description }) => {
    return (
        <motion.div 
            className="bg-gray-850 rounded-lg overflow-hidden text-center p-5 px-8 mb-6 shadow-lg shadow-gray-500/50"
            initial={{ opacity: 0, y: 30 }} // Fade-in and slide-up effect
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0,0,0,0.2)" }} // Hover effect
        >
            <img src={image} alt={title} className="w-full h-58 object-contain rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-4 text-blue-500">{title}</h3>
            <p className="text-gray-300 mt-4 text-base md:text-lg ml-2">{description}</p>
        </motion.div>
    );
};

export default Card;
