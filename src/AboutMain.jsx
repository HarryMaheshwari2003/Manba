import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

import { IoIosArrowForward } from 'react-icons/io';


function AboutMain() {
    return (
        <div className="poppins-light">
            {/* About Banner */}
            <div>
                <div className='banner-img'>
                    <div className="links flex gap-2 items-center px-6 md:px-12 lg:px-24 py-16 sm:py-20">
                        <Link to="/"><h1 className="text-xl cursor-pointer md:text-2xl lg:text-3xl text-white">home</h1></Link>
                        <IoIosArrowForward className="text-gray-100 text-xl md:text-2xl lg:text-3xl" />
                        <h1 className="text-xl md:text-2xl lg:text-3xl text-[#00adef]">About Us</h1>
                    </div>
                </div>

            </div>

            {/* Who Are We Section */}
            <div className="WhoAreWe-div min-h-screen px-6 sm:px-12 md:px-20 lg:px-32">
                <h1 className="text-lg md:text-2xl font-semibold text-[#0d6efd] underline uppercase mt-10 md:mt-20">Welcome Message</h1>
                <h1 className="text-xl sm:text-3xl md:text-4xl font-semibold text-[#00adef] underline uppercase text-center mt-5">Who Are We</h1>
                <div className="py-10 md:py-20">
                    <p className="text-sm sm:text-base tracking-wide capitalize leading-6 w-full md:w-[99%]">
                        specialized financial institution that supplies credit for the purchase of consumer goods and services by purchasing the time-sales contracts of merchants or by granting small loans directly to consumers. Specialized consumer finance agencies now operate throughout western Europe, Canada, the United States, Australia, Japan, and some Latin American countries. Although they existed in the early 1900s, their greatest development came after World War II.
                    </p>
                    <p className="text-sm sm:text-base tracking-wide capitalize leading-6 w-full md:w-[99%] mt-6">
                        Large-sales finance companies, which operate by purchasing unpaid customer accounts at a discount from merchants and collecting payments due from consumers, were a response to the need for installment financing for the purchase of automobiles in the early 1900s. Ally Financial, for example, was established as the General Motors Acceptance Corporation (GMAC) in 1919 to purchase automobile accounts receivable from car dealers who were themselves unable to finance time purchases. Many companies in both Europe and the United States continue to specialize in financing purchases of particular commodities and remain closely associated with specific manufacturers. Some also extend credit for wholesale purchases by retail dealers.
                    </p>
                    <p className="text-sm sm:text-base tracking-wide capitalize leading-6 w-full md:w-[99%] mt-6">
                        Consumer finance or small-loan companies also arose in the 1900s. Until then the need for consumer loans had been met primarily by illegal “loan shark” activities because it was unprofitable for banks to make small loans at rates below legally set usury levels. In 1911 several states in the United States began adopting small-loan laws that authorized loans to consumers at rates above usury levels, making it financially practical to operate a consumer loan business. Today many companies engage both in the sales-finance business and in making loans directly to consumers.
                    </p>
                </div>
            </div>

            {/* Values Section */}
            <div className="Values-div bg-[#f1fafe] px-6 sm:px-12 md:px-20 lg:px-5 py-20">
                <h1 className="text-3xl md:text-5xl text-center text-[#00adef]">Values</h1>
                <h3 className="text-base md:text-lg font-normal text-center mt-5 leading-7 mx-auto max-w-3xl">
                    Our values are anchored around our business ethics, consumer focus, and corporate responsibility towards society at large.
                </h3>
                <div className="wrapper flex flex-wrap justify-center gap-6 mt-10">
                    <div className="h-auto w-44 sm:w-52 text-center">
                        <h1 className="text-6xl sm:text-8xl">C</h1>
                        <h4 className="text-sm sm:text-base mt-3">Cost-effective & simple</h4>
                    </div>
                    <div className="h-auto w-44 sm:w-52 text-center">
                        <h1 className="text-6xl sm:text-8xl">R</h1>
                        <h4 className="text-sm sm:text-base mt-3">Respect for all</h4>
                    </div>
                    <div className="h-auto w-44 sm:w-52 text-center">
                        <h1 className="text-6xl sm:text-8xl">E</h1>
                        <h4 className="text-sm sm:text-base mt-3">Exemplary governance</h4>
                    </div>
                    <div className="h-auto w-44 sm:w-52 text-center">
                        <h1 className="text-6xl sm:text-8xl">A</h1>
                        <h4 className="text-sm sm:text-base mt-3">Accountability, professionalism & discipline</h4>
                    </div>
                    <div className="h-auto w-44 sm:w-52 text-center">
                        <h1 className="text-6xl sm:text-8xl">T</h1>
                        <h4 className="text-sm sm:text-base mt-3">Transparency & integrity</h4>
                    </div>
                    <div className="h-auto w-44 sm:w-52 text-center">
                        <h1 className="text-6xl sm:text-8xl">E</h1>
                        <h4 className="text-sm sm:text-base mt-3">Effective teamwork and commitment</h4>
                    </div>
                </div>
            </div>

            {/* How It Works Section */}
            <div className="howItWorks bg-white px-6 sm:px-12 md:px-20 lg:px-32 py-20">
                <h1 className="text-3xl md:text-5xl font-semibold text-center text-[#00adef] capitalize">
                    How it works
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                    {/* Card 1 */}
                    <motion.div
                        className="bg-[#2dbcf6] flex flex-col items-center p-6 lg:p-20 rounded-3xl text-center text-white"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="h-32 w-32 bg-white rounded-full overflow-hidden flex items-center justify-center">
                            <img src="src/assets/loan1.jpg" alt="Fast Loans" className="h-14 w-14" />
                        </div>
                        <h1 className="text-xl md:text-3xl mt-6">Fast Loans</h1>
                        <p className="text-sm sm:text-base mt-4">
                            We are always flexible enough to cover all of your financial needs, whichever those might be. Regardless of whether you're about to make a first-time home purchase.
                        </p>
                    </motion.div>
                    {/* Card 2 */}
                    <motion.div
                        className="bg-[#2dbcf6] flex flex-col items-center p-6 lg:p-20 rounded-3xl text-center text-white"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="h-32 w-32 bg-white rounded-full overflow-hidden flex items-center justify-center">
                            <img src="src/assets/loan2.jpg" alt="Flexible Money" className="h-14 w-14" />
                        </div>
                        <h1 className="text-xl md:text-3xl mt-6">Flexible Money</h1>
                        <p className="text-sm sm:text-base mt-4">
                            We understand that financial situations, credit scores, and other financially-related things can vary. That is why we employ a flexible, person-centric approach to each.
                        </p>
                    </motion.div>
                    {/* Card 3 */}
                    <motion.div
                        className="bg-[#2dbcf6] flex flex-col items-center p-6 lg:p-20 rounded-3xl text-center text-white"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="h-32 w-32 bg-white rounded-full overflow-hidden flex items-center justify-center">
                            <img src="src/assets/loan3.jpg" alt="Seasoned Team" className="h-14 w-14" />
                        </div>
                        <h1 className="text-xl md:text-3xl mt-6">Seasoned Team</h1>
                        <p className="text-sm sm:text-base mt-4">
                            Our experts spent the last few years excelling their skills and expanding their practical knowledge. We're the best; each of our crew members is...
                        </p>
                    </motion.div>
                    {/* Card 4 */}
                    <motion.div
                        className="bg-[#2dbcf6] flex flex-col items-center p-6 lg:p-20 rounded-3xl text-center text-white"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="h-32 w-32 bg-white rounded-full overflow-hidden flex items-center justify-center">
                            <img src="src/assets/loan4.jpg" alt="Helpful" className="h-14 w-14" />
                        </div>
                        <h1 className="text-xl md:text-3xl mt-6">Helpful</h1>
                        <p className="text-sm sm:text-base mt-4">
                            With so many mortgages and loans featuring interest rates that are just outright bad, we're here to level the field. Thanks to our refinancing and home equity loan programs you'll...
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default AboutMain;
