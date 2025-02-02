import React from 'react'

function EnquiryBtn() {
  return (
    <div>
       {/* Enquire Now Button */}
       <a href="#">
            <button className="mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300 flex items-center mx-auto md:mx-0">
              Enquire Now <span className="ml-2 text-xl scale-150">→</span>
            </button>
            </a>
    </div>
  )
}

export default EnquiryBtn
