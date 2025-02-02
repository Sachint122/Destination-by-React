import React from "react";

const RightImg = ({ title, description, imageUrl, button }) => {
  return (
    <div className="w-full bg-black-800 py-10 px-4 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20">
        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={imageUrl}
            alt="Service Image"
            className="w-full max-w-xs sm:max-w-sm md:max-w-lg object-cover rounded-md"
          />
        </div>
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold text-white">
            {title}
          </h1>

          {title && (
            <div className="w-16 h-1 bg-yellow-500 my-3 mx-auto md:mx-0"></div>
          )}

          <p className="text-gray-300 mt-4 text-base md:text-lg">
            {description}
          </p>

          {/* Button (If Passed as Prop) */}
          {button && <div className="mt-4">{button}</div>}
        </div>
      </div>
    </div>
  );
};

export default RightImg;
