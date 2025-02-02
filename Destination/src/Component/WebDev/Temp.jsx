import React from "react";
import "./page1.css";
import CardComponent from "./Cardcomponent.jsx";
import EnquiryBtn from "./EnquiryBtn.jsx";

const ITStaffing = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="w-full">
        <div
          className="relative w-full h-[300px] md:h-[350px] bg-cover bg-center bg-no-repeat text-white flex items-center justify-center bg-black text-white"
          style={{
            backgroundImage:
              "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlGSFrs2O90inEem4PAa84TT4Qhh4-s2eVNg&s')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-3xl md:text-4xl font-bold">
              Website Development
            </h1>
            <p className="mt-2 text-sm md:text-lg">
              <span className="text-gray-300 icon icon-right-arrow">Home</span>{" "}
              →<span className="text-gray-300"> Services</span> → Web Devlopment
            </p>
          </div>
        </div>
      </div>

      <div className="w-full py-10 px-4 md:px-20 secondpart bg-gradient-to-r from-[#001F3F] to-[#007BFF]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left Image */}
          <div className="flex flex-col items-center">
            <img
              src="https://destinationtechs.com/wp-content/uploads/2023/07/Microsites-bro-1024x1024.png"
              alt="CMS Design"
              className="w-full max-w-xs sm:max-w-sm md:max-w-lg object-cover mr-24"
            />
            <div className="leftbtn">
              <EnquiryBtn />
            </div>
          </div>
          <CardComponent/>

          {/* Right Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-large md:text-2xl text-white">
              Website Development...
            </h2>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Why Choose Destination?
            </h1>
            <p className="text-gray-300 mt-4 text-base md:text-lg text-left">
              At Destination Technologies, we are committed to helping aspiring
              developers kickstart their careers in the tech industry...
            </p>

            <div className="inline">
              <h1 className="inline text-xl font-bold text-white">
                Industry-Relevant Training:
              </h1>
              <p className="inline text-gray-300 mt-4 text-base md:text-lg ml-2">
                We provide hands-on training with the latest technologies...
              </p>
              <br />
              <h1 className="inline text-xl font-bold text-white">
                Hands-On Projects:
              </h1>
              <p className="inline text-gray-300 mt-4 text-base md:text-lg ml-2">
                Learn by doing! Work on real-world projects...
              </p>
              <br />
              <h1 className="inline text-xl font-bold text-white">
                Expert Mentorship:
              </h1>
              <p className="inline text-gray-300 mt-4 text-base md:text-lg ml-2">
                Get guidance from experienced professionals...
              </p>
              <br />
              <h1 className="inline text-xl font-bold text-white">
                Certification Programs:
              </h1>
              <p className="inline text-gray-300 mt-4 text-base md:text-lg ml-2">
                Earn recognized certifications that validate your skills...
              </p>
              <br />
              <h1 className="inline text-xl font-bold text-white">
                Internship & Placement Assistance:
              </h1>
              <p className="inline text-gray-300 mt-4 text-base md:text-lg ml-2">
                Get support in securing internships, job referrals...
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="w-full py-10 px-4 md:px-20 bg-gradient-to-r from-[#0A1931] to-[#00A8E8]">
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
            <h1 className="text-xl md:text-4xl font-bold text-white mt-5">
              Contact us for more information
            </h1>
          </div>

          {/* Right Content */}
          <div className="md:w-1/2 flex flex-col items-center text-center setimage">
            <h1 className="text-3xl md:text-4xl font-bold text-white mt-7">
              We are here to assist you with any queries or concerns you may
              have.
            </h1>
            <div className="mt-5">
              <EnquiryBtn />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ITStaffing;
