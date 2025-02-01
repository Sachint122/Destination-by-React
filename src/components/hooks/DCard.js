import React from 'react';
import { motion } from 'framer-motion';
import './Style/Fcard.css';

const DCard = ({ image, title, description,list }) => {
    return (
        <motion.div
            className="custom-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0, ease: "easeOut" }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px  rgba(3, 45, 251, 0.781)" }}
        >
            <img src={image} alt={title} className="Digital-card-image" />
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

export default DCard;
