import React from "react";

import Card from "../WebDev/Card";

const ItStaffingCardInfo = ({ title, intro, closingText, buttonText }) => {
  const cards = [
    {
      image:
        "https://destinationtechs.com/wp-content/uploads/2023/07/Unified-3-300x300.png",
      title: "Engaging and Responsive Design:",
      description:
        "We create visually appealing websites that capture the attention of your visitors and provide an intuitive user experience. Our designs are responsive, ensuring seamless functionality across devices.",
    },
    {
      image:
        "https://destinationtechs.com/wp-content/uploads/2023/07/Java-Full-stack-%E2%80%93-1-300x300.png",
      title: "Customization and Personalization",
      description:
        "Every business is unique, and we believe your website should reflect that. We offer customization options to tailor the design, layout, and features of your website to suit your specific needs.",
    },
    {
      image:
        "https://destinationtechs.com/wp-content/uploads/2023/07/Python-Full-Stack-%E2%80%93-1-300x300.png",
      title: "Mobile-Friendly Design",
      description:
        "With the increasing use of mobile devices, we ensure that your website is mobile-friendly and delivers a seamless browsing experience to your mobile users.",
    },
    {
      image:
        "https://destinationtechs.com/wp-content/uploads/2023/07/Python-Java-%E2%80%93-1-300x300.png",
      title: "Search Engine Optimization (SEO):",
      description:
        "We optimize your website for search engines, improving its visibility and organic ranking. Our SEO strategies ensure that your website reaches the right audience and drives relevant traffic.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWp-VOCCGfo76HvQ9uF4c_rjABUYCEkJTCAA&s",
      title: "Engaging and Responsive Design:",
      description:
        "We create visually appealing websites that capture the attention of your visitors and provide an intuitive user experience. Our designs are responsive, ensuring seamless functionality across devices.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPFeFEg095bz_5mdAyVFI_4Vk5xMF2_et_HQ&s",
      title: "Customization and Personalization",
      description:
        "Every business is unique, and we believe your website should reflect that. We offer customization options to tailor the design, layout, and features of your website to suit your specific needs.",
    },
    {
      image:
        "https://destinationtechs.com/wp-content/uploads/2023/07/One-time-300x300.png",
      title: "Mobile-Friendly Design",
      description:
        "With the increasing use of mobile devices, we ensure that your website is mobile-friendly and delivers a seamless browsing experience to your mobile users.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zEotKdu8rEvTmQDr5k9rShpo7hQ0wu-Sww&s",
      title: "Search Engine Optimization (SEO):",
      description:
        "We optimize your website for search engines, improving its visibility and organic ranking. Our SEO strategies ensure that your website reaches the right audience and drives relevant traffic.",
    },
  ];

  return (
    <div className="w-full py-10 px-4 md:px-20 text-center">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 mt-5">
        {title}
        <div className="flex justify-center">
          <div className="w-24 h-1 bg-yellow-500 my-3 text-center"></div>
        </div>
      </h1>

      {/* Intro Paragraph */}
      <p className="text-gray-700 text-lg  md:text-lg mb-8">{intro}</p>

      {/* Cards Section */}

      <div
        className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 px-1 border-b border-gray-500`}
      >
        {cards.slice(0, 8).map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>


      {/* Closing Paragraph */}
      <p className="text-gray-700 text-lg md:text-lg mt-8">{closingText}</p>

      {/* Button */}
      {buttonText && (
        <a href="#">
          <button className="mt-10 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 ">
            {buttonText}
          </button>
        </a>
      )}
    </div>
  );
};

export default ItStaffingCardInfo;
