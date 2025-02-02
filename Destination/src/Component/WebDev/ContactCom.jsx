import React from 'react';
import EnquiryBtn from './EnquiryBtn'; // Import EnquiryBtn component

const ContactSection = () => {
  return (
    <div className="w-full bg-gray-950 py-10 px-4 md:px-20 secondpart ">
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row items-center gap-20">
        
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <div className="md:w-1/2 flex justify-center setimage">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1nwvviwz9gubuZTMMMT7m9PADKEGrAImh8A&s"
              alt="CMS Design"
              className="w-full max-w-xs sm:max-w-sm md:max-w-lg object-cover"
            />
          </div>
          <h2 className="text-xl md:text-2xl text-gray-300">Have any question...</h2>
          <h1 className="text-xl md:text-4xl font-bold text-white-200">
            Contact us for more information
          </h1>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 flex flex-col items-center text-center setimage">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-300 mt-7">
            We are here to assist you with any queries or concerns you may have.
          </h1>
          <div className="mt-3">
            <EnquiryBtn />
          </div>
        </div>

      </div>
    </div>
  );
}

export default ContactSection;
