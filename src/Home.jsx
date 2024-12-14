import React from 'react';

function Home() {
  return (
    <div className="relative">
      <div className="h-[100vh] w-full">
        <img
          src="src/assets/Homeloansimg.png"
          alt="Home loan image"
          className="h-full w-full object-cover animate-fadeIn"
        />
      </div>

      <div className="absolute top-[30%] left-4 md:left-10 lg:left-[4%] px-6 sm:px-10">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold capitalize leading-tight animate-slideInLeft">
          Bring your aspirations to life
        </h1>
        <h1 className="text-blue-500 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold capitalize mt-3 sm:mt-4 md:mt-5 leading-tight animate-slideInRight">
          With a quick loan.
        </h1>
        <p className="text-white text-base sm:text-lg md:text-2xl mt-4 sm:mt-5 md:mt-6 leading-relaxed w-[70%] animate-fadeIn delay-500">
          Welcome to Manba Finance, where you can find your loan solution customized for your needs.
        </p>
        <button className="px-6 py-3 sm:px-9 sm:py-3 mt-6 sm:mt-8 font-medium bg-white rounded-full text-blue-500 uppercase transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Apply now
        </button>
      </div>
    </div>
  );
}

export default Home;
