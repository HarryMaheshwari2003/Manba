import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { IoIosArrowForward } from 'react-icons/io';


function OurServices() {
    return (
        <div className="poppins-light">
            {/* Banner Section */}
            <div className="imgOfBanner">
                <div className="links flex gap-2 items-center px-6 md:px-12 lg:px-24 py-16 sm:py-10 ">
                    <Link to="/"><h1 className="text-xl cursor-pointer md:text-2xl lg:text-3xl text-white">home</h1></Link>
                    <IoIosArrowForward className="text-gray-100 text-xl md:text-2xl lg:text-3xl" />
                    <h1 className="text-xl md:text-2xl lg:text-3xl text-[#00adef]">Services</h1>
                </div>
                <div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold ml-6 md:ml-12 lg:ml-24 mt-6 md:mt-10">
                        Our<span className="ml-2 tracking-tighter text-3xl md:text-4xl lg:text-5xl font-semibold text-[#00adef]">Services</span>
                    </h1>
                    <p className="leading-7 md:leading-9 font-normal tracking-wide text-white text-lg md:text-xl lg:text-2xl w-[90%] md:w-[70%] lg:w-[55%] mt-6 md:mt-8 lg:mt-12 ml-6 md:ml-12 lg:ml-24">
                        Our dedicated customer support team is here to assist you at every stage of your loan journey. Whether you have questions about the application process or need advice on the right loan for your situation, we're just a call or message away.
                    </p>
                    <button className="px-4 md:px-6 py-2 bg-white text-[#00adef] rounded-3xl tracking-widest uppercase ml-6 md:ml-12 lg:ml-24 mt-8 md:mt-12 lg:mt-16">
                        apply now
                    </button>
                </div>
            </div>

            {/* Second Part */}
            <div className="h-auto w-full bg-white p-6 md:p-12 lg:p-24">
                <div className="flex flex-wrap justify-center lg:justify-between gap-6">
                    {/* Personal Loan */}
                    <motion.div
                        className="h-auto w-full sm:w-[45%] lg:w-[29%] rounded-2xl py-12 md:py-16 bg-[#00adef] flex flex-col items-center text-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img
                            src="src/assets/l1.png"
                            className="h-12 w-12 md:h-14 md:w-14 filter brightness-0 invert"
                            alt="Personal Loan"
                        />
                        <h1 className="text-xl md:text-2xl text-white mt-6 md:mt-10">Personal Loan</h1>
                        <p className="leading-5 w-[80%] text-sm md:text-lg text-white mt-6 md:mt-10">
                            Get Personal Loan Based On Your Credit Profile- From 1 Lakh To 15 Lakh.
                        </p>
                        <button className="px-4 md:px-6 py-2 bg-white text-[#00adef] rounded-3xl tracking-widest uppercase mt-12 md:mt-28">
                            find out more
                        </button>
                    </motion.div>

                    {/* Gold Loan */}
                    <motion.div
                        className="h-auto w-full sm:w-[45%] lg:w-[29%] rounded-2xl py-12 md:py-16 bg-[#00adef] flex flex-col items-center text-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img
                            src="src/assets/l2.png"
                            className="h-12 w-12 md:h-14 md:w-14 filter brightness-0 invert"
                            alt="Gold Loan"
                        />
                        <h1 className="text-xl md:text-2xl text-white mt-6 md:mt-10">Gold Loan</h1>
                        <p className="leading-5 w-[80%] text-sm md:text-lg text-white mt-6 md:mt-10">
                            The most significant objective is to project gold loans as a 'Good Smart Option' for seeking financial credit.
                        </p>
                        <button className="px-4 md:px-6 py-2 bg-white text-[#00adef] rounded-3xl tracking-widest uppercase mt-12 md:mt-20">
                            find out more
                        </button>
                    </motion.div>

                    {/* Home Loan */}
                    <motion.div
                        className="h-auto w-full sm:w-[45%] lg:w-[29%] rounded-2xl py-12 md:py-16 bg-[#00adef] flex flex-col items-center text-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img
                            src="src/assets/l3.png"
                            className="h-12 w-12 md:h-14 md:w-14 filter brightness-0 invert"
                            alt="Home Loan"
                        />
                        <h1 className="text-xl md:text-2xl text-white mt-6 md:mt-10">Home Loan</h1>
                        <p className="leading-5 w-[80%] text-sm md:text-lg text-white mt-6 md:mt-10">
                            Various insurers in India & buy insurance policy online. Get instant quotes & save huge on premiums.
                        </p>
                        <button className="px-4 md:px-6 py-2 bg-white text-[#00adef] rounded-3xl tracking-widest uppercase mt-12 md:mt-20">
                            find out more
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Third Part */}
            <div className="h-auto w-full bg-white poppins-light p-6 md:p-12 lg:p-20">
                {/* First Box */}
                <div className="first-box h-auto lg:h-[35vh] w-[90%] md:w-[60%] lg:w-[25%] mx-auto flex flex-col justify-center items-center text-center">
                    <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">Business Loan</h1>
                    <p className="text-sm md:text-lg lg:text-xl mt-4 font-normal w-[90%] sm:w-[80%]">
                        Get Unsecured Business Loan For Business Expansion And Working Capital From 5 Lakh To 5 Cr.
                    </p>
                </div>

                {/* Flex Container */}
                <div className="flex flex-wrap justify-center lg:gap-10">
                    {/* Personal Loan */}
                    <div className="first-box h-auto lg:h-[45vh] w-full sm:w-[80%] md:w-[45%] lg:w-[25%] flex flex-col justify-center items-center text-center mt-12 mb-10">
                        <h1 className="text-lg md:text-xl lg:text-2xl pt-4 font-semibold">Personal Loan</h1>
                        <p className="text-sm md:text-lg lg:text-xl mt-4 font-normal w-[90%] sm:w-[80%]">
                            A big part of financial freedom is having your heart and mind free from worry about the what-ifs of life.
                        </p>
                    </div>

                    {/* Image Box */}
                    <div className="first-box h-auto w-full sm:w-[80%] md:w-[45%] lg:w-[30%]">
                        <img
                            src="src/assets/serviceaboutimg.png"
                            alt="Service About"
                            className="w-full h-auto rounded-2xl shadow-lg"
                        />
                    </div>

                    {/* Gold Loan */}
                    <div className="first-box h-auto lg:h-[45vh] w-full sm:w-[80%] md:w-[45%] lg:w-[25%] flex flex-col justify-center items-center text-center mt-10">
                        <h1 className="text-lg md:text-xl lg:text-2xl pt-4 font-semibold">Gold Loan</h1>
                        <p className="text-sm md:text-lg lg:text-xl mt-4 font-normal w-[90%] sm:w-[80%]">
                            One can pay back the loan of gold, but one dies forever in debt to those who are kind.
                        </p>
                    </div>
                </div>

                {/* Last Box */}
                <div className="first-box h-auto lg:h-[35vh] w-[90%] md:w-[60%] lg:w-[25%] mx-auto flex flex-col justify-center items-center lg:mt-1 mt-10 text-center">
                    <h1 className="text-lg md:text-xl lg:text-2xl pt-4 font-semibold">Home Loan</h1>
                    <p className="text-sm md:text-lg lg:text-xl mt-4 font-normal w-[90%] sm:w-[80%]">
                        Owning a home is the most desirable thing for all. It acts as your fiscal wealth and mental security.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default OurServices;
