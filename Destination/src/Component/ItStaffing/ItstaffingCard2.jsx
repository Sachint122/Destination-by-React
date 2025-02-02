import React from "react";


import Card from "../WebDev/Card";

const ItStaffingCard2 = ({ title, intro, closingText, buttonText }) => {
  const cards = [
    {
      image:
        "https://destinationtechs.com/wp-content/uploads/2023/07/Unified-3-300x300.png",
      title: "Expert IT Staffing",
      description:
        "We connect businesses with highly skilled IT professionals tailored to your needs. Our staffing solutions ensure the right talent for each project. Whether for short-term or long-term roles, we deliver the expertise you require.",
    },
    {
      image:
        "https://destinationtechs.com/wp-content/uploads/2023/07/Java-Full-stack-%E2%80%93-1-300x300.png",
      title: "Top Tech Talent",
      description:
        "Access a network of top-tier tech professionals ready to innovate. We match companies with the best candidates to drive growth. Our approach ensures you get the right fit for your business.",
    },
    {
      image:
        "https://destinationtechs.com/wp-content/uploads/2023/07/Python-Full-Stack-%E2%80%93-1-300x300.png",
      title: "Future-Ready Teams",
      description:
        "Build teams with skills for the future of technology. We ensure your workforce is equipped to tackle tomorrow’s challenges today. Our solutions help you stay ahead in a rapidly changing landscape.",
    },
    {
      image:
        "https://destinationtechs.com/wp-content/uploads/2023/07/Python-Java-%E2%80%93-1-300x300.png",
      title: "Tech Expertise, Delivered",
      description:
        "Access skilled tech professionals who bring immediate value to your projects. We deliver the expertise you need to drive success. From dev. to innovation, we provide the right talent for every task.",
    },
  ];

  return (
    <div className="w-full py-10 px-4 md:px-20 text-center">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-300 mb-5 mt-5">
        {title}
        <div className="flex justify-center">
          <div className="w-24 h-1 bg-yellow-500 my-3 text-center"></div>
        </div>
      </h1>

      {/* Intro Paragraph */}
      <p className="text-gray-400 text-lg  md:text-lg mb-8">{intro}</p>

      {/* Cards Section */}

      <div
        className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 px-1 border-b border-gray-500`}
      >
        {cards.slice(0, 4).map((card, index) => (
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

export default ItStaffingCard2;
