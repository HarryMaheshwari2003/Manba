import React from 'react';

function WhatWeProvide() {
  return (
    <div className="main-cashLoan-img h-auto w-full">
      <div className="wrapper flex flex-col lg-1231:flex-row gap-10 justify-center items-center py-16 sm:py-28 px-5">
        {/* Left Section with Image */}
        <div className="h-auto px-4 py-4 rounded-2xl bg-white flex justify-center items-center w-fit">
          <img
            src="src/assets/cashloanleftimg.png"
            className="rounded-xl max-w-full h-auto"
            alt="Cash Loan Left"
          />
        </div>

        {/* Right Section with Text */}
        <div className="h-auto w-full lg-1231:w-[45%] lg-1231:p-10 flex flex-col items-center justify-center lg:text-left text-center">
          <h1 className="text-3xl md:text-4xl lg-1231:text-5xl text-white font-medium leading-snug">
            Do you need a small cash loan?
          </h1>
          <h2 className="text-lg md:text-xl lg-1231:text-2xl text-blue-400 mt-4 sm:mt-5">
            We’ll provide you with anything between ₹1,00,000 and ₹50L!
          </h2>
          <h4 className="mt-8 text-sm sm:text-base lg-1231:text-[1.4rem] text-white leading-7 px-2 sm:px-4 lg-1231:px-0">
            If you're facing an unexpected financial expense, such as a medical
            emergency, car repair, or home repair, you may be considering taking out a
            small cash loan. Small cash loans are typically unsecured loans, which
            means you don't need to put up any collateral to get them. They can be a
            good option for people with less-than-perfect credit or who need money
            quickly.
          </h4>
          <div className="flex justify-center lg:flex lg-1231:justify-center mt-8 sm:mt-10 w-full">
            <button className="px-6 sm:px-8 py-2 sm:py-3 bg-white rounded-xl border-[3px] border-blue-600 text-blue-600 text-lg sm:text-xl hover:bg-blue-600 hover:text-white transition-all duration-300">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeProvide;
