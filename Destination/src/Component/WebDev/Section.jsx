import React from "react";

const Section = ({ title, subtitle, description, image, features, btnComponent }) => {
  return (
    <div className="w-full bg-gradient-to-r from-navy-900 to-blue-500 text-white py-10 px-4 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="flex flex-col items-center">
          <img
            src={image}
            alt={title}
            className="w-full max-w-xs sm:max-w-sm md:max-w-lg object-cover"
          />
          <div className="leftbtn">{btnComponent}</div>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-xl md:text-2xl text-white">{subtitle}</h2>
          <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
          <p className="mt-4 text-base md:text-lg">{description}</p>

          {/* Features List */}
          <div className="mt-6">
            {features.map((feature, index) => (
              <div key={index} className="mb-4">
                <h3 className="inline text-xl font-bold">{feature.heading} -:</h3>
                <p className="inline text-lg ml-2">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
