import React from 'react';

function ManbaServices() {
  return (
    <div className="h-auto w-full">
      <div className="flex justify-center mt-32">
        <img src="src/assets/homeServiceimg.jpg" alt="Home Service" className="max-w-full h-auto" />
      </div>

      <div className="box-wrapper flex flex-wrap justify-evenly py-20 gap-8">
        <div className="h-72 w-48 bg-white flex flex-col items-center rounded-lg shadow-lg p-4">
          <img src="src/assets/f1.png" className="h-[45%] w-[69%] object-contain" alt="Image 1" />
          <h1 className="text-gray-500 text-3xl mt-5">2179</h1>
          <h1 className="text-black text-xl capitalize text-center leading-6 mt-5">successful loan approval</h1>
        </div>

        <div className="h-72 w-48 bg-white flex flex-col items-center rounded-lg shadow-lg p-4">
          <img src="src/assets/f2.png" className="h-[45%] w-[69%] object-contain" alt="Image 2" />
          <h1 className="text-gray-500 text-3xl mt-5">99%</h1>
          <h1 className="text-black text-xl capitalize text-center leading-6 mt-5">customer satisfaction</h1>
        </div>

        <div className="h-72 w-48 bg-white flex flex-col items-center rounded-lg shadow-lg p-4">
          <img src="src/assets/f3.png" className="h-[45%] w-[69%] object-contain" alt="Image 3" />
          <h1 className="text-gray-500 text-3xl mt-5">70+</h1>
          <h1 className="text-black text-xl capitalize text-center leading-6 mt-5">bank nBSC's</h1>
        </div>

        <div className="h-72 w-48 bg-white flex flex-col items-center rounded-lg shadow-lg p-4">
          <img src="src/assets/f4.png" className="h-[45%] w-[69%] object-contain" alt="Image 4" />
          <h1 className="text-gray-500 text-3xl mt-5">5+</h1>
          <h1 className="text-black text-xl capitalize text-center leading-6 mt-5">award winner</h1>
        </div>
      </div>
    </div>
  );
}

export default ManbaServices;
