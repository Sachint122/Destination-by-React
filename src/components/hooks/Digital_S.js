import React, { useState } from 'react';
import "./Accordion.css"; // Importing custom CSS
import { FaChevronDown } from "react-icons/fa";

export default function Digital_S({ accordionData }) {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Accordion data (You can add 15+ items here)
    return (
        <>
            <div className="Digital_Accordian">
                {accordionData.map((item, index) => (
                    <div className="custom-collapse" key={index}>
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="custom-collapse-title"
                        >
                            {item.title}
                            <FaChevronDown className={`arrow-icon ${openIndex === index ? "rotate" : ""}`} />
                        </button>
                        <div className={`custom-collapse-content-D ${openIndex === index ? "open" : ""}`}>
                            <div className="elementskit-card-body ekit-accordion--content">
                                {item.content}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
