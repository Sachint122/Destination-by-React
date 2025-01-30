import React from 'react';
import { motion } from 'framer-motion';
import '../style/Full_stack/card.css';
import { ul } from 'framer-motion/client';

const Card = ({ image, title, description,list }) => {
    return (
        <motion.div
            className="custom-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0,0,0,0.2)" }}
        >
            <img src={image} alt={title} className="custom-card-image" />
            <h3 className="custom-card-title">{title}</h3>
            {description && <p className="custom-card-description">{description}</p>}
            {list && <ul>
                {list.map((item, index) => (
                    <li style={{listStyle:'none'}} key={index}>{item}</li>
                ))}
            </ul>}
        </motion.div>
    );
};

export default Card;
