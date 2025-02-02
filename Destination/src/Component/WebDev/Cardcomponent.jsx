import React from 'react';
import Card from './Card';
// import engage from "./../assets/card1.jpg";
// import custome from "./../assets/card2.jpg";
// import mobile from "./../assets/card3.jpg";
// import seo from "./../assets/card4.jpg";

const CardComponent = ({column}) => {
    const cards = [
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-uHnAgUmJPQlmo56w7GGptreDLbh79tMuMg&s",
            title: 'Engaging and Responsive Design:',
            description: 'We create visually appealing websites that capture the attention of your visitors and provide an intuitive user experience. Our designs are responsive, ensuring seamless functionality across devices.'
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-uHnAgUmJPQlmo56w7GGptreDLbh79tMuMg&s',
            title: 'Customization and Personalization',
            description: 'Every business is unique, and we believe your website should reflect that. We offer customization options to tailor the design, layout, and features of your website to suit your specific needs.'
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-uHnAgUmJPQlmo56w7GGptreDLbh79tMuMg&s',
            title: 'Mobile-Friendly Design',
            description: 'With the increasing use of mobile devices, we ensure that your website is mobile-friendly and delivers a seamless browsing experience to your mobile users.'
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-uHnAgUmJPQlmo56w7GGptreDLbh79tMuMg&s',
            title: 'Search Engine Optimization (SEO):',
            description: 'We optimize your website for search engines, improving its visibility and organic ranking. Our SEO strategies ensure that your website reaches the right audience and drives relevant traffic.'
        },
    ];

    return (
        <div className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-${column} gap-5 px-1 border-b border-gray-500`}>
            {cards.slice(0, column).map((card, index) => (
                <Card 
                    key={index} 
                    image={card.image} 
                    title={card.title} 
                    description={card.description} 
                />
            ))}
        </div>
    );
};

export default CardComponent;
